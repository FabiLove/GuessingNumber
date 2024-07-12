import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({
  className = "",
  handleCheck,
  inputNumber,
  setInputNumber,
  text,
  score,
  handleScore,
  highScore,
  handleHighScore,
}) => {
  function handleInput(e) {
    setInputNumber(e.target.value);
  }

  return (
    <section className={`desktop-1-child ${className}`}>
      <div className="frame-group">
        <div className="input-placeholder-parent">
          <input
            onChange={handleInput}
            className="input-placeholder"
            value={inputNumber}
          />
          <div className="input-placeholder-child" />
          <button onClick={handleCheck} className="check-btn">
            <div className="check-btn-child" />
            <b className="check">Check!</b>
          </button>
        </div>
        <div className="frame-wrapper">
          <div className="frame-container">
            <div className="guess-placeholder-wrapper">
              <b className="guess-placeholder">{`  `}</b>
            </div>
            <div className="start-guessing-parent">
              <b className="start-guessing">{text}</b>
              <div className="score-20-parent">
                <b>Score: {score}</b>
                <b className="high-score-19">High Score: {highScore} </b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
