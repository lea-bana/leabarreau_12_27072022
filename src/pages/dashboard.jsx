import Hello from "../components/hello";
import Navbar from "../components/navbar";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_MAIN_DATA,
  USER_PERFORMANCE,
} from "../services/mockeddatas";
import "../style/dashboard.css";
import { UseAxios, newUserData } from "../hooks/useAxios";
import UserCounts from "../components/graphs/userCounts";
import ActivityBarChart from "../components/graphs/activityBarChart";
import "../style/graph.css";
import RadarChartPerf from "../components/graphs/radarChart";
import "../style/sessionsLineChart.css";
import SessionsLineChart from "../components/graphs/sessionsLineChart";
import PieChartScore from "../components/graphs/pieChartScore";

/** Render the dashboard.
 *
 * The userId is defined with the number in the url.
 *
 * If the userId is 12, then the data is fetched from the index [0] of USER_MAIN_DATA, USER_ACTIVITY,
 * USER_AVERAGE_SESSIONS, USER_PERFORMANCE mock.
 *
 * If the userId is 18, then the data is fetched from the index [1] of USER_MAIN_DATA, USER_ACTIVITY,
 * USER_AVERAGE_SESSIONS, USER_PERFORMANCE mock.
 *
 * First, the data is fetched from the API.
 * If the data is not fetched from the API, then we take the mocked datas from the index [0 or 1].
 *
 * If no datas is returned then the user is redirected to the error page.
 *
 * @returns graphs components with the props datas (ActivityBarChart, UserCounts, SessionsLineChart,
 *  RadarChart and pieChartScore).
 * @param {string} id
 * @param {number} userId
 * @param {object} datas
 * @param {object} noDatas
 * @param {object} newUserDataMock
 * @param {object} newUserData
 */

function Dashboard() {
  // Get current id from url
  const { id } = useParams();
  // Muting type from string into number on id
  const userId = Number(id);
  const [datas, setDatas] = useState({});
  const [noDatas, setNoDatas] = useState({});

  useEffect(() => {
    let newUserDataMock;

    if (userId === 12) {
      newUserDataMock = {
        user: USER_MAIN_DATA[0],
        activity: USER_ACTIVITY[0],
        session: USER_AVERAGE_SESSIONS[0],
        performance: USER_PERFORMANCE[0],
      };
    } else if (userId === 18) {
      newUserDataMock = {
        user: USER_MAIN_DATA[1],
        activity: USER_ACTIVITY[1],
        session: USER_AVERAGE_SESSIONS[1],
        performance: USER_PERFORMANCE[1],
      };
    }

    async function getData() {
      await UseAxios(userId);

      setDatas(() => ({ ...newUserData }));

      if (
        !newUserData.user ||
        newUserData == null ||
        newUserData === undefined ||
        newUserData.length === 0
      ) {
        setDatas(() => ({ ...newUserDataMock }));

        if (newUserDataMock === undefined) {
          setNoDatas(true);
        }
      }
    }

    getData();
  }, [userId]);

  if (noDatas === true) {
    return <Link to="/*" />;
  } else {
    return (
      <div className="dashboard-page">
        <Navbar />
        <Hello datas={datas} />
        <div className="graphs">
          <div className="graph">
            <ActivityBarChart datas={datas} />
            <UserCounts datas={datas} />
            <div className="graph-bottom">
              <SessionsLineChart datas={datas} />
              <RadarChartPerf datas={datas} />
              <PieChartScore datas={datas} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
