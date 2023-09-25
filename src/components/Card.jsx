import React, { useState } from 'react';

const Card = ({ question, answer, c }) => {
    const [isFliped, setIsFliped] = useState(false);
    
    const flipCard = () => {
        setIsFliped(!isFliped);
        // do animation maybe
    };

    let type = "";
    if (c === "card-vector") {
        type = "Vectors";
    } else if (c === "card-matrix") {
        type = "Matrices";
    } else if (c === "card-space") {
        type = "Vector Spaces";
    } else if (c === "card-title") {
        type = "Welcome!";
    }

    const cc = "Card" + " " + c;
    if (isFliped) {
        return (
            <div className={cc} id="card-ans-text" onClick={flipCard}>
                <p>{answer}</p>
            </div>
        );
    }
    return (
        <div className={cc} id="card-txt" onClick={flipCard}>
            <p><em>{type}</em></p>
            <p>{question}</p>
        </div>
    );  
};

export default Card;
