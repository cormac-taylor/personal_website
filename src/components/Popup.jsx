import "./styles/Popup.css";
import PropTypes from "prop-types";

Popup.propTypes = {
  onClose: PropTypes.bool.isRequired,
};

function Popup({ onClose }) {
  return (
    <div className="popup_overlay" onClick={onClose}>
      <div className="popup_content" onClick={(e) => e.stopPropagation()}>
        <h2>Welcome!</h2>
        <p>Make sure to turn down your audio before proceeding.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Popup;
