export default function Board (props) {
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