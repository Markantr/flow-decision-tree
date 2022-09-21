import { useState } from "react";
import DecisionTree from "../DecisionTree/DecisionTree";

export default function MainContainer() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    setIsShown((current) => !current);
    document.getElementById("start").style.display = "none";
  };

  return (
    <div>
      <button id="start" onClick={handleClick}>
        Click
      </button>
      {isShown && (
        <div>
          <h2>Some content here</h2>
        </div>
      )}
      {isShown && <DecisionTree />}
    </div>
  );
}
