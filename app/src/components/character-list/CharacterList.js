import React from "react";
import { connect } from "react-redux";
import CharacterAdd from "../character-add/CharacterAdd";
import { getCharacters } from "../../redux/selectors";

const CharacterList = ({characters}) => (
  <div>
    <CharacterAdd/>
    <ul className="todo-list">
      {characters && characters.length > 0
        ? characters.map((character, index) => {
          return <div>{character.content}</div>;
        })
        : "No characters added."}
    </ul>
  </div>
);

const mapStateToProps = state => {
  const characters = getCharacters(state);
  return { characters };
};

export default connect(mapStateToProps)(CharacterList);
