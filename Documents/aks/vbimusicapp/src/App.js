import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CreatePlayList from './components/Molecules/CreatePlayList';
import EachPlaylist from './components/Molecules/EachPlaylist';
import MenuTabs from './components/Molecules/MenuTab';
import './App.css';

// function App(props) {
  class App extends React.Component {
    render() {
  return (
    <div className="App">
      
    <Router>
      <Switch>
          <Route path="/createPlayList">
            <CreatePlayList />
          </Route> 
          <Route path="/eachPlaylist">
            <EachPlaylist />
          </Route>
          <Route path="/">
            <MenuTabs />
          </Route>
        </Switch>
        </Router>
    </div>
  );
    }
}

export default App;
