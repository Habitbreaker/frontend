import Ember from 'ember';

export default Ember.Component.extend({
  online: Ember.inject.service('user-online'),
  didRender() {
      this._super(...arguments);

      let element = this.get('online').getOnlineUsers();
      this.$('.online-container').append(element);
  }
});
