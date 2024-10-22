import React from "react";
import React, {useState} from "react";

function App() {
    const [input, setInput] = useState (""); //Početno stanje unosa

    //Funkcija dodavanje brojeva u unos.
    const handleInput = (value) => {
        setInput (input + value);
    };

    //Funkcija za izračun rezultata.
    const calculateResult = () => {
        try {
            setInput(eval(input));
        } catch (error){;
        setInput("Mistake");
        }
    };

}

export default App;
