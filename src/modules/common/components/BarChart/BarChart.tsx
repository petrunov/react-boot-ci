import * as d3 from 'd3';
import React, { useEffect } from 'react';
// import useEffect from 'react';

interface BigChartData {
  data: number[];
}

const BarChart: React.FC<BigChartData> = (props: BigChartData): JSX.Element => {
  useEffect(() => {
    const drawChart = () => {
      const { data } = props;
      d3.select('.svg-container').remove();

      const height = 300;
      const svg = d3
        .select('#targetBarChart')
        .append('svg')
        .classed('svg-container', true)
        .attr('width', 800)
        .attr('height', height)
        .style('margin-left', 100);

      svg
        .selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr('x', (d, i) => i * 70)
        .attr('y', (d) => height - 10 * d)
        .attr('width', 65)
        .attr('height', (d) => d * 10)
        .attr('fill', 'blue');

      svg
        .selectAll('text')
        .data(data)
        .enter()
        .append('text')
        .text((d) => d)
        .attr('x', (d, i) => i * 70)
        .attr('y', (d) => height - 10 * d - 3);
    };
    drawChart();
  }, [props]);

  return (
    <div className="BarChart">
      D3.js Bar Chart
      <div id="targetBarChart" />
    </div>
  );
};

export default BarChart;
