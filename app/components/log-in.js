import Ember from 'ember';
import Cookies from 'ember-cli-js-cookie';

export default Ember.Component.extend({
  notify: Ember.inject.service('notify'),
  ajax: Ember.inject.service(),
  userOnline: Ember.inject.service('user-online'),
  loggedOut: function() {
    if(Cookies.get('loggedOut') != null) {
      return Cookies.get('loggedOut') === 'true';
    }
    return true;
  }.property(),
  avatarURL: null,
  username: null,
  userid: null,
  tagName: '',
  actions: {
    refreshIndex() {
      this.sendAction('refreshIndex');
    },

    validateLogin() {
      var service_User = this.get('userOnline');
      var username = this.get('username');
      var password = this.get('pwd');
      var this_comp = this;
      this.get('ajax').request('users', {
        method: 'POST',
        data: {
          username: username,
          password: password
        }
      }).then(function(result) {
        if(result.status === 'Logged in!') {
          this_comp.get('notify').success(result.status);
          this_comp.toggleProperty('loggedOut');
          service_User.changeStatusOnline(username);
          this_comp.set('userid',result[0][0].id);
          this_comp.set('username',username);
          this_comp.send('loadAccountPanel');
          this_comp.send('updatePageVisits');
          Cookies.set('loggedOut', 'false', {expires: 7});
          Cookies.set('userid', result[0][0].id, {expires: 7});
          Cookies.set('username', username, {expires: 7});
          this_comp.get('userOnline').getOnlineUsers();
        }
        else {
          this_comp.get('notify').error(result.status);
        }
      });
    },

    updatePageVisits() {
      this.get('ajax').request('users/updatePageVisits', {
        method: 'POST',
        data: {
          day: new Date().getDay()
        }
      });
    },

    loadAccountPanel() {
      if(Cookies.get('userid') != null) {
        this.set('userid', Cookies.get('userid'));
        this.set('username', Cookies.get('username'));
      }
      this.send('getAvatar');
    },

    getAvatar() {
      var this_comp = this;
      this.get('ajax').request('users/downloadImg', {
        method: 'POST',
        data: {
          id: this_comp.userid
        }
      }).then(function(result) {
        this_comp.set('avatarURL', result.url);
      });
    },

    logout() {
      this.get('notify').success('Logged out!');
      var this_comp = this;
      this.get('userOnline').changeStatusOffline(this_comp.username);
      this.toggleProperty('loggedOut');
      Cookies.remove('loggedOut', { path: ''});
      Cookies.remove('userid', { path: ''});
      Cookies.remove('username', { path: ''});
      this.get('userOnline').getOnlineUsers();
    },
  },



    init() {
      this._super(...arguments);
      if(Cookies.get('loggedOut') === 'false') {
        this.send('loadAccountPanel');
      }
    }
});
