import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_CHARACTER } from '../../redux/actionTypes';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import './CharacterAdd.css';
import { getCharacterNames } from "../../redux/selectors";

const CharacterAdd = () => {
  const [name, setName] = useState("");
  const [hitPoints, setHitPoints] = useState(null);
  const [armorClass, setArmorClass] = useState(null);
  const [initiative, setInitiative] = useState(null);
  const [speed, setSpeed] = useState(null);
  const characterNames = useSelector(getCharacterNames);

  const dispatch = useDispatch();
  const submitCharacter = (e) => {
    e.preventDefault();
    dispatch({ type: ADD_CHARACTER, payload: { name, hitPoints, armorClass, initiative, speed } });
    setName("");
    setHitPoints(null);
    setArmorClass(null);
    setInitiative(null);
    setSpeed(null);
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

  function handleSpeedChange(e) {
    setSpeed(e.target.value);
  }

  function isCharacterValid() {
    return name !== "" && !characterNames.includes(name) && hitPoints !== null && armorClass !== null && initiative !== null && speed !== null;
  }

  return (
    <form className="character-add">
      <Input type="text" placeholder="Name" value={name} onChange={handleNameChange}/>
      <Input type="number" placeholder="Hit Points" value={hitPoints || ""} onChange={handleHitPointsChange}/>
      <Input type="number" placeholder="AC" value={armorClass || ""} onChange={handleArmorClassChange}/>
      <Input type="number" placeholder="Initiative" value={initiative || ""} onChange={handleInitiativeChange}/>
      <Input type="number" placeholder="Speed" value={speed || ""} onChange={handleSpeedChange}/>
      <Button variant="contained" color="primary" disabled={!isCharacterValid()} type="submit" value="Submit"
              onClick={submitCharacter}>Submit</Button>
    </form>
  );
};

export default CharacterAdd;
