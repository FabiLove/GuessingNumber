import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "", RandomNum, text }) => {
  return (
    <section className={`frame-parent ${className}`}>
      <div className="guess-my-number-wrapper">
        <h2 className="guess-my-number">Guess My Number!</h2>
      </div>
      <div className="result">
        <div className="result-child" />
        <div className="rectangle-parent">
          <div className="frame-child" />
          <h2 className="h2"> {text === "You win!" ? RandomNum : "?"} </h2>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
