import PropTypes from 'prop-types';
import { btnList, btn } from './BtnList.module.css';

const BtnList = ({ keysArr, clickOnBtn }) => {
  return (
    <div className={btnList}>
      {keysArr.map(key => (
        <button
          key={key.toString()}
          type="button"
          onClick={clickOnBtn}
          className={btn}
        >
          {key}
        </button>
      ))}
    </div>
  );
};

BtnList.propTypes = {
  keysArr: PropTypes.array.isRequired,
  clickOnBtn: PropTypes.func.isRequired,
};

export default BtnList;
