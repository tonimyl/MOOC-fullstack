import { useState } from 'react'

// tämä on oikea paikka määritellä komponentti!
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
const Display = props => <div>{props.text} {props.value}</div>

const Statistics = props => <div>{props.text} {props.value}</div>

const App = () => {
  const [good, setGood] = useState(0)
  console.log(good)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad
  const average = (good - bad) / total
  const positive = (good / total) * 100
  
  const notEmpty = () => {
    if (good > 0 || neutral > 0 || bad > 0) {
      return true;
    }
    return false;
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good +1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral +1)} text="Neutral" />
      <Button handleClick={() => setBad(bad +1)} text="Bad" />
      <h1>statistics</h1>
      {notEmpty() ? (
        <>
          <Display text="Good:" value={good}/>
          <Display text="Neutral:" value={neutral}/>
          <Display text="Bad:" value={bad}/>
          <Statistics text="All:" value={total}/>
          <Statistics text="Average:" value={average}/>
          <Statistics text="Positive:" value={positive+"%"}/>
        </>
      ) : <p>no feedback given</p>}
    </div>
  )
}

export default App