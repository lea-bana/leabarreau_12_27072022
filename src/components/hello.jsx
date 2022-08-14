/**
 * Display a personalized welcome message with the first name of the user.
 * @returns a div
 * @param {object} datas
 * @param {String} firstName
 * @component Welcome
 */

function Hello({ datas }) {
  console.log(datas);
  let userFirstName = "";
  console.log(userFirstName);
  return (
    <div className="hello-user">
      <h1>
        Bonjour <span style={{ color: "red" }}>{userFirstName}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
}

export default Hello;
