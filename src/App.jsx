import { useState } from 'react'
import Card from './components/Card'
import Form from './components/Form'
import './App.css'

function App() {
  const cardStack = [ // Put card data here
    { q: "Click to flip.", a: "Let's see what you got matrix magician! Use the button below or the spacebar to flip through cards.", c: "card-title" },
    { a: "Vector space", q: "Set of vectors that are closed under vector addition and scalar multiplication.", c: "card-vector" },
    { a: "Column space", q: "The vector space spanned by its column vectors.", c: "card-space" },
    { a: "Asymmetric matrices", q: "Square matrices that are not equal to their transpose.", c: "card-matrix" },
    { a: "Linear independence", q: "When no vector in the set can be written as a linear combination of the others.", c: "card-vector" },
    { q: "Are elementary matrices linearly independent", a: "Yes!", c: "card-vector" },
    { a: "Linear dependence", q: "When at least one vector in the set can be expressed as a linear combination of the others.", c: "card-vector" },
    { a: "Nullspace", q: "The set of all vectors that, when multiplied by the matrix, result in the zero vector.", c: "card-space" },
    { a: "Subspace", q: "It is a subset of that space that is itself a vector space, satisfying closure under addition and scalar multiplication.", c: "card-space" },
    { a: "Norm of vectors", q: "It is a measure of its length or magnitude in a vector space. (Sqrt. of v dot v)", c: "card-vector" },
    { a: "Distance between two vectors", q: "What are you trying to find when you take the norm of one vector minus the other.", c: "card-vector" },
    { a: "Matrix orthagonality", q: "Their transpose is equal to their inverse, and their rows or columns form an orthonormal set of vectors. What does this determine?", c: "card-matrix" }
  ];
  cardStack[0].a += " There are " + (cardStack.length) + " cards.";

  const [index, setIndex] = useState(0); // index of cardStack
  const [count, setCount] = useState(cardStack.length); // set card count

  const grabCard = (dir) => { // grab card from stack
    if (dir === "left") {
      if (index === 0) { setIndex(cardStack.length - 1); }
      else { setIndex(index - 1); }
      return;
    } // else dir === "right"
    if (index === cardStack.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  };

  

  return (
    <>
      <h1>Linear Algebra Vocab Cards</h1>
      <h2>Do you know your Lin Alg concepts? Time to find out!</h2>
      <p><em>Number of cards: {count}</em></p>
      <Card question={cardStack[index].q} answer={cardStack[index].a} c={cardStack[index].c} />
      <br/>
      <Form answer={cardStack[index].a}/>
      <br/>
      <button onClick={() => grabCard("left")}>←</button>
      <button onClick={() => grabCard("right")}>→</button>
    </>
  );
}

export default App;
