import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    sendData() {
      if(this.get('username').indexOf('@') === -1) {
        alert('Please enter a valid email!');
      }
      else if(this.get('pwd').length < 8) {
        alert('Password must have a minimum length of 8!');
      }
      else if(this.get('pwd') !== this.get('pwd_conf')) {
        alert('Passwords are different!');
      }
      else{
        var users = this.store.createRecord('register', {
          username: this.get('username'),
          password: this.get('pwd')
        });
          users.save();
          this.transitionToRoute('index');
      }
    }
  }
});
