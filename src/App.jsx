import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  const cardStack = [ // Put card data here
    { q: "Click to flip.", a: "Let's see what you got matrix magician! Use the button below or the spacebar to flip through cards.", c: "card-title" },
    { q: "What is a vector space?", a: "Set of vectors that are closed under vector addition and scalar multiplication.", c: "card-vector" },
    { q: "What is a column space?", a: "The vector space spanned by its column vectors.", c: "card-space" },
    { q: "What are asymmetric matrices?", a: "Square matrices that are not equal to their transpose.", c: "card-matrix" },
    { q: "When are vectors linearly independent?", a: "When no vector in the set can be written as a linear combination of the others.", c: "card-vector" },
    { q: "Are elementary matrices linearly independent", a: "Yes!", c: "card-vector" },
    { q: "When are vectors linearly dependent?", a: "If at least one vector in the set can be expressed as a linear combination of the others.", c: "card-vector" },
    { q: "What is a nullspace?", a: "The set of all vectors that, when multiplied by the matrix, result in the zero vector.", c: "card-space" },
    { q: "What is a subspace?", a: "It is a subset of that space that is itself a vector space, satisfying closure under addition and scalar multiplication.", c: "card-space" },
    { q: "What is the norm of vectors?", a: "It is a measure of its length or magnitude in a vector space. (Sqrt. of v dot v)", c: "card-vector" },
    { q: "How do you calculate the 'distance' between two vectors?", a: "Take the norm of one vector minus the other.", c: "card-vector" },
    { q: "When are matrices orthagonal?", a: "When their transpose is equal to their inverse, and their rows or columns form an orthonormal set of vectors.", c: "card-matrix" }
  ];
  cardStack[0].a += " There are " + (cardStack.length) + " cards.";

  const [index, setIndex] = useState(0); // index of cardStack
  const [count, setCount] = useState(cardStack.length); // set card count
  const grabCard = () => { // grab card from stack
    const randI = (Math.random() * cardStack.length - 1) | 0;
    setIndex(randI + 1);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Space") { grabCard(); }
  };

  return (
    <>
      <h1>Linear Algebra Vocab Cards</h1>
      <h2>Do you know your Lin Alg concepts? Time to find out!</h2>
      <p><em>Number of cards: {count}</em></p>
      <Card question={cardStack[index].q} answer={cardStack[index].a} c={cardStack[index].c} />
      <br/>
      <button onClick={grabCard}>→</button>
    </>
  )
}

export default App
