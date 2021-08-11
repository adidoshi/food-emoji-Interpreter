import { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🍔": "Hamburger",
  "🍒": "Cherries",
  "🍞": "Bread",
  "🍟": "French Fries",
  "🍕": "Pizza",
  "🍜": "Steaming Bowl",
  "🍝": "Spaghetti",
  "🍣": "Sushi",
  "🍡": "Dango",
  "🍩": "Doughnut",
  "🍪": "Cookie",
  "🍮": "Custard"
};

let emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaining] = useState("");

  function emojiHandler(event) {
    var userInput = event.target.value;
    setMeaining(userInput);

    if (userInput in emojiDictionary) {
      setMeaining(emojiDictionary[userInput]);
    } else {
      setMeaining("not available in our database");
    }
  }

  function emojiListClickHandler(emoji) {
    setMeaining(emojiDictionary[emoji]);
  }

  return (
    <div className="App">
      <h1>Food Emoji Meaning</h1>
      <input onChange={emojiHandler} />
      <div className="display">{meaning}</div>

      <h3>Emojis we know</h3>
      {emojisWeKnow.map((emoji) => {
        return (
          <span
            key={emoji}
            onClick={() => emojiListClickHandler(emoji)}
            className="emojiList"
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
