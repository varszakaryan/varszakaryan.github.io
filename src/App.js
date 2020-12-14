import React from 'react';
import './App.css';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Contacts from './components/Contacts';
import Events from './components/Events';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'about'
    };
  }

  render() {
    return (
      <div className="App">
        <Router>
        <Header />
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/events' component={Events} />
            <Route path='/contacts' component={Contacts} />
          </Switch>
        </Router>
        <Footer />       
      </div>
    );
  }
}

export default App;
