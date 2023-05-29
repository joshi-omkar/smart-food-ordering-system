import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import '../Styles/RevenueChart.css'

const LineChart = () => {
  const svgRef = useRef(null);
  const [selectedOption, setSelectedOption] = useState("monthly");
  const [data, setData] = useState([]);

  // Monthly revenue data
  const monthlyData = [
    { date: "2022-01-01", revenue: 100 },
    { date: "2022-02-01", revenue: 150 },
    { date: "2022-03-01", revenue: 200 },
    { date: "2022-04-01", revenue: 180 },
    { date: "2022-05-01", revenue: 210 },
    { date: "2022-06-01", revenue: 170 },
    { date: "2022-07-01", revenue: 120 },
    { date: "2022-08-01", revenue: 200 },
    { date: "2022-09-01", revenue: 180 },
    { date: "2022-10-01", revenue: 140 },
    { date: "2022-11-01", revenue: 150 },
    { date: "2022-12-01", revenue: 175 },
  ];

  const yearlyData = [
    { date: "2018-04-01", revenue: 1600 },
    { date: "2019-05-01", revenue: 1700 },
    { date: "2020-01-01", revenue: 1200 },
    { date: "2021-02-01", revenue: 1800 },
    { date: "2022-03-01", revenue: 3000 },
    { date: "2023-06-01", revenue: 1900 },
  ];

  useEffect(() => {
    selectedOption === "monthly" ? setData(monthlyData) : setData(yearlyData);
  }, [selectedOption]);

  useEffect(() => {
    if (data.length === 0) return;

    // Clear previous chart
    d3.select(svgRef.current).selectAll("*").remove();

    // Set dimensions
    const width = 400;
    const height = 300;
    const margin = { top: 20, right: 20, bottom: 30, left: 50 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // Parse dates
    const parseDate = d3.timeParse("%Y-%m-%d");
    data.forEach((d) => {
      d.date = parseDate(d.date);
      d.revenue = +d.revenue;
    });

    // Set scales
    const xScale = d3
      .scaleTime()
      .domain(d3.extent(data, (d) => d.date))
      .range([0, innerWidth]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.revenue)])
      .range([innerHeight, 0]);

    // Set line
    const line = d3
      .line()
      .x((d) => xScale(d.date))
      .y((d) => yScale(d.revenue));

    // Create SVG element
    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Add x-axis
    svg
      .append("g")
      .attr("transform", `translate(0, ${innerHeight})`)
      .attr('class', 'chart-axis-x')
      .call(d3.axisBottom(xScale));

    // Add y-axis
    svg.append("g").attr('class', 'chart-axis-y').call(d3.axisLeft(yScale));

    // Add line
    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 2)
      .attr("d", line)
      .on('mouseover', function () {
        d3.select(this).attr('class', 'chart-line-hover');
      })
      .on('mouseout', function () {
        d3.select(this).attr('class', 'chart-line');
      });
  }, [data]);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="chart-container" >
      <div>
        <h3>Revenue</h3>
      <select className="select-option" value={selectedOption} onChange={handleSelectChange}>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
      </div>
      
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default LineChart;
