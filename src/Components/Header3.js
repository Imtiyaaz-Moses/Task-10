// This is importing the components needed to make the app work.
// React and the menu component from the components folder are being imported.
import React from 'react';
import MenuTH from './Menu3.js'

// This is the header function. It will also contain the menu button.

function Header3(props) {
    return (<header className="App-header">
    	<br/>
		<h1>Welcome to :</h1>
		<h3>Rock</h3>
		<h3>Paper</h3>
		<h3>Scissors...</h3><br/>
		<MenuTH/>
		<br/>
		</header>);
}

export default Header3;