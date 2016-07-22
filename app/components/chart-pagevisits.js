import Ember from 'ember';
// import darkBlue from '../themes/dark-blue';
import defaultTheme from '../themes/default-theme';

export default Ember.Component.extend({
  ajax: Ember.inject.service(),

  chartOptions: {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Page Visits',
      style: {
        fontSize: '36px',
        fontWeight: 'normal'
      }
    },
    xAxis: {
      categories: ['Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.', 'Sun.']
    },
    yAxis: {
      allowDecimals: false,
      title: {
        text: 'Visits'
      }
    }
  },

  chartData: function() {
    var _this = this;
    this.get('ajax').request('users/getPageVisits').then(function(result) {
      var bar = [
        {
          name: 'Visitors',
          data: [result[1].visits, result[2].visits, result[3].visits, result[4].visits, result[5].visits, result[6].visits, result[0].visits]
        }
      ];
      _this.set('chartData', bar);
    });

  }.property(),

  theme: defaultTheme

});
