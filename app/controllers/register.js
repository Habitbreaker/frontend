import Ember from 'ember';

export default Ember.Controller.extend({
  notify: Ember.inject.service('notify'),
  actions: {
    sendData() {
      var notify = this.get('notify');
      if(this.get('username').indexOf('@') === -1) {
        notify.error('Please enter a valid email!', {
          closeAfter: 4000
        });
      }
      else if(this.get('pwd').length < 8) {
        notify.error('Password must have a minimum length of 8!', {
          closeAfter: 4000
        });
      }
      else if(this.get('pwd') !== this.get('pwd_conf')) {
        notify.error('Passwords are different!', {
          closeAfter: 4000
        });
      }
      else{
        var users = this.store.createRecord('register', {
          username: this.get('username'),
          password: this.get('pwd')
        });
          users.save();
          notify.success('Registered successfull!');
          this.transitionToRoute('index');
      }
    }
  }
});
