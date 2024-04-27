import React, { useEffect, useState, useRef, cloneElement } from 'react'
import './Guess.css'

const Guess = (props) => {
    const [answer, setAnswer] = useState('')
    const [guess, setGuess] = useState('')
    const [disable, setDisable] = useState(true)
    const [error, setError] = useState(false)
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
    const messageButton = useRef(null)

    useEffect(() => {
      input1.current.focus()
      setAnswer(props.answer)
      setGuess(props.guessNumber)

      if (props.guessNumber != props.currGuess) {
        setDisable(true)
      }
      else {
        setDisable(false)
      }      
    }, [])

    function handleWordMessage(e) {
      e.preventDefault()
      messageButton.current.style.display = 'none'
      setError(false)
    }

    async function handleSubmit(e) {
      e.preventDefault()
      const guessWord = input1.current.value + input2.current.value + input3.current.value + input4.current.value + input5.current.value

      try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${guessWord}`)
        const data = await response.json()

        if (data.title == 'No Definitions Found'){
          setError(true)
          return
        }
      } catch (error) {
          setError(true)
          return
      }


      setDisable(true)
      
      let solution = answer

      if (guessWord == answer){
        props.onWinChange(true)
      }

      if (input1.current.value == answer[0]){
        input1.current.style.backgroundColor = 'green'
        solution = solution.replace(answer[0], " ")
      }

      if (input2.current.value == answer[1]){
        input2.current.style.backgroundColor = 'green'
        solution = solution.replace(answer[1], " ")
      }      

      if (input3.current.value == answer[2]){
        input3.current.style.backgroundColor = 'green'
        solution = solution.replace(answer[2], " ")
      }      

      if (input4.current.value == answer[3]){
        input4.current.style.backgroundColor = 'green'
        solution = solution.replace(answer[3], " ")
      }

      if (input5.current.value == answer[4]){
        input5.current.style.backgroundColor = 'green'
        solution = solution.replace(answer[4], " ")
      }

      if (solution.includes(input1.current.value)){
        input1.current.style.backgroundColor = 'goldenrod'
        solution = solution.replace(input1.current.value, " ")
      }

      if (solution.includes(input2.current.value)){
        input2.current.style.backgroundColor = 'goldenrod'
        solution = solution.replace(input2.current.value, " ")
      }

      if (solution.includes(input3.current.value)){
        input3.current.style.backgroundColor = 'goldenrod'
        solution = solution.replace(input3.current.value, " ")
      }
      
      if (solution.includes(input4.current.value)){
        input4.current.style.backgroundColor = 'goldenrod'
        solution = solution.replace(input4.current.value, " ")
      }

      if (solution.includes(input5.current.value)){
        input5.current.style.backgroundColor = 'goldenrod'
        solution = solution.replace(input5.current.value, " ")
      }

      props.onCurrGuessChange(props.currGuess + 1)
  }

    function changeLetter1(e) {
      setLetter1(e.target.value)
      if (e.target.value != "" && e.code != 'Backspace')
        input2.current.focus()
      else if (e.target.value == "" && e.code == 'Backspace')
        input1.current.focus()
    }

    function changeLetter2(e) {
      setLetter2(e.target.value)
      if (e.target.value != "" && e.code != 'Backspace')
        input3.current.focus()
      else if (e.target.value == "" && e.code == 'Backspace')
        input1.current.focus()
    }

    function changeLetter3(e) {
      setLetter3(e.target.value)
      if (e.target.value != "" && e.code != 'Backspace')
        input4.current.focus()
      else if (e.target.value == "" && e.code == 'Backspace')
        input2.current.focus()
    }

    function changeLetter4(e) {
      setLetter4(e.target.value)
      if (e.target.value != "" && e.code != 'Backspace')
        input5.current.focus()
      else if (e.target.value == "" && e.code == 'Backspace')
        input3.current.focus()
    }

    function changeLetter5(e) {
      setLetter5(e.target.value)
      if (e.target.value == "" && e.code == 'Backspace')
        input4.current.focus()
    }

  return (
    <>
    {error ? <button className='message' ref={messageButton} onClick={handleWordMessage}>Word not found in word list</button> : <p></p>}
    <form>
        <input type="text" name="first" id="first" ref={input1} maxLength={1} onKeyDown={changeLetter1} {...(props.guessNumber === props.currGuess ? {} : { disabled: true })}/>
        <input type="text" name="second" id="second" ref={input2} maxLength={1} onKeyDown={changeLetter2} {...(props.guessNumber === props.currGuess ? {} : { disabled: true })}/>
        <input type="text" name="third" id="third" ref={input3} maxLength={1} onKeyDown={changeLetter3} {...(props.guessNumber === props.currGuess ? {} : { disabled: true })}/>
        <input type="text" name="fourth" id="fourth" ref={input4} maxLength={1} onKeyDown={changeLetter4} {...(props.guessNumber === props.currGuess ? {} : { disabled: true })}/>
        <input type="text" name="fifth" id="fifth" ref={input5} maxLength={1} onKeyDown={changeLetter5} {...(props.guessNumber === props.currGuess ? {} : { disabled: true })}/>
        <button onClick={handleSubmit}>Guess</button>
    </form>
    </>
  )
}

export default Guess