import React from 'react';
import './App.css';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Header />
        <div id="fullGame">
          <Board />
          <Keyboard />
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
      <div class="gameBoard">
        <BoardRow />
        <BoardRow />
        <BoardRow />
        <BoardRow />
        <BoardRow />
        <BoardRow />
      </div> 
    )
  }
}

class BoardRow extends React.Component {
  render() {
    return(
      <div className='boardRow'>
        <LetterBox />
        <LetterBox />
        <LetterBox />
        <LetterBox />
        <LetterBox />
      </div>
    )
  }
}

class LetterBox extends React.Component {
  render(){
    return(
      <div className='letterBox allLetters'>
      </div>
    )
  }
}


class Keyboard extends React.Component {
  render(){
    return(
      <div id="keyboard">
        <div className='keyboardRow'>
          <button className='keyButton'>Q</button>
          <button className='keyButton'>W</button>
          <button className='keyButton'>E</button>
          <button className='keyButton'>R</button>
          <button className='keyButton'>T</button>
          <button className='keyButton'>Y</button>
          <button className='keyButton'>U</button>
          <button className='keyButton'>I</button>
          <button className='keyButton'>O</button>
          <button className='keyButton'>P</button>
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
