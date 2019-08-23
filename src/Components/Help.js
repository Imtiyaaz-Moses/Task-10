// This is importing the components needed to make the app work.
// React, CSS, and some components from the components folder are being imported.
import React from 'react';
import './Main.css';
import Header3 from './Header3.js';

// This is a function that will display the help/guide on how to play the game. It contains an unordered list and a paragraph which will
// be contain the unordered list.
function Help(props) {
    return (<div className="App-help">
      <Header3/>
      <p>This is your help page/guide on how to play the game.
      <ul>
      <li>Select which object you want to be.</li>
      <li>Select run game and wait for the outcome.</li>
      <li>If you lost, try again.</li>
      </ul></p>
      </div>);
}

export default Help;