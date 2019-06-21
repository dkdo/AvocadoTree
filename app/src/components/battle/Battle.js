import React from 'react';
import CharacterAdd from '../character-add/CharacterAdd';
import Grid from "@material-ui/core/Grid";
import CharacterList from "../character-list/CharacterList";
import Button from "@material-ui/core/Button";
import { startReorder, stopReorder } from "../../redux/actions/actions";
import connect from "react-redux/es/connect/connect";

const Battle = ({ reordering, startReorder, stopReorder }) => (
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
        <Button variant="contained" color="primary" onClick={reordering ? stopReorder : startReorder}>
          {reordering ? 'Stop Reorder' : 'Reorder'}
        </Button>
      </Grid>
    </Grid>
  </div>
);

const mapStateToProps = state => {
  return { reordering: state.characterOrder.reordering };
};

const mapDispatchToProps = {
  startReorder,
  stopReorder
};

export default connect(mapStateToProps, mapDispatchToProps)(Battle);
