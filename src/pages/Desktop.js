import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import "./Desktop.css";
import { useState } from "react";

function getRandomNum(max) {
  return Math.floor(Math.random() * max);
}
let RandomNum = getRandomNum(19) + 1;

const Desktop = () => {
  const [inputNumber, setInputNumber] = useState(0);
  const [text, setText] = useState("Start guessing...");
  const [score, setScore] = useState(20);
  const [highScore, setHighScore] = useState(0);

  function handleCheck() {
    console.log("I'm pushed");
    if (inputNumber > RandomNum) {
      setScore(score - 1);
      setText("Need less");
    } else if (inputNumber < RandomNum) {
      setScore(score - 1);
      setText("Need more");
    } else {
      setText("You win!");
      if (score < highScore) {
        setHighScore(highScore);
      } else {
        setHighScore(score);
      }
    }
  }

  function handleReset() {
    setText("Start guessing...");
    setInputNumber(0);
    RandomNum = getRandomNum(19) + 1;
    setScore(20);
  }

  return (
    <div className={text === "You win!" ? "desktop-1 win" : "desktop-1"}>
      <FrameComponent2 handleReset={handleReset} />
      <FrameComponent1 RandomNum={RandomNum} text={text} />
      <FrameComponent
        handleCheck={handleCheck}
        inputNumber={inputNumber}
        setInputNumber={setInputNumber}
        text={text}
        score={score}
        highScore={highScore}
      />
    </div>
  );
};

export default Desktop;
