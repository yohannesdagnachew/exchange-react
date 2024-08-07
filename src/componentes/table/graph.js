/* App.js */
import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');
 
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class App extends Component {
	render() {
		const options = {
			animationEnabled: true,
			title:{
				text: "USD to 1 Biir "
			},
			axisX: {
				valueFormatString: "MMM"
			},
			axisY: {
				title: "USD",
				prefix: "$"
			},
			data: [{
				yValueFormatString: "$#,###",
				xValueFormatString: "MMMM",
				type: "spline",
				dataPoints: [
					{ x: new Date(2017, 0), y: 0.018 },
					{ x: new Date(2017, 1), y:  0.018 },
					{ x: new Date(2017, 2), y: 0.018 },
					{ x: new Date(2017, 3), y: 0.018 },
					{ x: new Date(2017, 4), y: 0.018},
					{ x: new Date(2017, 5), y: 0.018 },
					{ x: new Date(2017, 6), y: 0.012 },
					{ x: new Date(2017, 7), y: 0.01 },
					{ x: new Date(2017, 8), y: 0.01 },
				]
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
export default App;                              