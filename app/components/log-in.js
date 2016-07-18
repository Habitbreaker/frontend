import Ember from 'ember';
import Cookies from 'ember-cli-js-cookie';

export default Ember.Component.extend({
  loggedOut: function() {
    if(Cookies.get('loggedOut') != null) {
      return Cookies.get('loggedOut') === 'true';
    }
    return true;
  }.property(),
  avatarURL: null,
  username: null,
  ajax: Ember.inject.service(),
  userid: null,
  userOnline: Ember.inject.service('user-online'),
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
          this_comp.toggleProperty('loggedOut');
          service_User.changeStatusOnline(username);
          this_comp.set('userid',result[0][0].id);
          this_comp.set('username',username);
          this_comp.send('loadAccountPanel');
          Cookies.set('loggedOut', 'false', {expires: 7});
          Cookies.set('userid', result[0][0].id);
          Cookies.set('username', username);
        }
        else {
          alert(result.status);
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
      var this_comp = this;
      this.get('userOnline').changeStatusOffline(this_comp.username);
      this.toggleProperty('loggedOut');
      Cookies.remove('loggedOut', { path: ''});
      Cookies.remove('userid', { path: ''});
      Cookies.remove('username', { path: ''});
    },

    testStuff() {
      this.set('avatarURL', 'http://localhost:8080/avatar/' + 'Default' + '.jpeg');
      this.set('avatarURL', 'http://localhost:8080/avatar/' + this.userid + '.jpeg');
    },
  },



    init() {
      this._super(...arguments);
      if(Cookies.get('loggedOut') === 'false') {
        this.send('loadAccountPanel');
      }
    }
});
