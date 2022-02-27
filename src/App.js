import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    eachLetter: [],
    allWords: [],
    currentLetter: ""
  }

  handleButtonClick = (e) => {
    const letterClicked = e.target.innerText;
    this.updateEachLetter(letterClicked)
    this.updateCurrentLetter(letterClicked)
  }

  updateEachLetter = (newLetter) => {
    if(this.state.eachLetter.length < 5){
      this.setState({eachLetter: [...this.state.eachLetter, newLetter]})
    } else if(this.state.eachLetter.length === 5){
      const fullWord = this.state.eachLetter.join("");
      this.updateAllWords(fullWord);
      this.setState({eachLetter: []})
    }
  }

  updateAllWords = (wordToAdd) => {
    if(this.state.allWords.length < 6) {
      this.setState({allWords: [...this.state.allWords, wordToAdd]});
    }
  }
  
  updateCurrentLetter = (newLetter) => {
    this.setState({currentLetter: newLetter})
  }

  render(){
    return (
      <div className="App">
        <Header />
        <div id="fullGame">
          <Board allWords={this.state.allWords} />
          <Keyboard onButtonclick={this.handleButtonClick} />
        </div>
        <div>
          <h3>{this.state.eachLetter.length}</h3>
          <h3>{this.state.currentLetter}</h3>
          <h3>{this.state.allWords.length}</h3>
        </div>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return(
      <div id='pageHeader'>
        <h1>Eric's Wordle</h1>
      </div>
    )
  }
}

class Board extends React.Component {
  render(){
    return (
      <div className="gameBoard">
        <BoardRow allWords={this.props.allWords[0]} />
        <BoardRow allWords={this.props.allWords[1]} />
        <BoardRow allWords={this.props.allWords[2]} />
        <BoardRow allWords={this.props.allWords[3]} />
        <BoardRow allWords={this.props.allWords[4]} />
        <BoardRow allWords={this.props.allWords[5]} />
      </div> 
    )
  }
}

class BoardRow extends React.Component {

  render() {
    return(
      <div className='boardRow'>
        <LetterBox eachLetter={this.props.allWords} />
        <LetterBox eachLetter={"d"} />
        <LetterBox eachLetter={"d"} />
        <LetterBox eachLetter={"d"} />
        <LetterBox eachLetter={"d"} />
      </div>
    )
  }
}

class LetterBox extends React.Component {
  render(){
    
    return(
      <div className='letterBox allLetters'>
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
          <button className='keyButton'>A</button>
          <button className='keyButton'>S</button>
          <button className='keyButton'>D</button>
          <button className='keyButton'>F</button>
          <button className='keyButton'>G</button>
          <button className='keyButton'>H</button>
          <button className='keyButton'>J</button>
          <button className='keyButton'>K</button>
          <button className='keyButton'>L</button>
        </div>
        <div className='keyboardRow'>
          <button className='keyButton'>enter</button>
          <button className='keyButton'>Z</button>
          <button className='keyButton'>X</button>
          <button className='keyButton'>C</button>
          <button className='keyButton'>V</button>
          <button className='keyButton'>B</button>
          <button className='keyButton'>N</button>
          <button className='keyButton'>M</button>
          <button className='keyButton'>del</button>
        </div>
      </div>
    )
  }
}

export default App;
