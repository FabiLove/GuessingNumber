import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "", handleReset }) => {
  return (
    <section className={`desktop-1-inner ${className}`}>
      <div className="again-btn-parent">
        <button onClick={handleReset} className="again-btn">
          <div className="again-btn-child" />
          <b className="again">Again!</b>
        </button>
        <b className="between-1-and">(Between 1 and 20)</b>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
