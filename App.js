import React, {useState} from "react";

function App() {
    const [input, setInput] = useState (""); //Početno stanje unosa
    const [result, setResult] = useState("");

    //Funkcija dodavanje brojeva u unos.
    const handleInput = (value) => {
        setInput (input + value);
    };
    //Funkcija za izračun rezultata.
    const calculateResult = () => {
        try {
            setResult(eval(input));
            setInput(eval(input).toString());   //Prikaz rezultata na ekranu
        } catch (error){;
        setInput("Mistake");
        }
    };
    const clearInput = () => {
        setInput("");
        setResult("");
    };

return (
    <div>
        <h1>Calculator</h1>
        <input type="text" value={input} readOnly/>
        <div> 
            <button onClick={calculateResult}>=</button>
            <button onClick={clearInput}>C</button><br></br>
            <button onClick={() => handleInput("1")}>1</button>
            <button onClick={() => handleInput("2")}>2</button>
            <button onClick={() => handleInput("3")}>3</button><br></br>
            <button onClick={() => handleInput("4")}>4</button>
            <button onClick={() => handleInput("5")}>5</button>
            <button onClick={() => handleInput("6")}>6</button><br></br>
            <button onClick={() => handleInput("7")}>7</button>
            <button onClick={() => handleInput("8")}>8</button>
            <button onClick={() => handleInput("9")}>9</button><br></br>
            <button onClick={() => handleInput("0")}>0</button><br></br>
            <button onClick={() => handleInput("+")}>+</button>
            <button onClick={() => handleInput("-")}>-</button>
            <button onClick={() => handleInput("*")}>*</button>
            <button onClick={() => handleInput("/")}>/</button>
            </div>
    </div>
); 
}

export default App;
