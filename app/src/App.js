import React from 'react';
import './App.css';
import CharacterList from './components/character-list/CharacterList';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/list" component={CharacterList} />
      </Switch>
    </div>
  );
}

export default App;
