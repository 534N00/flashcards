import React, { useState } from 'react';

const Form = ( {answer} ) => {

    const [formData, setFormData] = useState({ guess: "" }); 
    const [cssState, setCssState] = useState(""); // default css class   
   
    const handleSubmit = (e) => {
        e.preventDefault();
        const userGuess = formData.guess.trim().toLowerCase();
        const correctAnswer = answer.trim().toLowerCase();
        if (userGuess == correctAnswer) {
            setCssState("guess-correct")
            setTimeout(() => { setCssState("guess-plain"); }, 1000);
        } else {
            setCssState("guess-incorrect")
            setTimeout(() => { setCssState("guess-plain"); }, 1000);
        }
    };

    // seems I just have to save stuff on change so as to use the state system, because I can't seem to take form data otherwise
    const handleChange = (e) => {
        setFormData({ guess: e.target.value });
    };

    
    return (
        <div className="Form">
            <form onSubmit={handleSubmit}>
                <label htmlFor="guess">Guess: </label>
                <input type="text" name="guess" className={cssState} id="guess" defaultValue="Text Here" onChange={handleChange}/> 
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;