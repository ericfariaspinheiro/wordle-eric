import React from 'react';
import './App.css';
import {dictionary} from './dictionary'

class App extends React.Component {
  state = {
    turnWord: "",
    eachLetter: [],
    allWords: [],
    index: 0
  }

  componentDidMount(){
    const index = Object.keys(dictionary);
    const answerWord = dictionary[index[Math.floor(Math.random()*index.length)]];
    this.setState({turnWord: answerWord})
  }

  handleButtonClick = (e) => {
    const letterClicked = e.target.innerText;
    this.updateEachLetter(letterClicked)
    this.updateCurrentLetter(letterClicked)
  }

  updateEachLetter = (newLetter) => {
    if(this.state.eachLetter.length < 5){
      this.setState({eachLetter: [...this.state.eachLetter, newLetter]})
      
    } 
    // else if(this.state.eachLetter.length === 5){
    //   const fullWord = this.state.eachLetter;
    //   this.increaseIndex();
    //   this.updateAllWords(fullWord);
    //   this.setState({eachLetter: []})
    // }
  }

  updateAllWords = (wordToAdd) => {
    if(this.state.allWords.length < 6) {
      this.setState({allWords: [...this.state.allWords, wordToAdd]});
    }
  }
  
  updateCurrentLetter = (newLetter) => {
    this.setState({currentLetter: newLetter})
  
  }

  handleDeleteClick = () => {
    const popLastLetter = [...this.state.eachLetter];
    popLastLetter.pop()
    this.setState({eachLetter: popLastLetter})
  }

  increaseIndex = () => {
    this.setState({index: this.state.index + 1})
  }

  render(){
    return (
      <div className="App">
        <Header />
        <div id="fullGame">
          <Board allWords={this.state.allWords} eachLetter={this.state.eachLetter} index={this.state.index} />
          <Keyboard onButtonclick={this.handleButtonClick} onDelClick={this.handleDeleteClick} />
        </div>
        <div>
          <h3>{this.state.eachLetter.length}</h3>
          <h3>{this.state.turnWord}</h3>
          <h3>{this.state.allWords}</h3>
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
          <BoardRow allWords={this.props.allWords[0]} eachLetter={this.props.eachLetter} index={this.props.index} />
          <EmptyBoardRow EmptyBoardRow />
          <EmptyBoardRow EmptyBoardRow />
          <EmptyBoardRow EmptyBoardRow />
          <EmptyBoardRow EmptyBoardRow />
          <EmptyBoardRow EmptyBoardRow />
        </div> 
      )
    } else if (this.props.index === 1){
      return (
        <div className="gameBoard">
          <BoardRow allWords={this.props.allWords[0]} eachLetter={this.props.eachLetter}  />
          <BoardRow allWords={this.props.allWords[1]} eachLetter={this.props.eachLetter}  />
          <EmptyBoardRow EmptyBoardRow />
          <EmptyBoardRow EmptyBoardRow />
          <EmptyBoardRow EmptyBoardRow />
          <EmptyBoardRow EmptyBoardRow />
        </div> 
      )
    } else if (this.props.index === 2){
      return (
        <div className="gameBoard">
          <BoardRow allWords={this.props.allWords[0]} eachLetter={this.props.eachLetter}  />
          <BoardRow allWords={this.props.allWords[1]} eachLetter={this.props.eachLetter}  />
          <BoardRow allWords={this.props.allWords[2]} eachLetter={this.props.eachLetter}  />
          <EmptyBoardRow EmptyBoardRow />
          <EmptyBoardRow EmptyBoardRow />
          <EmptyBoardRow EmptyBoardRow />
        </div> 
      )
    } else if (this.props.index === 3){
      return (
        <div className="gameBoard">
          <BoardRow allWords={this.props.allWords[0]} eachLetter={this.props.eachLetter}  />
          <BoardRow allWords={this.props.allWords[1]} eachLetter={this.props.eachLetter}  />
          <BoardRow allWords={this.props.allWords[2]} eachLetter={this.props.eachLetter}  />
          <BoardRow allWords={this.props.allWords[3]} eachLetter={this.props.eachLetter}  />
          <EmptyBoardRow EmptyBoardRow />
          <EmptyBoardRow EmptyBoardRow />
        </div> 
      )
    } else if (this.props.index === 4){
      return (
        <div className="gameBoard">
          <BoardRow allWords={this.props.allWords[0]} eachLetter={this.props.eachLetter}  />
          <BoardRow allWords={this.props.allWords[1]} eachLetter={this.props.eachLetter}  />
          <BoardRow allWords={this.props.allWords[2]} eachLetter={this.props.eachLetter}  />
          <BoardRow allWords={this.props.allWords[3]} eachLetter={this.props.eachLetter}  />
          <BoardRow allWords={this.props.allWords[4]} eachLetter={this.props.eachLetter}  />
          <EmptyBoardRow EmptyBoardRow />
        </div> 
      )
    } else if (this.props.index === 5){
      return (
        <div className="gameBoard">
          <BoardRow allWords={this.props.allWords[0]} eachLetter={this.props.eachLetter}  />
          <BoardRow allWords={this.props.allWords[1]} eachLetter={this.props.eachLetter}  />
          <BoardRow allWords={this.props.allWords[2]} eachLetter={this.props.eachLetter}  />
          <BoardRow allWords={this.props.allWords[3]} eachLetter={this.props.eachLetter}  />
          <BoardRow allWords={this.props.allWords[4]} eachLetter={this.props.eachLetter}  />
          <BoardRow allWords={this.props.allWords[5]} eachLetter={this.props.eachLetter}  />
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
        <LetterBox eachLetter={this.props.eachLetter[0]}  />
        <LetterBox eachLetter={this.props.eachLetter[1]} />
        <LetterBox eachLetter={this.props.eachLetter[2]} />
        <LetterBox eachLetter={this.props.eachLetter[3]} />
        <LetterBox eachLetter={this.props.eachLetter[4]} />
      </div>
    )} else if (this.props.allWords[0] !== ""){
      return( 
      <div className='boardRow'>
        <LetterBox eachLetter={this.props.allWords[0]} />
        <LetterBox eachLetter={this.props.allWords[1]} />
        <LetterBox eachLetter={this.props.allWords[2]} />
        <LetterBox eachLetter={this.props.allWords[3]} />
        <LetterBox eachLetter={this.props.allWords[4]} />
      </div>)
    }
    
    
  }
}

