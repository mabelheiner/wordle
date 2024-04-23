import React, { useEffect, useState, useRef } from 'react'
import './Guess.css'

const Guess = (props) => {
    const [answer, setAnswer] = useState('')
    const [guess, setGuess] = useState('')
    const [readOnly, setReadOnly] = useState(false)
    const [letter1, setLetter1] = useState('')
    const [letter2, setLetter2] = useState('')
    const [letter3, setLetter3] = useState('')
    const [letter4, setLetter4] = useState('')
    const [letter5, setLetter5] = useState('')

    const input1 = useRef(null)
    const input2 = useRef(null)
    const input3 = useRef(null)
    const input4 = useRef(null)
    const input5 = useRef(null)

    useEffect(() => {
      console.log('Props received', props)
      setAnswer(props.answer)
      setGuess(props.guessNumber)
    }, [])

    function handleSubmit(e) {
      e.preventDefault()
      setReadOnly(true)
      console.log('Event handled')
  }

    function changeLetter1(e) {
      setLetter1(e.target.value)
      if (e.target.value != "")
        input2.current.focus()
      else
        input1.current.focus()
    }

    function changeLetter2(e) {
      setLetter2(e.target.value)
      if (e.target.value != "")
        input3.current.focus()
      else
        input1.current.focus()
    }

    function changeLetter3(e) {
      setLetter3(e.target.value)
      if (e.target.value != "")
        input4.current.focus()
      else
        input2.current.focus()
    }

    function changeLetter4(e) {
      setLetter4(e.target.value)
      if (e.target.value != "")
        input5.current.focus()
      else
        input3.current.focus()
    }

    function changeLetter5(e) {
      setLetter5(e.target.value)
      if (e.target.value == "")
        input4.current.focus()
    }

  return (
    <>
    <h2>Word to guess: {guess}</h2>
    <form>
        <input type="text" name="first" id="first" ref={input1} maxLength={1} readOnly={readOnly} onChange={changeLetter1}/>
        <input type="text" name="second" id="second" ref={input2} maxLength={1} readOnly={readOnly} onChange={changeLetter2}/>
        <input type="text" name="third" id="third" ref={input3} maxLength={1} readOnly={readOnly} onChange={changeLetter3}/>
        <input type="text" name="fourth" id="fourth" ref={input4} maxLength={1} readOnly={readOnly} onChange={changeLetter4}/>
        <input type="text" name="fifth" id="fifth" ref={input5} maxLength={1} readOnly={readOnly} onChange={changeLetter5}/>
        <button onClick={handleSubmit}>Guess</button>
    </form>
    </>
  )
}

export default Guess