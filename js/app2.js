$(function(){
    let myGraph2 = document.getElementById("myGraph2");
    console.log(myGraph2);
    let myChart = echarts.init(myGraph2);
    let option;
const gaugeData = [
    {
      value: 17,
      title: {
        offsetCenter: ["0%", "0%"],
      },
      detail: {
        valueAnimation: true,
        offsetCenter: ["0%", "0%"],
      },
    },
  ];
  option = {
    series: {
      type: "gauge",
      startAngle: 90,
      endAngle: -270,
      max: 30,
      min: 0,
      backgroundColor: "#F00",
      itemStyle: {
        backgroundColor: "#F00",
      },
      pointer: {
        show: false,
      },
      progress: {
        show: true,
        overlap: false,
        roundCap: true,
        clip: false,
      
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
      axisLine: {
        lineStyle: {
          width: 20,
        },
        itemStyle: {
          backgroundColor: "#F00"
        }
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      data: gaugeData,
      detail: {
        width: 50,
        height: 14,
        color: "#FFFFFF",
        fontSize: 32,
        valueAnimation: true,
        formatter: "{value}",
      },
    },
  };
  option && myChart.setOption(option);
});

