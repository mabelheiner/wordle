import React, { useState } from 'react'

const Guess = (props) => {
    const [answer, setAnswer] = useState(props.answer)
    const [guess, setGuess] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
    }
  return (
    <>
    <h2>Word to guess: {answer}</h2>
    <form>
        <input type="text" name="first" id="first" />
        <input type="text" name="second" id="second" />
        <input type="text" name="third" id="third" />
        <input type="text" name="fourth" id="fourth" />
        <input type="text" name="fifth" id="fifth" />
        <button onClick={handleSubmit}>Guess</button>
    </form>
    </>
  )
}

export default Guess