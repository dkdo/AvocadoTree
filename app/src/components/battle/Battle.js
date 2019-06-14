import React from 'react';
import CharacterAdd from '../character-add/CharacterAdd';
import Grid from "@material-ui/core/Grid";
import CharacterList from "../character-list/CharacterList";
import Button from "@material-ui/core/Button";

const Battle = () => (
  <div>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <CharacterAdd/>
      </Grid>
      <Grid item xs={12}>
        <CharacterList/>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary">Start</Button>
        <Button variant="contained" color="primary">Reorder</Button>
      </Grid>
    </Grid>
  </div>
);

export default Battle;
