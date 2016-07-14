import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    updateView() {
      this.refresh();
    }
  }
});
