import "./styles/style.css";
import { useState } from "react";
import { Card } from "./components/components.jsx";

function App() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const shuffledArr = shuffle(arr);
  const [clicked, setClicked] = useState([]);
  const [highscore, setHighscore] = useState(0);

  const handleClickEvent = (event) => {
    const val = event.target.className;

    if (!clicked.find((id) => id === val)) {
      setClicked((currentlyClicked) => [...currentlyClicked, val]);
    } else {
      if (highscore < clicked.length) {
        setHighscore(clicked.length);
      }
      setClicked([]);
    }
  };

  return (
    <>
      <header>
        <div className="title">Poke Memory Cards</div>
        <div className="scoreboard">
          <div className="currentScore">Current score: {clicked.length}</div>
          <div className="highscore">Highscore: {highscore}</div>
        </div>
      </header>
      <div id="main">
        {shuffledArr.map((value) => {
          return (
            <Card key={value} arrIndex={value} handleClick={handleClickEvent} />
          );
        })}
      </div>
      <footer>
        <div>Created by PoistJ</div>
        <div className="links">
          <a href="https://github.com/PoistJ/MemoryGame" target="_blank">
            GitHub
          </a>
        </div>
      </footer>
    </>
  );
}

function shuffle(array) {
  var i = array.length,
    j = 0,
    temp;
  while (i--) {
    j = Math.floor(Math.random() * (i + 1));

    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

export default App;
