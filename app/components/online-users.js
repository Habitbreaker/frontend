import Ember from 'ember';

export default Ember.Component.extend({
  online: Ember.inject.service('user-online'),
  didRender() {
      this._super(...arguments);
      this.get('online').getOnlineUsers();
  }
});
