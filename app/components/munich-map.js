import Ember from 'ember';
import Cookies from 'ember-cli-js-cookie';

export default Ember.Component.extend({
  //Munich
  // lat: 48.1374300,
  // lng: 11.5754900,
  // zoom: 10

  lng: function() {
    if (Cookies.get('loggedOut') != null) {
      return Cookies.get('map.lng');
    }
    return 11.5754900;
  }.property(),
  lat: function() {
    if (Cookies.get('loggedOut') != null) {
      return Cookies.get('map.lat');
    }
    return 48.1374300;
  }.property(),
  zoom: function() {
    if (Cookies.get('loggedOut') != null) {
      return Cookies.get('map.zoom');
    }
    return 10;
  }.property(),
  zoomAnimationThreshold: 50,
  gefasoft: {
    name: 'Gefasoft',
    adr: 'Dessauerstraße 15',
    lat: 48.1808975,
    lng: 11.532736,
  },

  actions: {
    zoomIn(e) {
      let location = e.target.getLatLng();
      this.set('lng', location.lng);
      this.set('lat', location.lat);
      this.set('zoom', 18);
    },

    updateZoom(e) {
      this.set('zoom', e.target.getZoom());
      Cookies.set('map.zoom', e.target.getZoom(), {
        expires: 7
      });
    },

    updateCenter(e) {
      let center = e.target.getCenter();
      this.set('lat', center.lat);
      this.set('lng', center.lng);
      Cookies.set('map.lng', center.lng, {
        expires: 7
      });
      Cookies.set('map.lat', center.lat, {
        expires: 7
      });
    },
  }
});
