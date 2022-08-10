import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import React, { useEffect, useState } from "react";
import "../../style/activityBarChart.css";
import PropTypes from "prop-types";

/**
 * Using a useEffect hook to set the state of activityData to current data and display it in the
 * Bar chart.
 * @returns The BarChart component
 * @param {object} datas
 * @param {object} activityData
 * @param {object} data
 * @param {object} payload
 * @component ActivityBarChart
 *
 */

function ActivityBarChart({ datas }) {
  const [activityData, setActivityData] = useState([]);

  useEffect(() => {
    if (datas.activity?.sessions.length >= 1) {
      setActivityData(datas.activity?.sessions);
    }
  }, [datas]);

  const data = activityData.map((element, index) => {
    return {
      day: index + 1,
      kg: element.kilogram,
      cal: element.calories,
    };
  });
  /**
   * Function that customizes the tooltip component with the kg and cal value.
   * @param {Boolean} active if active
   * @param {Array} payload [0] (Number) sessionLength value
   * @returns {reactElement} Component if active
   */

  function CustomTooltip({ active, payload }) {
    if (active && payload) {
      return (
        <div className="custom-tooltip">
          <p className="value">{`${payload[0].value}kg`}</p>
          <p className="value">{`${payload[1].value}kcal`}</p>
        </div>
      );
    }
  }

  return (
    <div className="activity-chart">
      <div className="activity-chart-title">
        <div className="act-title">
          <div className="activity-chart-title-one">Activité quotidienne</div>
          <div className="activity-chart-title-two">
            <ul>
              <li>
                <span className="width-li-black">•</span>
                <span className="text-activity">Poids (kg)</span>
              </li>
              <li>
                <span className="width-li-red">•</span>
                <span className="text-activity">Calories brulées (kCal)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <BarChart
        width={810}
        height={300}
        data={data}
        barCategoryGap={18}
        barGap={6}
        margin={{
          top: 40,
          right: 10,
          left: 30,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="2 2" vertical={false} />
        <XAxis
          dataKey="day"
          tickLine={false}
          tick={{ fontSize: 14, fontWeight: 500 }}
          dy={1}
        />
        <YAxis
          yAxisId={"kg"}
          dataKey="kg"
          domain={["dataMin - 1", "dataMax + 2"]}
          tick={{ fontWeight: "500", fontSize: "14px" }}
          tickMargin={40}
          tickLine={false}
          orientation="right"
          axisLine={false}
        />
        <YAxis
          yAxisId={"cal"}
          hide={true}
          domain={["dataMin - 100", "dataMax "]}
        />
        <Tooltip
          content={<CustomTooltip />}
          cursor={{ fill: "#e0e0e0", opacity: "0.7" }}
        />
        <Bar
          yAxisId={"kg"}
          dataKey="kg"
          fill="#282D30"
          radius={[50, 50, 0, 0]}
          barSize={6}
        />
        <Bar
          yAxisId={"cal"}
          dataKey="cal"
          fill="#E60000"
          radius={[50, 50, 0, 0]}
          barSize={6}
        />
      </BarChart>
    </div>
  );
}
export default ActivityBarChart;
ActivityBarChart.propTypes = {
  datas: PropTypes.shape({
    activity: PropTypes.shape({
      sessions: PropTypes.any.isRequired,
      day: PropTypes.string,
      kg: PropTypes.number,
      cal: PropTypes.number,
    }),
  }),
};
