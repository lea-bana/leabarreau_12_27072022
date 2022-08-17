import { LineChart, Line, XAxis, YAxis, Tooltip, Rectangle } from "recharts";
import React, { useEffect, useState } from "react";
import "../../style/sessionsLineChart.css";
import PropTypes from "prop-types";

/**
 * Using a useEffect hook to set the state of averageTime to the data to display in the
 * LineChart.
 * @returns The LineChart component
 * @param {object} datas
 * @param {string} initialDayWeek
 * @param {object} averageTime
 * @param {object} data
 * @param {object} payload
 * @param {object} props
 * @component SessionsLineChart
 *
 */
function SessionsLineChart({ datas }) {
  const initialDayWeek = ["L", "M", "M", "J", "V", "S", "D"];
  const [averageTime, setAverageTime] = useState([]);
  useEffect(() => {
    if (datas?.sessions) {
      setAverageTime(...averageTime, datas.sessions.sessions);
      //console.log("this is averagetime after setter", averageTime);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [datas]);
  const data = averageTime.map((element) => {
    return {
      initialDayWeek: initialDayWeek[element.day - 1],
      sessionLength: element.sessionLength,
    };
  });

  /**
   * Function that customizes the tooltip component with the sessionlength value.
   * @param {Boolean} active if active
   * @param {Array} payload [0] (Number) sessionLength value
   * @returns {reactElement} Component if active
   */

  function CustomTooltip({ active, payload }) {
    if (active && payload) {
      return (
        <div className="custom-tooltip white">
          <p className="value black">{`${payload[0].value} min`}</p>
        </div>
      );
    }
  }

  /**
   * Function that customizes the cursor background component.
   * @param {object} props
   * @returns {reactElement} if active
   */

  function CustomCursor(props) {
    if (props) {
      const { points, width, height } = props;
      const { x, y } = points[0];
      return (
        <Rectangle
          fill={"#00000033"}
          x={x}
          y={y}
          width={width}
          height={height * 2}
        />
      );
    }
  }

  return (
    <div className="line-chart-section">
      <h2 className="title-line-chart">Durée moyenne des sessions</h2>

      <LineChart
        width={260}
        height={280}
        data={data}
        margin={{
          right: 5,
          left: 5,
          bottom: 5,
        }}
      >
        <XAxis
          dataKey="initialDayWeek"
          tickLine={false}
          axisLine={false}
          tickMargin={0}
          stroke="rgba(255, 255, 255, 0.5)"
          padding={{ left: 5, right: 5 }}
          fontSize={14}
          fontWeight={400}
        />
        <YAxis hide="true" domain={["dataMin-10", "dataMax+20"]} />
        <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="rgba(255, 255, 255, 0.6)"
          strokeWidth={1.5}
          dot={false}
          activeDot={{
            stroke: "rgba(255, 255, 255, 0.2)",
            strokeWidth: 5,
            r: 5,
          }}
        />
      </LineChart>
    </div>
  );
}

export default SessionsLineChart;

SessionsLineChart.propTypes = {
  datas: PropTypes.shape({
    session: PropTypes.shape({
      sessions: PropTypes.any.isRequired,
      initialDayWeek: PropTypes.string,
      sessionLength: PropTypes.number,
    }),
  }),
};
