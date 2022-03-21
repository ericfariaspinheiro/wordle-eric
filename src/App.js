import React from 'react';
import './Styles/App.css';
import {dictionary} from './dictionary'
import Header from './Components/Header'
import Board from './Components/Board'
import Keyboard from './Components/Keyboard'
import {keyboardKeys} from './Components/Keyboard'
import Modal from './Components/Modal'


class App extends React.Component {
  state = {
    turnWord: "",
    eachLetter: [],
    allWords: [],
    index: 0,
    guesses: []
  }

  componentDidMount(){
    this.pickRandomWord();

    document.onkeydown = (logKey) => {
      this.handleKeyboardClick(logKey.key.toUpperCase())
    };
    
  }

  pickRandomWord = () => {
    const answerWord = dictionary[Math.floor(Math.random()*dictionary.length)];
    this.setState({turnWord: answerWord})
    console.log(answerWord)
  }

  handleButtonClick = (e) => {
    const letterClicked = e.target.innerText;
    this.updateEachLetter(letterClicked);
  }

  handleKeyboardClick = (e) => {
    
    if(keyboardKeys.indexOf(e) >= 0){
      this.updateEachLetter(e);
    } else if (e === "BACKSPACE"){
      this.handleDeleteClick();
    } else if(e === "ENTER"){
      this.handleEnterClick();
    }
  }

  updateEachLetter = (newLetter) => {
    if(this.state.eachLetter.length < 5){
      this.setState({eachLetter: [...this.state.eachLetter, newLetter]})
    } 
  }

  updateAllWordsAndIndex = (wordToAdd) => {
    if(this.state.allWords.length < 6) {
      this.setState({allWords: [...this.state.allWords, wordToAdd]});
    }

    this.setState({eachLetter: []}, ()=>{
      this.setState(prevState => ({
          index: prevState.index + 1
        })
      )}
    )
  }

  handleDeleteClick = () => {
    const popLastLetter = [...this.state.eachLetter];
    popLastLetter.pop()
    this.setState({eachLetter: popLastLetter})
  }

  increaseIndex = () => {
    this.setState({index: this.state.index + 1})    
  }

  handleEnterClick = () => {
    if(this.state.eachLetter.length === 5){
      const fullWordString = this.state.eachLetter.join("").toLocaleLowerCase();
      const turnWordArray = this.state.turnWord.toUpperCase().split("");
    
      if(dictionary.indexOf(fullWordString) === -1){
        alert("Word not valid!");
      } else {
        this.charChecker(this.state.eachLetter, turnWordArray);
      }

    }
  }

  charChecker = (input, answer) => {
    const tester =  input.map((letter, index) => {
      if(letter === answer[index]){
        return true;
      } else{
        return false;
      }
    })

    const correctLetters = input.filter((letter, index) => {
      if(answer.indexOf(letter) > -1 && tester[index] !== true){
        return letter
      }
    });
    
    this.setState({guesses: tester});
    setTimeout(()=> {
      this.checkGuess(correctLetters)
    }, 100)
    
  }

  checkGuess = (okLetters) => {
    let stateGusses = this.state.guesses;
    let correctGuess = stateGusses.every((element)=> element === true)
    const guessRowElements = [...document.getElementsByClassName(`allLetters ${this.state.index}`)]

    if(correctGuess === true){
      //Game end
      guessRowElements.forEach((item) => {
          item.classList.add("correct")}
      )
      setTimeout(()=>{
        document.getElementById("modalWindow").classList.remove("invisible");
      }, 600)
      
    } else {
      guessRowElements.forEach((item, indexer) => {
        if(stateGusses[indexer] === true){
          item.classList.add("correct");
        } else if (stateGusses[indexer] !== true && okLetters.indexOf(item.innerText) > -1){
          item.classList.add("present");
        } else if (stateGusses[indexer] !== true && okLetters.indexOf(item.innerText) === -1){
          item.classList.add("absent");
        }
      })
      this.updateAllWordsAndIndex(this.state.eachLetter.join(""));
      if (this.state.index > 5){
        setTimeout(()=>{
          document.getElementById("modalWindow").classList.remove("invisible");
        }, 700)
      }
    }
  }

  resetGame = () => {
    this.pickRandomWord()
    
    this.setState({
      eachLetter: [],
      allWords: [],
      index: 0,
      guesses: []
    })
  }

  render(){
    return (
      <div className="App">
        <Header />
        <div id="fullGame">
          <Board 
            allWords={this.state.allWords} 
            eachLetter={this.state.eachLetter} 
            index={this.state.index} 
          />
          <Keyboard 
            onButtonclick={this.handleButtonClick} 
            onDelClick={this.handleDeleteClick} 
            onEnderClick={this.handleEnterClick}
          />
        </div>
        <Modal 
          onResetClick={this.resetGame}
          index={this.state.index}
        />
      </div>
    );
  }
}

export default App;