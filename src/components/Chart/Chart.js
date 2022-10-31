import React from "react";
import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ title, data, dataKey, grid }) => {
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="##1D1D1D" />
          <Line type="monotone" dataKey={dataKey} stroke="#1D1D1D" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#E0E0E0" />}
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
