import React from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";
import { useEffect, useState } from "react";
import "../../style/pieChartScore.css";
import PropTypes from "prop-types";

/**
 * Using a useEffect hook to set the state of todayScore to the data to display in the
 * pieChart.
 * @returns The pieChart component
 * @param {object} datas
 * @param {string} COLORS
 * @param {object} todayScore || score
 * @param {object} data
 * @param {object} payload
 * @component PieChartScore
 *
 */
function PieChartScore({ datas }) {
  const [todayScore, setTodayScore] = useState(0);
  const COLORS = ["#FF0000", "#FFFFFF"];

  useEffect(() => {
    if (datas.user?.todayScore) {
      setTodayScore(datas.user?.todayScore * 100);
    }
  }, [datas]);
  // console.log(datas);

  const data = [
    { total: Number(todayScore) },
    { total: 100 - Number(todayScore) },
  ];
  //console.log(data);
  /**
   * Function that customizes the Legend component with the todayScore value.
   * @param {Array} payload [0] (Number) score value
   * @returns {reactElement} if active
   */

  function CustomLegend({ payload }) {
    if (payload && payload.length) {
      return (
        <div className="container-legend-score">
          <p className="score-result">{payload[0].payload.value}%</p>
          <p className="score-p">de votre</p>
          <p className="score-p">objectif</p>
        </div>
      );
    }
  }

  return (
    <div className="radialprogress">
      <h3 className="score">Score</h3>

      <PieChart width={280} height={280}>
        <Pie
          data={data}
          dataKey="total"
          cx={120}
          cy={100}
          innerRadius={90}
          outerRadius={100}
          fill="#FFFFFF"
          paddingAngle={5}
          startAngle={90}
          endAngle={450}
          cornerRadius={10}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Pie
          cx={120}
          cy={100}
          outerRadius={"90"}
          fill={"#FFFFFF"}
          data={[{ value: 100 }]}
          dataKey="value"
        />
        <Legend verticalAlign="middle" content={CustomLegend} />
      </PieChart>
    </div>
  );
}

export default PieChartScore;

PieChartScore.propTypes = {
  datas: PropTypes.shape({
    user: PropTypes.shape({
      todayScore: PropTypes.number.isRequired,
    }),
  }),
};
