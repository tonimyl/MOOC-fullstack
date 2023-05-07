import { useState } from 'react'

// tämä on oikea paikka määritellä komponentti!
const Button = (props) => (
  <button onClick={props.handleClick}>
  {props.text}
</button>
)

const ButtonLine = (props) => (
  <div>
    <Button handleClick={() => props.setGood(props.good + 1)} text="Good" />
    <Button handleClick={() => props.setNeutral(props.neutral + 1)} text="Neutral" />
    <Button handleClick={() => props.setBad(props.bad + 1)} text="Bad" />
  </div>
)

const Statistics = props => (
  <div>
    <StatisticLine text="Good:" value={props.good}/>
    <StatisticLine text="Neutral:" value={props.neutral}/>
    <StatisticLine text="Bad:" value={props.bad}/>
    <StatisticLine text="all" value={props.total} />
    <StatisticLine text="average" value={props.average} />
    <StatisticLine text="positive" value={props.positive} />
  </div>
)

const StatisticLine = (props) => (
  <div>{props.text} {props.value}</div>
)



const App = () => {
  const [good, setGood] = useState(0)
  console.log(good)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad
  const average = ((good - bad) / total).toFixed(1)
  const positive = ((good / total) * 100).toFixed(1) + ' %'
  const notEmpty = () => {
    if (good > 0 || neutral > 0 || bad > 0) {
      return true;
    }
    return false;
  }

  console.log(StatisticLine)
  return (
    <div>
      <b>
      <h1>Give Feedback</h1>
        <ButtonLine setGood={setGood} setNeutral={setNeutral} setBad={setBad} good={good} neutral={neutral} bad={bad} />
        <h1>statistics</h1>
        {notEmpty() ? (
        <>
        <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive} />
        </>
        ) : <p>no feedback given</p>}
      </b>
    </div>
  )
}

export default App