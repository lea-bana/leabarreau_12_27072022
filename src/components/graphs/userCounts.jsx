import iconCal from "../../assets/energy.svg";
import iconCarb from "../../assets/apple.svg";
import iconLipid from "../../assets/cheeseburger.svg";
import iconProt from "../../assets/chicken.svg";
import "../../style/userCounts.css";
import PropTypes from "prop-types";

/**
 * Function returns 4 boxes with icons and nutritional informations (cal, protein, lipid and carb).
 * @returns {reactElement} the UserCounts component
 * @param {object} datas
 * @property {!Number} datas.calorieCount - number of calories
 * @property {!Number} datas.proteinCount - number of proteins
 * @property {!Number} datas.carbohydrateCount - number of carbohydrates
 * @property {!Number} datas.lipidCount - number of lipids
 * @component UserCounts
 */

function UserCounts({ datas }) {
  return (
    <div className="userCountBoxes">
      <div className="boxIcon">
        <img
          style={{ backgroundColor: "#FFEBEB" }}
          src={iconCal}
          alt="icon-calories"
        />
        <div className="boxInfos">
          {datas.user?.keyData.calorieCount}kCal
          <p className="p-box">Calories</p>
        </div>
      </div>
      <div className="boxIcon">
        <img
          style={{ backgroundColor: "#E5F5FF" }}
          src={iconProt}
          alt="icon-proteins"
        />
        <div className="boxInfos">
          {datas.user?.keyData.proteinCount}g<p className="p-box">Protéines</p>
        </div>
      </div>
      <div className="boxIcon">
        <img
          style={{ backgroundColor: "#FFF7DB", color: "#FDCC0C" }}
          src={iconCarb}
          alt="icon-Carbohydrates"
        />
        <div className="boxInfos">
          {datas.user?.keyData.carbohydrateCount}g
          <p className="p-box">Glucides</p>
        </div>
      </div>
      <div className="boxIcon">
        <img
          style={{ backgroundColor: "#FFEEF2", color: "#FD5181" }}
          src={iconLipid}
          alt="icon-Lipids"
        />
        <div className="boxInfos">
          {datas.user?.keyData.lipidCount}g<p className="p-box">Lipides</p>
        </div>
      </div>
    </div>
  );
}

export default UserCounts;

UserCounts.propTypes = {
  datas: PropTypes.shape({
    user: PropTypes.shape({
      keyData: PropTypes.any.isRequired,
      calorieCount: PropTypes.number,
      proteinCount: PropTypes.number,
      carbohydrateCount: PropTypes.number,
      lipidCount: PropTypes.number,
    }),
  }),
};
