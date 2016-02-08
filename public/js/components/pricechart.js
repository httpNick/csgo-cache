import React from 'react';
var LineChart = require("react-chartjs").Line;

var getLabels = (count) => {
  var labels = [];
  for (var i  = 1; i <= count; i++) {
    labels.push(i);
  }
  return labels;
};

var data = {


  labels: getLabels(50),
  datasets: [
    {
      label: "lowest price",
      fillColor: "rgba(220,220,220,0.2)",
      strokeColor: "rgba(220,220,220,1)",
      pointColor: "rgba(220,220,220,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data: []
    },
    {
      label: "median price",
      fillColor: "rgba(151,187,205,0.2)",
      strokeColor: "rgba(151,187,205,1)",
      pointColor: "rgba(151,187,205,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(151,187,205,1)",
      data: []
    }
  ]
};

export default class PriceChart extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    data.datasets[0].data = this.props.lowest;
    data.datasets[1].data = this.props.median;
  }

  componentDidUpdate(prevProps, prevState) {
  }

  componentWillUpdate(nextProps, nextState) {
  }

  render() {
    return (
      <div className="single-result-panel">
        <div className="chart-panel">
          <LineChart data={data} width="600" height="250"/>
        </div>
      </div>
    )
  }

};
