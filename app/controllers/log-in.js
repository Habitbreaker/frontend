import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    refreshIndex() {
      this.transitionToRoute('register');
      this.transitionToRoute('index');
    }
  }
});
