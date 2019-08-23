// This is importing the components needed to make the app work.
// React, CSS, and some components from the components folder are being imported.
import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import LandingPage from './Components/Landing';

// This will render and display the content needed.
class App extends Component {
    render() {
        return (
            <div className="App">
      <Header/><br/>
      <LandingPage/>
      </div>
      // These tags above, will display the content on the page.
        );
    }
}

export default App;