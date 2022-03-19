import React from 'react';
import './App.css';
import {dictionary} from './dictionary'

const keyboardKeys = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "enter", "Z", "X","C","V","B","N","M", "del"];

class App extends React.Component {
  state = {
    turnWord: "",
    eachLetter: [],
    allWords: [],
    index: 0,
    guesses: []
  }

  componentDidMount(){
    const answerWord = dictionary[Math.floor(Math.random()*dictionary.length)];
    this.setState({turnWord: answerWord})
    console.log(answerWord)
  }

  handleButtonClick = (e) => {
    const letterClicked = e.target.innerText;
    this.updateEachLetter(letterClicked)
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

    this.setState({eachLetter: []})
    setTimeout(()=>{
        this.setState(prevState => ({
          index: prevState.index + 1
        }))
      }, 1000)
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
      console.log("Correct")
      
      guessRowElements.forEach((item) => {
          item.classList.add("correct")}
      )
      window.alert("Congrats!!")
    } else {
      guessRowElements.forEach((item, indexer) => {
        if(stateGusses[indexer] === true){
          item.classList.add("correct")
        } else if (stateGusses[indexer] !== true && okLetters.indexOf(item.innerText) > -1){
          item.classList.add("present")
        } else if (stateGusses[indexer] !== true && okLetters.indexOf(item.innerText) === -1){
          item.classList.add("absent")
        }
      })

      this.updateAllWordsAndIndex(this.state.eachLetter.join(""));
    }
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
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return(
      <div id='pageHeader'>
        <h1 id="pageTitle">Eric's Wordle</h1>
      </div>
    )
  }
}

class Board extends React.Component {
  render(){
    
    if(this.props.index === 0){
      return (
        <div className="gameBoard">
          <BoardRow 
            allWords={this.props.allWords[0]} 
            eachLetter={this.props.eachLetter} 
            rowIndex={0} />
          <EmptyBoardRow />
          <EmptyBoardRow />
          <EmptyBoardRow />
          <EmptyBoardRow />
          <EmptyBoardRow />
        </div> 
      )
    } else if (this.props.index === 1){
      return (
        <div className="gameBoard">
          <BoardRow 
            allWords={this.props.allWords[0]} 
            eachLetter={this.props.eachLetter} 
            rowIndex={0}
          />
          <BoardRow 
            allWords={this.props.allWords[1]} 
            eachLetter={this.props.eachLetter} 
            rowIndex={1}  
          />
          <EmptyBoardRow />
          <EmptyBoardRow />
          <EmptyBoardRow />
          <EmptyBoardRow />
        </div> 
      )
    } else if (this.props.index === 2){
      return (
        <div className="gameBoard">
          <BoardRow 
            allWords={this.props.allWords[0]} 
            eachLetter={this.props.eachLetter}  
            rowIndex={0}
          />
          <BoardRow 
            allWords={this.props.allWords[1]} 
            eachLetter={this.props.eachLetter}  
            rowIndex={1}
          />
          <BoardRow 
            allWords={this.props.allWords[2]} 
            eachLetter={this.props.eachLetter}  
            rowIndex={2}
          />
          <EmptyBoardRow />
          <EmptyBoardRow />
          <EmptyBoardRow />
        </div> 
      )
    } else if (this.props.index === 3){
      return (
        <div className="gameBoard">
          <BoardRow 
            allWords={this.props.allWords[0]} 
            eachLetter={this.props.eachLetter}  
            rowIndex={0}
          />
          <BoardRow 
            allWords={this.props.allWords[1]} 
            eachLetter={this.props.eachLetter}  
            rowIndex={1}
          />
          <BoardRow 
            allWords={this.props.allWords[2]} 
            eachLetter={this.props.eachLetter}  
            rowIndex={2}
          />
          <BoardRow 
            allWords={this.props.allWords[3]} 
            eachLetter={this.props.eachLetter}  
            rowIndex={3}
          />
          <EmptyBoardRow />
          <EmptyBoardRow />
        </div> 
      )
    } else if (this.props.index === 4){
      return (
        <div className="gameBoard">
          <BoardRow 
            allWords={this.props.allWords[0]} 
            eachLetter={this.props.eachLetter}  
            rowIndex={0}
          />
          <BoardRow 
            allWords={this.props.allWords[1]} 
            eachLetter={this.props.eachLetter}  
            rowIndex={1}
          />
          <BoardRow 
            allWords={this.props.allWords[2]} 
            eachLetter={this.props.eachLetter}  
            rowIndex={2}
          />
          <BoardRow 
            allWords={this.props.allWords[3]} 
            eachLetter={this.props.eachLetter}  
            rowIndex={3}
          />
          <BoardRow 
            allWords={this.props.allWords[4]} 
            eachLetter={this.props.eachLetter}  
            rowIndex={4}
          />
          <EmptyBoardRow />
        </div>  
      )
    } else if (this.props.index >= 5){
      return (
        <div className="gameBoard">
          <BoardRow 
            allWords={this.props.allWords[0]} 
            eachLetter={this.props.eachLetter}  
            rowIndex={0}
          />
          <BoardRow 
            allWords={this.props.allWords[1]} 
            eachLetter={this.props.eachLetter}  
            rowIndex={1}
          />
          <BoardRow 
            allWords={this.props.allWords[2]} 
            eachLetter={this.props.eachLetter}  
            rowIndex={2}
          />
          <BoardRow 
            allWords={this.props.allWords[3]} 
            eachLetter={this.props.eachLetter}  
            rowIndex={3}
          />
          <BoardRow 
            allWords={this.props.allWords[4]} 
            eachLetter={this.props.eachLetter}  
            rowIndex={4}
          />
          <BoardRow 
            allWords={this.props.allWords[5]} 
            eachLetter={this.props.eachLetter}  
            rowIndex={5}
          />
        </div>
      )
    }
  }
}

