// import JSONAPIAdapter from 'ember-data/adapters/json-api';
import RESTAdapter from 'ember-data/adapters/rest';
import Ember from 'ember';

export default RESTAdapter.extend({
  host: 'http://localhost:8080',
  pathForType: function(type) {
    var camelized = Ember.String.camelize(type);
    return Ember.String.singularize(camelized);
  },
});
