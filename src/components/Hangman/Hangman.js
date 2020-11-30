import React, {Component} from 'react';
import ProgressBar from "./ProgressBar/ProgressBar";
import Letters from "./Letters/Letters";
import Word from "./Word/Word";
import classes from './Hangman.module.css';
import {GameStatus} from "../../constants/GameStatus";
import Message from "./Message/Message";


class Hangman extends Component {

  state = {
    letters: [
      {
        value: "a",
        isFailed: false,
        isGuessed: false
      },
      {
        value: "b",
        isFailed: false,
        isGuessed: false
      },
      {
        value: "c",
        isFailed: false,
        isGuessed: false
      },
      {
        value: "d",
        isFailed: false,
        isGuessed: false
      },
      {
        value: "e",
        isFailed: false,
        isGuessed: false
      },
      {
        value: "f",
        isFailed: false,
        isGuessed: false
      },
      {
        value: "g",
        isFailed: false,
        isGuessed: false
      },
      {
        value: "h",
        isFailed: false,
        isGuessed: false
      },
      {
        value: "i",
        isFailed: false,
        isGuessed: false
      },
      {
        value: "j",
        isFailed: false,
        isGuessed: false
      },
      {
        value: "k",
        isFailed: false,
        isGuessed: false
      },
      {
        value: "l",
        isFailed: false,
        isGuessed: false
      },
      {
        value: "m",
        isFailed: false,
        isGuessed: false
      },
      {
        value: "n",
        isFailed: false,
        isGuessed: false
      },
      {
        value: "o",
        isFailed: false,
        isGuessed: false
      },
      {
        value: "p",
        isFailed: false,
        isGuessed: false
      },
      {
        value: "q",
        isFailed: false,
        isGuessed: false
      },
      {
        value: "r",
        isFailed: false,
        isGuessed: false
      },
      {
        value: "s",
        isFailed: false,
        isGuessed: false
      },
      {
        value: "t",
        isFailed: false,
        isGuessed: false
      },
      {
        value: "u",
        isFailed: false,
        isGuessed: false
      },
      {
        value: "w",
        isFailed: false,
        isGuessed: false
      },
      {
        value: "x",
        isFailed: false,
        isGuessed: false
      },
      {
        value: "y",
        isFailed: false,
        isGuessed: false
      },
      {
        value: "z",
        isFailed: false,
        isGuessed: false
      }
    ],
    word: [
      {
        value: "t",
        isGuessed: false,
      },
      {
        value: "e",
        isGuessed: false,
      },
      {
        value: "n",
        isGuessed: false,
      },
      {
        value: "n",
        isGuessed: false,
      },
      {
        value: "i",
        isGuessed: false,
      },
      {
        value: "s",
        isGuessed: false,
      }
    ],
    totalAttempts: 7,
    numberOfFails: 0,
    gameStatus: GameStatus.PLAY,
  };

  guessedLetterHandler = (letter) => {
    const word = [...this.state.word];
    let isGuessed = false;
    word.forEach(item => {
      if (item.value === letter) {
        item.isGuessed = true;
        isGuessed = true;
      }
    });
    const letters = [...this.state.letters];

    letters.forEach(l => {
      if(l.value === letter ){
        l.isGuessed = isGuessed;
        l.isFailed = !isGuessed;
      }
    })
    let numberOfFails = this.state.numberOfFails;
    if(!isGuessed){
      numberOfFails++;
    }
    let gameStatus = this.state.gameStatus;
    if(this.state.numberOfFails === this.state.totalAttempts - 1 ){
      gameStatus = GameStatus.LOST
    }
    let allIsGuessed = true;
    word.forEach( l => {
      if (!l.isGuessed) {
        allIsGuessed = false;
      }
    });
    if (allIsGuessed){
      gameStatus = GameStatus.WIN
    }
    this.setState({
      word: word,
      letters: letters,
      numberOfFails: numberOfFails,
      gameStatus: gameStatus
    })
  };

  render() {
    return (
      <div className={classes.Hangman}>
        <div className={classes.PlayArea}>
          <Word word={this.state.word}/>
          {this.state.gameStatus === GameStatus.PLAY
            ? <Letters guessedLetterHandler={this.guessedLetterHandler} letters={this.state.letters}/>
            : null
          }
          {this.state.gameStatus === GameStatus.WIN
            ? <Message win={true} text={"Congratulations, you WIN!!!"} />
            : null
          }
          {this.state.gameStatus === GameStatus.LOST
            ? <Message loss={true} text={"Better luck next time :("} />
            : null
          }

        </div>
        <div className={classes.ProgressArea}>
          <ProgressBar numberOfFails={this.state.numberOfFails} totalAttempts={this.state.totalAttempts}/>
        </div>
      </div>
    )
  }
}

export default Hangman;