import { useEffect, useState } from 'react'
import './App.css'
import Guess from './Guess'

function App() {
  const [answer, setAnswer] = useState('')
  const [win, setWin] = useState(false)

  const handleWin = (winResult) => {
    setWin(winResult)
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
      <Guess answer={answer} guessNumber={1} win={win} onWinChange={handleWin}/>
      <Guess answer={answer} guessNumber={2} win={win} onWinChange={handleWin}/>
      <Guess answer={answer} guessNumber={3} win={win} onWinChange={handleWin}/>
      <Guess answer={answer} guessNumber={4} win={win} onWinChange={handleWin}/>
      <Guess answer={answer} guessNumber={5} win={win} onWinChange={handleWin}/>
      {win ? <h1>You won!</h1> : <h1>No win yet</h1>}
    </>
  )
}

export default App
