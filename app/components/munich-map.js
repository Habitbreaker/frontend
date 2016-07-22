import Ember from 'ember';

export default Ember.Component.extend({
  //Munich
  // lat: 48.1374300,
  // lng: 11.5754900,
  // zoom: 10

    lng: 11.5901712,
    lat: 47.8540114,
    zoom: 10,
    zoomAnimationThreshold: 50,
    gefasoft:
      {
        name: 'Gefasoft',
        adr: 'Dessauerstraße 15',
        lat: 48.181002,
        lng: 11.531930,
      },

      actions: {
        zoomIn(e) {
          let location = e.target.getLatLng();
          this.set('lng', location.lng);
          this.set('lat', location.lat);
          this.set('zoom', 20);
        },

        updateZoom(e) {
          this.set('zoom', e.target.getZoom());
        },

        updateCenter(e) {
          let center = e.target.getCenter();
          this.set('lat', center.lat);
          this.set('lng', center.lng);
    },
      }
});
