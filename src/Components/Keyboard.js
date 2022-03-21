export const keyboardKeys = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "enter", "Z", "X", "C", "V", "B", "N", "M", "del"];

export default function Keyboard (props) {
  const keyboardFrame = keyboardKeys.map((key)=>{
    if (key === "enter"){
      return (
        <button className='keyButton' onClick={props.onEnderClick} key={key}>{key}</button>
      )
    } else if (key === "del"){
      return(
        <button className='keyButton' onClick={props.onDelClick} key={key}>{key}</button>
      )
    } else {
      return (
        <button className='keyButton' onClick={props.onButtonclick} key={key}>{key}</button>
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
