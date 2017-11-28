Vue.component('multiline-chart', {
  extends: VueChartJs.Line,
  props: ['data', 'options'],
  mounted () {
    var data = this.data || {
      labels: ["Jan 2010", "Feb 2010", "Mar 2010", "Apr 2010", "May 2010", "June 2010", "July 2010", "Aug 2010", "Sept 2010", "Oct 2010", "Nov 2010", "Dec 2010", "Jan 2011", "Feb 2011", "Mar 2011", "Apr 2011", "May 2011"],
      datasets: [
        {
          label: 'Catégorie ABC',
          borderColor: '#abc491',
          backgroundColor: 'transparent',
          data: [ ]
        },
        {
          label: 'Catégorie A',
          borderColor: '#7fab54',
          backgroundColor: 'transparent',
          data: [179692, 186298, 213410, 210439, 187140, 159454, 126376, 146705, 148004, 176252, 208109, 165152, 193371, 188717, 192527, 219564, 236322]
        }
      ]
    };

    var options = this.options || { };

    this.renderChart(data, options);
  }
})
