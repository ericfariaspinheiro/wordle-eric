import React from 'react';
import './Styles/App.css';
import {dictionary} from './dictionary'
import Modal from './Components/Modal'
import Keyboard from './Components/Keyboard'
import Header from './Components/Header'

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
  }

  pickRandomWord = () => {
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
      guessRowElements.forEach((item) => {
          item.classList.add("correct")}
      )
      setTimeout(()=>{
        document.getElementById("modalWindow").classList.remove("invisible");
      }, 600)
      
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
        />
      </div>
    );
  }
}

function Board (props) {
  if(props.index === 0){
    return (
      <div className="gameBoard">
        <BoardRow 
          allWords={props.allWords[0]} 
          eachLetter={props.eachLetter} 
          rowIndex={0} />
        <EmptyBoardRow />
        <EmptyBoardRow />
        <EmptyBoardRow />
        <EmptyBoardRow />
        <EmptyBoardRow />
      </div> 
    )
  } else if (props.index === 1){
    return (
      <div className="gameBoard">
        <BoardRow 
          allWords={props.allWords[0]} 
          eachLetter={props.eachLetter} 
          rowIndex={0}
        />
        <BoardRow 
          allWords={props.allWords[1]} 
          eachLetter={props.eachLetter} 
          rowIndex={1}  
        />
        <EmptyBoardRow />
        <EmptyBoardRow />
        <EmptyBoardRow />
        <EmptyBoardRow />
      </div> 
    )
  } else if (props.index === 2){
    return (
      <div className="gameBoard">
        <BoardRow 
          allWords={props.allWords[0]} 
          eachLetter={props.eachLetter}  
          rowIndex={0}
        />
        <BoardRow 
          allWords={props.allWords[1]} 
          eachLetter={props.eachLetter}  
          rowIndex={1}
        />
        <BoardRow 
          allWords={props.allWords[2]} 
          eachLetter={props.eachLetter}  
          rowIndex={2}
        />
        <EmptyBoardRow />
        <EmptyBoardRow />
        <EmptyBoardRow />
      </div> 
    )
  } else if (props.index === 3){
    return (
      <div className="gameBoard">
        <BoardRow 
          allWords={props.allWords[0]} 
          eachLetter={props.eachLetter}  
          rowIndex={0}
        />
        <BoardRow 
          allWords={props.allWords[1]} 
          eachLetter={props.eachLetter}  
          rowIndex={1}
        />
        <BoardRow 
          allWords={props.allWords[2]} 
          eachLetter={props.eachLetter}  
          rowIndex={2}
        />
        <BoardRow 
          allWords={props.allWords[3]} 
          eachLetter={props.eachLetter}  
          rowIndex={3}
        />
        <EmptyBoardRow />
        <EmptyBoardRow />
      </div> 
    )
  } else if (props.index === 4){
    return (
      <div className="gameBoard">
        <BoardRow 
          allWords={props.allWords[0]} 
          eachLetter={props.eachLetter}  
          rowIndex={0}
        />
        <BoardRow 
          allWords={props.allWords[1]} 
          eachLetter={props.eachLetter}  
          rowIndex={1}
        />
        <BoardRow 
          allWords={props.allWords[2]} 
          eachLetter={props.eachLetter}  
          rowIndex={2}
        />
        <BoardRow 
          allWords={props.allWords[3]} 
          eachLetter={props.eachLetter}  
          rowIndex={3}
        />
        <BoardRow 
          allWords={props.allWords[4]} 
          eachLetter={props.eachLetter}  
          rowIndex={4}
        />
        <EmptyBoardRow />
      </div>  
    )
  } else if (props.index >= 5){
    return (
      <div className="gameBoard">
        <BoardRow 
          allWords={props.allWords[0]} 
          eachLetter={props.eachLetter}  
          rowIndex={0}
        />
        <BoardRow 
          allWords={props.allWords[1]} 
          eachLetter={props.eachLetter}  
          rowIndex={1}
        />
        <BoardRow 
          allWords={props.allWords[2]} 
          eachLetter={props.eachLetter}  
          rowIndex={2}
        />
        <BoardRow 
          allWords={props.allWords[3]} 
          eachLetter={props.eachLetter}  
          rowIndex={3}
        />
        <BoardRow 
          allWords={props.allWords[4]} 
          eachLetter={props.eachLetter}  
          rowIndex={4}
        />
        <BoardRow 
          allWords={props.allWords[5]} 
          eachLetter={props.eachLetter}  
          rowIndex={5}
        />
      </div>
    )
  }
}

function EmptyBoardRow (props) {
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

function BoardRow (props) {
  if(props.allWords === undefined){
    return( 
      <div className='boardRow'>
        <LetterBox eachLetter={props.eachLetter[0]} rowIndex={props.rowIndex} />
        <LetterBox eachLetter={props.eachLetter[1]} rowIndex={props.rowIndex} />
        <LetterBox eachLetter={props.eachLetter[2]} rowIndex={props.rowIndex} />
        <LetterBox eachLetter={props.eachLetter[3]} rowIndex={props.rowIndex} />
        <LetterBox eachLetter={props.eachLetter[4]} rowIndex={props.rowIndex} />
      </div>
    )
  } else if (props.allWords[0] !== ""){
    return( 
      <div className='boardRow'>
        <LetterBox eachLetter={props.allWords[0]} rowIndex={props.rowIndex} />
        <LetterBox eachLetter={props.allWords[1]} rowIndex={props.rowIndex} />
        <LetterBox eachLetter={props.allWords[2]} rowIndex={props.rowIndex} />
        <LetterBox eachLetter={props.allWords[3]} rowIndex={props.rowIndex} />
        <LetterBox eachLetter={props.allWords[4]} rowIndex={props.rowIndex} />
      </div>
    )
  }
}

function LetterBox (props) {
    return(
      <div className={`letterBox allLetters ${props.rowIndex} ${props.eachLetter}`} > 
        {props.eachLetter}
      </div>
    )
}

export default App;