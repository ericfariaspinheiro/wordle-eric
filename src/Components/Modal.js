export default function Modal (props) {
    const playAgain = () => {
        document.getElementById("modalWindow").classList.add("invisible");
        props.onResetClick();
    }
    if(props.index < 6){
        return (
        <div id="modalWindow" className="bg-gray-800/90 fixed inset-0 z-50 invisible">
            <div className="flex h-screen justify-center items-center">
                <div className="flex-col text-center justify-center bg-white py-12 px-24 border-4 border-gray-200 rounded-md">
                    <div className="text-lg">Congratilations! <br /> You guessed the correct word!</div>
                    <button onClick={playAgain} className="px-4 py-2 ml-2 bg-emerald-500 mt-5 rounded">Play again!</button>
                </div>
            </div>
        </div>
        )
    } else {
        return (
        <div id="modalWindow" className="bg-gray-800/90 fixed inset-0 z-50 invisible">
            <div className="flex h-screen justify-center items-center">
                <div className="flex-col text-center justify-center bg-white py-12 px-24 border-4 border-gray-200 rounded-md">
                    <div className="text-lg">Sorry! <br /> You did not guess the correct word.</div>
                    <button onClick={playAgain} className="px-4 py-2 ml-2 bg-emerald-500 mt-5 rounded">Play again!</button>
                </div>
            </div>
        </div>
    )
    }
    
}