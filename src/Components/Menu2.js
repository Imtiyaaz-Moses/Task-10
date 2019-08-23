// This is importing the components needed to make the app work.
// React, CSS, Bootstrap, React-Router-Dom and some components from the components folder are being imported.
import React from 'react';
import '../App.css';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';

// This function is what will ensure the menu works. It'll allow the menu to go up and down when clicked on, as well as display the output.
function MenuT() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    return (
        // When the user clicks on the menu button, it will slide down with options for the user to click on.
        <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" id="menuit" onClick={handleClick}>
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      > 
        <Link to="/"><MenuItem id="menuit" onClick={handleClose}>Exit</MenuItem></Link>
        <Link to="/Help"><MenuItem id="menuit" onClick={handleClose}>Help</MenuItem></Link>
      </Menu>
    </div>
        // These are the buttons that the user is allowed to click, and it will show the content needed to be displayed.
    );
}

export default MenuT;