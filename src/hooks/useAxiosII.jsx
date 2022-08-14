import axios from "axios";

// export let newUserData = {};

/**
 * @param { number } userid
 *  Function that makes 4 API calls at the same time and stores the data in an object called newUserData :
 *    @param main API call -> user data
 *    @param activity API call -> activity data
 *    @param sessions API call -> sessions data
 *    @param performance API call -> performance data
 *
 * @returns {Promises}
 * @returns {Object} newUserData = {[user, activity, sessions, performance]};
 * or
 * @returns errors via console.log??
 *
 */

export const UseAxiosII = async (userid) => {
  try {
    console.log("dans useAxios");
    const main = await axios.get(`http://localhost:3000/user/${userid}`);
    console.log("this is main in axios", main);
    const activity = await axios.get(
      `http://localhost:3000/user/${userid}/activity`
    );
    const sessions = await axios.get(
      `http://localhost:3000/user/${userid}/average-sessions`
    );
    const performance = await axios.get(
      `http://localhost:3000/user/${userid}/performance`
    );

    const user = {
      userId: userid,
      info: { ...main.data.data.userInfos },
      sessions: [...sessions.data.data.sessions],
      activity: [...activity.data.data.sessions],
      performance: [...performance.data.data.data],
      nutrition: { ...main.data.data.keyData },
      todayScore: main.data.data.todayScore,
    };
    console.log("this is new user by axiosII", user);
    return user;
  } catch (e) {
    console.log(e);
  }
};
