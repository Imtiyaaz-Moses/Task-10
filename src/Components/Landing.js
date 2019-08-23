// This is importing the components needed to make the app work.
// React, CSS, and some components from the components folder are being imported.
import React from 'react';
import '../App.css';

// This function will display a paragraph, which will inform the user about the page.
function LandingPage(props) {
    return (<div className="App-land">
    	<p>Welcome to the Rock, Paper, Scissors game. Redirect to the game by, clicking on the menu above.</p></div>);
}

export default LandingPage;