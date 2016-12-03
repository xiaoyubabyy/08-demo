import React from 'react';
import echarts from 'echarts'
class Work extends React.Component {
    componentDidMount(){
      var myChart = echarts.init(document.getElementById('main'));

          myChart.setOption({
            title: { text: '我的技能展示',
            left:'center',
            padding:[25,15]
            },
            tooltip: {},
            xAxis: {
                data: ["java","h5","css3","react","nodejs","webpack"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
          });
          myChart.on('click',function(params){
            console.log(params.name);
          });
    };

  render () {
    return(
      <div id='main' style={{width:"500px",height:"400px"}}>
      work
      </div>
    )
  }
}

export default Work;
