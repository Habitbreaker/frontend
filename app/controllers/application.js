import Ember from 'ember';

export default Ember.Controller.extend({
  userOnline: Ember.inject.service('user-online'),
  actions: {
    refreshIndex() {
      this.transitionToRoute('index');
    }
  }
});
