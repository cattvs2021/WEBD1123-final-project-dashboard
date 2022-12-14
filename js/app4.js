var chartDom = document.getElementById('myGraph4');
var myChart = echarts.init(chartDom);
var option;

option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [
        120,
        {
          value: 200,
          itemStyle: {
            backgroundColor: "#F00",
            color: { 
              backgroundColor: "#F00",
              type: "linear",
              x: 0,
              y: 1,
              x2: 1,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "rgb(223, 55, 190)",
                }, 
                {
                  offset: 1,
                  color: "rgb(106, 64, 204)",
                },
              ],
            },
          },
        },
        150,
        80,
        70,
        110,
        130
      ],
      type: 'bar'
    }
  ]
};

option && myChart.setOption(option);