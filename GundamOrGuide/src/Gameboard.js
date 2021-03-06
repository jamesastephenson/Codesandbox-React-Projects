import "./styles.css";
import Modal from "./Modal.js";
import { useState } from "react";

export default function Gamebooard() {
  const [score, setScore] = useState(0);
  const [newArr, setNewArr] = useState([]);
  const [arrPosition, setArrPosition] = useState(0);
  const [modalState, setModalState] = useState(null);
  const [startGame, setStartGame] = useState("ready");

  // Randomize list with Fisher-Yates algorithm
  function RandomizeArray(array) {
    for (let i = 0; i < array.length; i++) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  // Initialize game state, randomize object arr
  function GameStart() {
    setNewArr(RandomizeArray(objectArr));
    setStartGame("started");
  }

  // Check if current item is from Gundam, update score if it is
  function ChooseGundam() {
    // prevent clicking if game is over or hasn't started
    if (startGame === "ready" || startGame === "end") {
      return "";
      // correct option
    } else if (newArr[arrPosition].series === "Gundam") {
      setScore(score + 1);
      PlaySound(correct);
      setModalState("O");
      setTimeout(() => {
        setModalState(null);
      }, 1000);
      // incorrect option
    } else {
      setModalState("X");
      setTimeout(() => {
        setModalState(null);
      }, 1000);
      PlaySound(incorrect);
    }
    // move to next item (timed with modal)
    setTimeout(() => {
      NextItem();
    }, 1000);
  }

  // Check if current item is from Guide, update score if it is
  function ChooseGuide() {
    // prevent clicking if game is over or hasn't started
    if (startGame === "ready" || startGame === "end") {
      return "";
      // correct option
    } else if (newArr[arrPosition].series === "Guide") {
      PlaySound(correct);
      setScore(score + 1);
      setModalState("O");
      setTimeout(() => {
        setModalState(null);
      }, 1000);
      // incorrect option
    } else {
      setModalState("X");
      setTimeout(() => {
        setModalState(null);
      }, 1000);
      PlaySound(incorrect);
    }
    // move to next item (timed with modal)
    setTimeout(() => {
      NextItem();
    }, 1000);
  }

  // Move to next arr position, end game if at end of arr
  function NextItem() {
    //console.log(newArr[arrPosition]);
    if (arrPosition === objectArr.length - 1) {
      GameEnd();
    } else {
      setArrPosition(arrPosition + 1);
    }
  }

  // End game and display final score
  function GameEnd() {
    setStartGame("end");
  }

  // Play sound effect
  function PlaySound(audio) {
    audio.play();
  }

  // main array of quiz answers
  let objectArr = [
    { name: "Amuro Ray", series: "Gundam" },
    { name: "Bright Noah", series: "Gundam" },
    { name: "Fraw Bow", series: "Gundam" },
    { name: "Char Aznable", series: "Gundam" },
    { name: "Slegger Law", series: "Gundam" },
    { name: "Sayla Mass", series: "Gundam" },
    { name: "Degwin Sodo Zabi", series: "Gundam" },
    { name: "Quattro Bajina", series: "Gundam" },
    { name: "Kamille Bidan", series: "Gundam" },
    { name: "Reccoa Londe", series: "Gundam" },
    { name: "Jamaican Daninghan", series: "Gundam" },
    { name: "Paptimus Scirocco", series: "Gundam" },
    { name: "Kacricon Cacooler", series: "Gundam" },
    { name: "South Burning", series: "Gundam" },
    { name: "Full Frontal", series: "Gundam" },
    { name: "Alejandro Corner", series: "Gundam" },
    { name: "Revive Revival", series: "Gundam" },
    { name: "Bork Cry", series: "Gundam" },
    { name: "Job John", series: "Gundam" },
    { name: "Bring Stabity", series: "Gundam" },
    { name: "Biscuit Griffon", series: "Gundam" },
    { name: "Chibodee Crockett", series: "Gundam" },
    { name: "Master Asia", series: "Gundam" },
    { name: "Lockon Stratos", series: "Gundam" },
    { name: "Mu La Flaga", series: "Gundam" },
    { name: "Natora Einus", series: "Gundam" },
    { name: "Cancer Kafka", series: "Gundam" },
    { name: "Fixx Bloodman", series: "Gundam" },
    { name: "Zuchini Nicchini", series: "Gundam" },
    { name: "Allelujah Haptism", series: "Gundam" },
    { name: "Chad Chadan", series: "Gundam" },
    { name: "Arthur Dent", series: "Guide" },
    { name: "Ford Prefect", series: "Guide" },
    { name: "Zaphod Beeblebrox", series: "Guide" },
    { name: "Trillian Astra", series: "Guide" },
    { name: "Slartibartfast", series: "Guide" },
    { name: "Almighty Bob", series: "Guide" },
    { name: "Blart Versenwald III", series: "Guide" },
    { name: "Dan Streetmentioner", series: "Guide" },
    { name: "Deep Thought", series: "Guide" },
    { name: "Eccentrica Gallumbits", series: "Guide" },
    { name: "Elvis Presley", series: "Guide" },
    { name: "Enid Kapelsen", series: "Guide" },
    { name: "Frankie Mouse", series: "Guide" },
    { name: "Gag Halfrunt", series: "Guide" },
    { name: "Googleplex Starthinker", series: "Guide" },
    { name: "Hotblack Desiato", series: "Guide" },
    { name: "Humma Kavula", series: "Guide" },
    { name: "Hurling Frootmig", series: "Guide" },
    { name: "Lazlar Lyricon", series: "Guide" },
    { name: "Max Quordlepleen", series: "Guide" },
    { name: "Mo Minetti", series: "Guide" },
    { name: "Old Thrashbarg", series: "Guide" },
    { name: "Oolon Colluphid", series: "Guide" },
    { name: "Random Dent", series: "Guide" },
    { name: "Reg Nullify", series: "Guide" },
    { name: "Rob McKenna", series: "Guide" },
    { name: "Trin Tragula", series: "Guide" },
    { name: "Veet Voojagig", series: "Guide" },
    { name: "Bowerick Wowbagger", series: "Guide" },
    { name: "Yooden Vranx", series: "Guide" },
    { name: "Zarniwoop Vann Harl", series: "Guide" }
  ];

  // sound effects
  let correct = new Audio("/correct.mp3");
  let incorrect = new Audio("/incorrect.mp3");

  return (
    <div className="gameboard">
      {startGame === "ready" ? (
        <button onClick={GameStart}>Start Game</button>
      ) : startGame === "started" ? (
        <h1>{newArr[arrPosition].name}</h1>
      ) : (
        <h1>
          <span class="score">
            Final Score: {score} / {newArr.length}
          </span>{" "}
          <br /> Refresh to play again
        </h1>
      )}

      <div className="controls">
        <button type="button" onClick={ChooseGundam} className="gundam">
          <h3>Gundam</h3>
        </button>
        <button type="button" onClick={ChooseGuide} className="guide">
          <h3>Guide</h3>
        </button>
        <Modal text={modalState} />
      </div>
    </div>
  );
}
