// This is importing the components needed to make the app work.
// React and the menu component from the components folder are being imported.
import React from 'react';
import SimpleMenu from './Menu';

// This is the header function. It will also contain the menu button.

function Header(props) {
    return (<header className="App-header">
    	<br/>
		<h1>Welcome to :</h1>
		<h2>Rock</h2>
		<h2>Paper</h2>
		<h2>Scissors...</h2><br/>
		<SimpleMenu/><br/>
		</header>);
}

export default Header;