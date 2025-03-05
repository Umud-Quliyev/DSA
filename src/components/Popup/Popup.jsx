import "./popup.css";
import PropTypes from 'prop-types';

const Popup = ({ teacher, handleClose, index }) => {
  return (
    <div className="modal" onClick={(e) => handleClose(index, e)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="teacher__info">
          <div className="fullname">
            <h4>{teacher.name}</h4>
          </div>
          <div className="desc">
            <p>{teacher.info}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
Popup.propTypes = {
  teacher: PropTypes.shape({
    name: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
  }).isRequired,
  handleClose: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default Popup;
