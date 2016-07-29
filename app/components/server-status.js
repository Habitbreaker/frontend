import Ember from 'ember';

export default Ember.Component.extend({
  ajax: Ember.inject.service(),
  isOnline: null,
  allOffline: false,
  didRender() {
    this._super(...arguments);
    var _this = this;

    this.get('ajax').request('status').then(function(result) {
      if (result.status === 'online') {
        _this.set('isOnline', true);
      } else {
        _this.set('isOnline', false);
      }
    }).catch(function(error) {
        console.log(error);
        _this.set('allOffline', true);
    });
  }

});
