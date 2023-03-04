import './App.css';
import React, { useState } from "react";
import CharacterCard from "./components/CharacterCard.jsx";
import AstroElementsBar from "./components/AstroElementsBar.jsx";
import fairiesData from "./fairy-data.js";

export default function App() {
  let [currentFairy, setCurrentFairy] = useState(null);
  let [currentFairyUrl, setCurrentFairyUrl] = useState(null);
  let [currentFairyBio, setCurrentFairyBio] = useState(null);
  let [isValidText, setIsValidText] = useState(null);

  function selectFairy(fairyName) {
    setCurrentFairy(fairyName);

    let fairyImgURL = fairiesData[fairyName].character_image_address;
    setCurrentFairyUrl(fairyImgURL);

    let fairyBio = fairiesData[fairyName].bio;
    setCurrentFairyBio(fairyBio);

  }

  function selectElement(clickedElement) {
    if (clickedElement === fairiesData[currentFairy]?.element) {
      setIsValidText("You're Right! \u{1F63D} ");
    } else {
      setIsValidText("\u{1F497} You're Wrong! \u{1F91A}");
    }
  }

  return <div>
    <h1> ASTROFAIRY </h1>

    <h2> Pick a fairy and match her with her astrological sign! </h2>
    <div className="fairies">
      <button onClick={() => selectFairy('Flora')}><img src="https://i.pinimg.com/564x/6b/d1/81/6bd1818cb98a3f1c2cbd356b82804720.jpg" /></button>
      <button onClick={() => selectFairy('Stella')}><img src="https://i.pinimg.com/564x/80/d7/a4/80d7a4cc05143d4a8bb6e9df005d9a54.jpg" /></button>
      <button onClick={() => selectFairy('Musa')}><img src="https://i.pinimg.com/564x/4a/1a/a8/4a1aa89e27d3f7d8d81489ebe93e5e85.jpg" /></button>
      <button onClick={() => selectFairy('Aisha')}><img src="https://i.pinimg.com/564x/7b/46/9a/7b469a74b2212ec0fcbdb30cc6623dcf.jpg" /></button>
    </div>

    {currentFairy && currentFairyUrl && currentFairyBio ? <div>
      <CharacterCard currentFairyUrl={currentFairyUrl} currentFairy={currentFairy} currentFairyBio={currentFairyBio} />
      <AstroElementsBar selectElement={selectElement} currentFairy={currentFairy} />
      <div class="resultText"> {isValidText} </div>
    </div> : null
    }
  </div>
}