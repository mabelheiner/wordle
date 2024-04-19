import { useEffect, useState } from 'react'
import './App.css'
import Guess from './Guess'

function App() {
  const [answer, setAnswer] = useState('')

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

  return (
    <>
      <h1>Wordle</h1>
      <Guess answer={answer}/>
      <Guess answer={answer}/>
      <Guess answer={answer}/>
      <Guess answer={answer}/>
      <Guess answer={answer}/>
    </>
  )
}

export default App
