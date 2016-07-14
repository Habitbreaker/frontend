import Ember from 'ember';

export default Ember.Service.extend({
  ajax: Ember.inject.service(),
  getOnlineUsers() {
    var element = document.createElement('ul');
      this.get('ajax').request('onlineUsers').then(function(result){
        for(var i = 0; i < result.length;i++) {
          let listItem = document.createElement('li');
          listItem.innerHTML = result[i].username;
          element.appendChild(listItem);
        }
      });
      return element;
    },

    changeStatusOnline(username) {
      this.get('ajax').request('onlineUsers/online', {
        data: {
          username: username
        }
      });
    },

    changeStatusOffline(username) {
      this.get('ajax').request('onlineUsers/offline', {
        data: {
          username: username
        }
      });
    },

    toggleProperty(property, object) {
      object.toggleProperty(property);
    }
});