class LetterBox extends React.Component {
  render(){
    return(
      <div className='letterBox allLetters' > 
        {this.props.eachLetter}
      </div>
    )
  }
}


class Keyboard extends React.Component {
  render(){
    return(
      <div id="keyboard">
        <div className='keyboardRow'>
          <button className='keyButton' onClick={this.props.onButtonclick}>Q</button>
          <button className='keyButton' onClick={this.props.onButtonclick}>W</button>
          <button className='keyButton' onClick={this.props.onButtonclick}>E</button>
          <button className='keyButton' onClick={this.props.onButtonclick}>R</button>
          <button className='keyButton' onClick={this.props.onButtonclick}>T</button>
          <button className='keyButton' onClick={this.props.onButtonclick}>Y</button>
          <button className='keyButton' onClick={this.props.onButtonclick}>U</button>
          <button className='keyButton' onClick={this.props.onButtonclick}>I</button>
          <button className='keyButton' onClick={this.props.onButtonclick}>O</button>
          <button className='keyButton' onClick={this.props.onButtonclick}>P</button>
        </div>
        <div className='keyboardRow'>
          <button className='keyButton' onClick={this.props.onButtonclick}>A</button>
          <button className='keyButton' onClick={this.props.onButtonclick}>S</button>
          <button className='keyButton' onClick={this.props.onButtonclick}>D</button>
          <button className='keyButton' onClick={this.props.onButtonclick}>F</button>
          <button className='keyButton' onClick={this.props.onButtonclick}>G</button>
          <button className='keyButton' onClick={this.props.onButtonclick}>H</button>
          <button className='keyButton' onClick={this.props.onButtonclick}>J</button>
          <button className='keyButton' onClick={this.props.onButtonclick}>K</button>
          <button className='keyButton' onClick={this.props.onButtonclick}>L</button>
        </div>
        <div className='keyboardRow'>
          <button className='keyButton'>enter</button>
          <button className='keyButton' onClick={this.props.onButtonclick}>Z</button>
          <button className='keyButton' onClick={this.props.onButtonclick}>X</button>
          <button className='keyButton' onClick={this.props.onButtonclick}>C</button>
          <button className='keyButton' onClick={this.props.onButtonclick}>V</button>
          <button className='keyButton' onClick={this.props.onButtonclick}>B</button>
          <button className='keyButton' onClick={this.props.onButtonclick}>N</button>
          <button className='keyButton' onClick={this.props.onButtonclick}>M</button>
          <button className='keyButton' onClick={this.props.onDelClick}>del</button>
        </div>
      </div>
    )
  }
}

export default App;
