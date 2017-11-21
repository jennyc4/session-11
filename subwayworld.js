Vue.component('bar-chart', {
  extends: VueChartJs.Bar,
  props: ['data', 'options'],
  mounted () {
    var data = this.data || {
      labels: ["Beijing", "Tokyo","Shanghai","Seoul","Guangzhou","Moscow","New York City","Hong Kong","Mexico City","Paris"],
      datasets: [
        {
          label: 'Annual subway ridership',
          backgroundColor: '#f87979',
          data: [3.660,3.411,3.401,2.620,2.568,2.384,1.757,1.716,1.624,1.526],
          datalabels: {
            align: 'end',
            anchor: 'end',
          }
        }
      ]
    };

    var options = this.options || {
      tooltips: {
        enabled: false
      },
      legend: {
        display: false
      },
			plugins: {
				datalabels: {
          display: true,
					color: '#c46060',
					font: {
						weight: 'bold'
					},
					formatter: Math.round
				}
			},
      scales: {
        yAxes:  [
          {
            display: false,
            ticks: {
              beginAtZero: true
            }
          }
        ],
        xAxes: [
          {
            categoryPercentage: 1,
            barPercentage: 2/3
          }
        ]
      }
    };

    this.renderChart(data, options);
  }
})