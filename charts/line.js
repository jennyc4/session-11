Vue.component('line-chart', {
  extends: VueChartJs.Line,
  props: ['data', 'options'],
  mounted () {
    var data = this.data || {
      labels: ["2011","2012","2013","2014","2015","2016"],
      datasets: [
        {
          label: 'GitHub Commits',
          borderColor: '#6699ff',
          backgroundColor: 'transparent',
          data: [1.640, 1.655, 1.708, 1.751, 1.763, 1.757]
        }
      ]
    };

    var options = this.options || {
      legend: {
        display: false
      },
      scales: {
        yAxes: [
          {
            ticks: {
              min: 1.5,
              max: 2
            }
          }
        ]
      }
    };

    this.renderChart(data, options);
  }
})
