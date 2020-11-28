import React, { useState } from "react"
import ReactDOM from "react-dom"

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const App = (props) => {
  const anectodesLength = props.anecdotes.length
  const [selected, setSelected] = useState(0)
  const [randomNum, setRandomNum] = useState(0)
  const [votesArr, setVotes] = useState((new Array(anectodesLength)).fill(0))

  const changeAnecdote = () => {
    let tempRand = Math.floor(Math.random() * anectodesLength)
    
    while (tempRand === randomNum) {
      tempRand = Math.floor(Math.random() * anectodesLength)
    } 

    setRandomNum(tempRand)
    setSelected(randomNum)
  }

  const voteAnecdote = () => {
    let copyVotes = [...votesArr]
    copyVotes[selected]++
    setVotes(copyVotes)
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{props.anecdotes[selected]}</p>
      <p>has {votesArr[selected]} votes</p>
      <Button onClick={changeAnecdote} text="next anecdote" />
      <Button onClick={voteAnecdote} text="vote" />

      <h2>Anecdote with most votes</h2>
      <p>{props.anecdotes[votesArr.indexOf(Math.max(...votesArr))]}</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById("root")
)