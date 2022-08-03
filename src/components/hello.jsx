/**
 * Display a personalized welcome message with the first name of the user.
 * @returns a div
 * @param {object} datas
 * @param {String} firstName
 * @component Welcome
 */

//const firstName = USER_MAIN_DATA.userInfos.firstName;

function Hello({ datas }) {
  return (
    <div className="hello-user">
      <h1>
        Bonjour <span className="red">{datas.user?.userInfos.firstName}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
}

export default Hello;