class EmptyBoardRow extends React.Component {
  render() {
    return (
    <div className='boardRow emptyBoardRow'>
      <LetterBox eachLetter={" "} />
      <LetterBox eachLetter={" "} />
      <LetterBox eachLetter={" "} />
      <LetterBox eachLetter={" "} />
      <LetterBox eachLetter={" "} />
    </div>
    )  
  }
}

class BoardRow extends React.Component {

  render() {

    if(this.props.allWords === undefined){
      return( 
      <div className='boardRow'>
        <LetterBox eachLetter={this.props.eachLetter[0]} rowIndex={this.props.rowIndex} />
        <LetterBox eachLetter={this.props.eachLetter[1]} rowIndex={this.props.rowIndex} />
        <LetterBox eachLetter={this.props.eachLetter[2]} rowIndex={this.props.rowIndex} />
        <LetterBox eachLetter={this.props.eachLetter[3]} rowIndex={this.props.rowIndex} />
        <LetterBox eachLetter={this.props.eachLetter[4]} rowIndex={this.props.rowIndex} />
      </div>
    )} else if (this.props.allWords[0] !== ""){
      return( 
      <div className='boardRow'>
        <LetterBox eachLetter={this.props.allWords[0]} rowIndex={this.props.rowIndex} />
        <LetterBox eachLetter={this.props.allWords[1]} rowIndex={this.props.rowIndex} />
        <LetterBox eachLetter={this.props.allWords[2]} rowIndex={this.props.rowIndex} />
        <LetterBox eachLetter={this.props.allWords[3]} rowIndex={this.props.rowIndex} />
        <LetterBox eachLetter={this.props.allWords[4]} rowIndex={this.props.rowIndex} />
      </div>)
    }
    
    
  }
}

class LetterBox extends React.Component {
  render(){
    return(
      <div className={`letterBox allLetters ${this.props.rowIndex} ${this.props.eachLetter}`} > 
        {this.props.eachLetter}
      </div>
    )
  }
}

class Keyboard extends React.Component {
  render(){
    const keyboardFrame = keyboardKeys.map((key)=>{
      if (key === "enter"){
        return (
          <button className='keyButton' onClick={this.props.onEnderClick}>{key}</button>
        )
      } else if (key === "del"){
        return(
          <button className='keyButton' onClick={this.props.onDelClick}>{key}</button>
        )
      } else {
        return (
          <button className='keyButton' onClick={this.props.onButtonclick}>{key}</button>
        )
      }
    })

    return(
      <div id="keyboard">
        <div className='keyboardRow'>
          {keyboardFrame.slice(0, 10)}
        </div>
        <div className='keyboardRow'>
          {keyboardFrame.slice(10, 19)}
        </div>
        <div className='keyboardRow'>
          {keyboardFrame.slice(19)}
        </div>
      </div>
    )
  }
}

export default App;