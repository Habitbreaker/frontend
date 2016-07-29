import Ember from 'ember';

export default Ember.Service.extend({
  ajax: Ember.inject.service(),

  getOnlineUsers() {
    /* jshint loopfunc:true */

    Ember.$('#user-list').empty();
    var _this = this;

    this.get('ajax').request('onlineUsers').then(function(result) {
      for (var i = 0; i < result.length; i++) {

        //create div
        let div = document.createElement('div');
        let username = result[i].username.split('@')[0];
        div.innerHTML = username;
        div.className = 'chip';

        //create img
        let avatar = document.createElement('img');

        //get img.src
        _this.get('ajax').request('users/downloadImg', {
          method: 'POST',
          data: {
            id: result[i].id
          }
        }).then(function(result) {
          avatar.src = result.url;
        });

        //create li
        let listItem = document.createElement('li');

        //append elements
        div.appendChild(avatar);
        listItem.appendChild(div);
        Ember.$('#user-list').append(listItem);
      }
    });

    //append to component
    Ember.$('.online-container').append(Ember.$('#user-list'));
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
