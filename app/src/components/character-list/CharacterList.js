import React from 'react';
import { connect } from 'react-redux';
import { getCharacters } from '../../redux/selectors';
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

const CharacterList = ({ characters }) => (
  <Paper>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell align="right">Hit Points</TableCell>
          <TableCell align="right">Armor Class</TableCell>
          <TableCell align="right">Initiative</TableCell>
          <TableCell align="right">Speed</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {characters.map(character => (
          <TableRow key={character.name}>
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

const mapStateToProps = state => {
  const { characterOrder } = state;
  const characters = getCharacters(state, characterOrder);
  return { characters };
};

export default connect(mapStateToProps)(CharacterList);
