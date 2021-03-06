import React from 'react';
import { connect } from 'react-redux';
import { getCharacters } from '../../redux/selectors/selectors';
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import KeyboardArrowUp from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
import './CharacterList.css';
import { orderDown, orderUp } from "../../redux/actions/actions";

const CharacterList = ({ characters, reordering, orderUp, orderDown }) => {
  function isFirst(character) {
    return character === characters[0];
  }

  function isLast(character) {
   return character === characters[characters.length - 1];
  }

  function handleOrderUp(character) {
    if (!isFirst(character))
      orderUp(character.id);
  }

  function handleOrderDown(character) {
    if (!isLast(character))
      orderDown(character.id);
  }

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            {reordering &&
            <TableCell align="right" className="order-col"> </TableCell>
            }
            <TableCell>Name</TableCell>
            <TableCell align="right">Hit Points</TableCell>
            <TableCell align="right">Armor Class</TableCell>
            <TableCell align="right">Initiative</TableCell>
            <TableCell align="right">Speed</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {characters.map((character) => (
            <TableRow key={character.name}>
              {reordering &&
              <TableCell align="right">
                <KeyboardArrowUp color={isFirst(character) ? 'disabled' : ''} onClick={() => handleOrderUp(character)}/>
                <KeyboardArrowDown color={isLast(character) ? 'disabled' : ''} onClick={() => handleOrderDown(character)}/>
              </TableCell>
              }
              <TableCell component="th" scope="row">{character.name}</TableCell>
              <TableCell align="right">{character.hitPoints}</TableCell>
              <TableCell align="right">{character.armorClass}</TableCell>
              <TableCell align="right">{character.initiative}</TableCell>
              <TableCell align="right">{character.speed}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

const mapStateToProps = state => {
  const { characterOrder } = state;
  const characters = getCharacters(state);
  return { characters, reordering: characterOrder.reordering };
};

const mapDispatchToProps = {
  orderUp,
  orderDown
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
