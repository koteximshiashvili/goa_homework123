import { useState } from "react"

export const Calculator = () => {
    const [text, setText] = useState("");
    function appendToDisplay(num){
        setText(t => t + num)
    };
    function calculate(){
        try{
            let answer = eval(text);
            setText(answer);
        }
        catch(error){
            setText("error")
        }
    }
    function clearDisplay(){
        setText("");
    }
    return (
        <>
        <input type="text" value={text} readOnly/>
        <button onClick={() => appendToDisplay('+')}>+</button>
        <button onClick={() => appendToDisplay('7')}>7</button>
        <button onClick={() => appendToDisplay('8')}>8</button>
        <button onClick={() => appendToDisplay('9')}>9</button>
        <button onClick={() => appendToDisplay('-')}>-</button>
        <button onClick={() => appendToDisplay('4')}>4</button>
        <button onClick={() => appendToDisplay('5')}>5</button>
        <button onClick={() => appendToDisplay('6')}>6</button>
        <button onClick={() => appendToDisplay('*')}>*</button>
        <button onClick={() => appendToDisplay('1')}>1</button>
        <button onClick={() => appendToDisplay('2')}>2</button>
        <button onClick={() => appendToDisplay('3')}>3</button>
        <button onClick={() => appendToDisplay('/')}>/</button>
        <button onClick={() => appendToDisplay('0')}>0</button>
        <button onClick={() => appendToDisplay('.')}>.</button>
        <button onClick={calculate}>=</button>
        <button onClick={clearDisplay}>c</button>
        </>
    )
}
