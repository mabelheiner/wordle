import { useEffect, useState } from 'react'
import './App.css'
import Guess from './Guess'

function App() {
  const [answer, setAnswer] = useState('')
  const [win, setWin] = useState(false)
  const [currGuess, setCurrGuess] = useState(1)

  const handleWin = (winResult) => {
    setWin(winResult)
  }

  const handleGuessChange = (guess) => {
    setCurrGuess(guess)
  }

  async function getWord() {
    try {
      const response = await fetch("https://random-word-api.vercel.app/api?words=1&length=5")
      const data = await response.json()
      const solution = data[0]
      console.log("New word", solution)
      setAnswer(solution)
    }
    catch (error) {
        console.log("unable to fetch word", error.message)
    }
  }

  useEffect(() => {
    getWord()
  }, [])

  while (answer == '') {
    return (
      <>
      <h1>Loading...</h1>
      </>
    )
  }

  return (
    <>
      <h1>Wordle</h1>
      <p>Current guess: {currGuess}</p>
      <Guess answer={answer} guessNumber={1} currGuess={currGuess} onCurrGuessChange={handleGuessChange} win={win} onWinChange={handleWin}/>
      <Guess answer={answer} guessNumber={2} currGuess={currGuess} onCurrGuessChange={handleGuessChange} win={win} onWinChange={handleWin}/>
      <Guess answer={answer} guessNumber={3} currGuess={currGuess} onCurrGuessChange={handleGuessChange} win={win} onWinChange={handleWin}/>
      <Guess answer={answer} guessNumber={4} currGuess={currGuess} onCurrGuessChange={handleGuessChange} win={win} onWinChange={handleWin}/>
      <Guess answer={answer} guessNumber={5} currGuess={currGuess} onCurrGuessChange={handleGuessChange} win={win} onWinChange={handleWin}/>
      {win ? 
      <>
        <h1>You won!</h1>
      </> 
      : 
      <h1></h1>}
    </>
  )
}

export default App
