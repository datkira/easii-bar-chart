import React, {Component} from 'react';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

class ChatCustomize extends Component {
  state = {
    testValue: 0
  }

  componentDidMount() {
    this.setState({
      testValue: 140
    })
  }

  changeValueHandler = () => {
    this.setState({
      testValue: 1000
    })
  }

  render() {
    const defaultSetting = {
      chart: {
        type: 'column'
      },
      credits: {
        enabled: false,
      },
      title: {
        text: 'Monthly Average Rainfall'
      },
      subtitle: {
        text: 'Source: WorldClimate.com'
      },
      xAxis: {
        categories: [
          'Facebook',
          'Facebook Ads',
          'Youtube',
          'Twitter',
          'Instagram',
          'LinkedIn',
        ],
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {}
      },
      tooltip: {
        backgroundColor: '#ffffff',
        headerFormat: '<span style="font-size:13px"><b style="color: blue">{point.key}</b></span><table>',
        pointFormat: '<tr><td style=";padding:0"><b>{series.name}</b>: </td>' +
          '<td style="padding:0">{point.y}</td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      series: [{
        name: 'Comments',
        data: [49, 71, 106, 129, this.state.testValue],
        color: 'rgb(71, 145, 255)'
      }, {
        name: 'Followers',
        data: [83, 78, 98, 93, 106],
        color: 'rgb(255, 35, 102)'
      }, {
        name: 'Posts',
        data: [48, 38, 39, 41, 47],
        color: 'rgb(2, 188, 119)'
      }, {
        name: 'Engagement',
        data: [42, 33, 34, 39, 52],
        color: 'rgb(255,223,54)'
      }]
    }
    return (
      <>
        <button onClick={this.changeValueHandler}>Click to check</button>
        <HighchartsReact
          highcharts={Highcharts}
          options={defaultSetting}
        />
      </>
    );
  }
}

export default ChatCustomize