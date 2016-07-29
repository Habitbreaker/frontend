import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  // this.route('register', { path: 'register/:username'});
  this.route('register', function() {
    this.route('submitInput');
  });
  this.route('database');
});

export default Router;
