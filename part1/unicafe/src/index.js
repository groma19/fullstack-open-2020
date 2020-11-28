import React, { useState } from "react"
import ReactDOM from "react-dom"

const Button = (props) => (
  <button onClick={props.onClick} name={props.name}>
    {props.text}
  </button>
)

const Statistic = (props) => (
  <tr>
    <td>{props.text} </td>
    <td>{props.value}</td>
  </tr>
)

const Statistics = (props) => {
  const {good, neutral, bad} = props.stats
  const all = good + neutral + bad
  const average = (1*good + 0*neutral - 1*bad) / all
  const positivePerc = good/all + " %"

  if (all === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <div>
      <table>
        <thead></thead>
        <tbody>
          <Statistic text="good"     value={good} />
          <Statistic text="neutral"  value={neutral} />
          <Statistic text="bad"      value={bad} />
          <Statistic text="all"      value={all} />
          <Statistic text="average"  value={average} />
          <Statistic text="positive" value={positivePerc} />
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (e) => {
    switch (e.target.name) {
      case "goodInc":
        setGood(good + 1)
        break
      case "neutralInc":
        setNeutral(neutral + 1)
        break
      case "badInc":
        setBad(bad + 1)
        break
      default:
        break
    }
  }

  const stats = {
    "good": good,
    "neutral": neutral,
    "bad": bad
  }

  return (
    <div>
      <div id="controls">
        <h2>give feedback</h2>
        <Button 
          onClick={handleClick} name="goodInc" text="good" 
        />

        <Button 
          onClick={handleClick} name="neutralInc" text="neutral" 
        />

        <Button 
          onClick={handleClick} name="badInc" text="bad" 
        />
      </div>
      <div id="stats">
        <h2>Statistics</h2>
        <Statistics stats={stats} />
      </div>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById("root"))