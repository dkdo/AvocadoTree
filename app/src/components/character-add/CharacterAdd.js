import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_CHARACTER } from "../../redux/actionTypes";

function CharacterAdd() {
  const [name, setName] = useState("");
  const [hitPoints, setHitPoints] = useState(null);
  const [armorClass, setArmorClass] = useState(null);
  const [initiative, setInitiative] = useState(null);

  const dispatch = useDispatch();
  const submitCharacter = (e) => {
    e.preventDefault();
    dispatch({ type: ADD_CHARACTER, payload: {content: name }});
    setName("");
    setHitPoints(null);
    setArmorClass(null);
    setInitiative(null);
  };

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleHitPointsChange(e) {
    setHitPoints(e.target.value);
  }

  function handleArmorClassChange(e) {
    setArmorClass(e.target.value);
  }

  function handleInitiativeChange(e) {
    setInitiative(e.target.value);
  }

  return (
    <form className="character-add">
      <input type="text" placeholder="Name" value={name} onChange={handleNameChange}/>
      <input type="number" placeholder="Hit Points" value={hitPoints || ""} onChange={handleHitPointsChange}/>
      <input type="number" placeholder="AC" value={armorClass || ""} onChange={handleArmorClassChange}/>
      <input type="number" placeholder="Initiative" value={initiative || ""} onChange={handleInitiativeChange}/>
      <button type="submit" value="Submit" onClick={submitCharacter}/>
    </form>
  );
}

export default CharacterAdd;
