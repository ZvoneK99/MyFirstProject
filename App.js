import React, {useEffect, useState} from "react";

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
    //Funkcija koja brise rezultat ili broj iz inputa
    const clearInput = () => {
        setInput("");
        setResult("");
    };
    //Funkcija briše zadnji znak iz unosa
    const deleteLast = () => {
        setInput(input.slice(0, -1)) 
    };
    //Funkcija za računanje korjena
    const sqrt = () => {
        setInput(Math.sqrt(eval(input)).toString());
    };
    //Funkcija za potenciranje
    const potention = () => {
        setInput(input*input);
    };
    //Funkcija za postotak
    const percentage = () => {
        setInput((eval(input)/100).toString());
    };


    const handleKeyPress = (event) => {
        const {key} = event;
        if(/\d/.test(key)) {    //Provjeravamo je li pritisnuta tipka [0-9]
            handleInput(key);
        }
        else if (key === "Enter") { //Enter ispisuje rezultat
            calculateResult();
        }
        else if (key === "Escape") {    //Esc brise 
            clearInput()
        }
        else if (["+", "-", "*", "/"].includes(key)) { //Matematičke operacije
            handleInput(`${key}`);
        }
        else if (key === ".") { //Za decimalne brojeve
            handleInput(".");
        }
        else if(key === "Backspace") {  //Briše zadnji znak
            deleteLast()    
        }
        else if (key === "k") {
            percentage();
        }
    };
    

    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);

        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [input]);

  

return (
    <div>
        <h1>Calculator</h1>
        <input type="text" value={input} readOnly/>
        <div> 
            <button onClick={calculateResult}>=</button>
            <button onClick={clearInput}>C</button>
            <button onClick={deleteLast}>DEL</button>
            <button onClick={() => handleInput("1")}>1</button>
            <button onClick={() => handleInput("2")}>2</button>
            <button onClick={() => handleInput("3")}>3</button>
            <button onClick={() => handleInput("4")}>4</button>
            <button onClick={() => handleInput("5")}>5</button>
            <button onClick={() => handleInput("6")}>6</button>
            <button onClick={() => handleInput("7")}>7</button>
            <button onClick={() => handleInput("8")}>8</button>
            <button onClick={() => handleInput("9")}>9</button>
            <button onClick={() => handleInput("0")}>0</button>
            <button onClick={() => handleInput("+")}>+</button>
            <button onClick={() => handleInput("-")}>-</button>
            <button onClick={() => handleInput("*")}>*</button>
            <button onClick={() => handleInput("/")}>/</button>
            <button onClick={() => handleInput(".")}>.</button>
            <button onClick={sqrt}>√</button>
            <button onClick={potention}>**</button>
            <button onClick={percentage}>%</button>
            </div>
    </div>
); 
}

export default App;
