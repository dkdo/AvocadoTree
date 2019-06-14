import React from 'react';
import './App.css';
import Battle from './components/battle/Battle';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Container from "@material-ui/core/Container";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#f5f5f5',
        light: '#ffffff',
        dark: '#c2c2c2'
      }
    }
  });

  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Header/>
        <Container className="main-container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/battle" component={Battle} />
          </Switch>
        </Container>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
