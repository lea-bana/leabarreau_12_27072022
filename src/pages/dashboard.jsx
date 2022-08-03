import Hello from "../components/hello";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_MAIN_DATA,
  USER_PERFORMANCE,
} from "../services/mockeddatas";
import { apiCall, newUserData } from "../hooks/apiCall";

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
      await apiCall(userId);
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
      <div className="profile-page">
        <Hello datas={datas} />
        <div className="graph">
          <div className="graph-bottom"></div>
        </div>
      </div>
    );
  }
}

export default Dashboard;