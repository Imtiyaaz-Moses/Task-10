// This is importing the components needed to make the app work.
// React, CSS, and some components from the components folder are being imported.
import React, { Component } from 'react';
import './Main.css';
import Header2 from './Header2.js';
import { Link } from 'react-router-dom';

// This is styling the player card. The colour as well as the background colour. It will also display the picture,
// so the user knows which object they are. This will the be returned, to the page.
const PlayerCard = ({ color, symbol }) => {
    const style = {
        backgroundColor: color,
        backgroundImage: "url(./" + symbol + ".png)"
    }
    return (
        <div style  = {style} className="player-card">
        {symbol}
        </div>
    )
}

// This is the component that will display the content on the page. It will also handle the state.
class Game extends Component {

    constructor(props) {
        super(props)
        this.symbols = ["Rock", "Paper", "Scissors"]
        this.state = {userStatus: "Rock"}
    }

    // This will decide the winner, whether it is the AI or the user. 
    // Three different outcomes will be displayed. Either, "It's a draw! Try Again!", "You Win!"
    // and "You Lose!" This depends on whether you win, lose or draw. How this is decided, if the user matches with the state component below.
    decideWinner = () => {
        const { playerRight, playerLeft } = this.state
        if (playerLeft === playerRight) {
            return "It's a draw! Try Again!"
        }
        if ((playerLeft === "Rock" && playerRight === "Scissors") ||
            (playerLeft === "Paper" && playerRight === "Rock") ||
            (playerLeft === "Scissors" && playerRight === "Paper")) {
            return "You Win!"
        }
        return "You Lose!"
    }

    runGame = () => {
        let counter = 0
        let myInterval = setInterval(() => {
            counter++
            this.setState({
                playerLeft: this.state.userStatus,
                playerRight: this.symbols[Math.floor(Math.random() * 3)],
                winner: ""
            })
            if (counter > 45)
                clearInterval(myInterval)
            this.setState({ winner: this.decideWinner() })
        }, 100)
    }
    // Above is a setInterval function, with a counter. What happens is, the state will cycle through the content for a total of 45 times,
    // at 90 milliseconds, thus working with the counter and deciding the winner. The state will then be cleared when the output is displayed.
    // With regards to the state, three symbols will be cycled for the AI, and it will be random. The random selection will work with the Math internal function.

    // Setting the state so that it can change the image, according to the uses selection.
    userR = () => {
        this.setState({
            userStatus: "Rock"
        });
    }

    userP = () => {
        this.setState({
            userStatus: "Paper"
        });
    }

    userS = () => {
        this.setState({
            userStatus: "Scissors"
        });
    }

    // Everything will be rendered below. The buttons that the user will use, to select their choice, the player cards, the colour of those cards, 
    // the button to run the game and the try again button.
    render() {
        return (
            <div className="App-Class">
            <Header2/><br/><br/>
            <button type="button" onClick={this.userR}>Rock</button>
            <button type="button" onClick={this.userP}>Paper</button>
            <button type="button" onClick={this.userS}>Scissors</button><br/>
              <PlayerCard
                color="#00BFFF"
                symbol={this.state.playerLeft} />
             <PlayerCard
                color="#00FF00"
                symbol={this.state.playerRight} />
              <p>{this.state.winner}</p>
              <button onClick={this.runGame}>Run Game</button>
              <Link to="/Game"><button type="button" onClick="reloadThePage()">Try Again</button></Link>
            </div>
        );
    }
}

export default Game;