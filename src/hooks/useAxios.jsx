import axios from "axios";

export let newUserData = {};

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
 * @returns errors via console.log
 *
 */

export const UseAxios = async (userid) => {
  const main = await axios.get(`http://localhost:3000/user/${userid}`);
  const activity = await axios.get(
    `http://localhost:3000/user/${userid}/activity`
  );
  const sessions = await axios.get(
    `http://localhost:3000/user/${userid}/average-sessions`
  );
  const performance = await axios.get(
    `http://localhost:3000/user/${userid}/performance`
  );

  await axios
    .all([main, activity, sessions, performance])
    .then(
      axios.spread((...responses) => {
        newUserData.user = responses[0].data.data;
        newUserData.activity = responses[1].data.data;
        newUserData.sessions = responses[2].data.data;
        newUserData.performance = responses[3].data.data;
      })
    )
    .catch((errors) => {
      console.log("Fetch error:", errors);
    });
};
