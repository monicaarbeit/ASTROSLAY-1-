function CharacterCard(props) {
  console.log("character card");

  return <div className="fairyDesc">
    <button id="singleFairyIMG">
      <img src={props.currentFairyUrl} />
    </button>
    <p>{props.currentFairyBio}</p>
  </div>;
}

export default CharacterCard;