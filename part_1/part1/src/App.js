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
  const [anecdotes, setAnecdotes] = useState([
    {text: 'If it hurts, do it more often.', votes: 0 },
    {text: 'Adding manpower to a late software project makes it later!', votes: 0},
    {text: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', votes: 0 },
    {text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', votes: 0 },
    {text: 'Premature optimization is the root of all evil.', votes: 0},
    {text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', votes: 0 },
    {text: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.', votes: 0 },
    {text: 'The only way to go fast, is to go well.', votes: 0}
  ])
  const maxVotesi = anecdotes.reduce((iMax, anecdotes, i, arr) => anecdotes.votes > arr[iMax].votes ? i: iMax, 0)
  const [selected, setSelected] = useState(0)
  console.log(selected)
  const anecdoteHandler = () => {
    const random = Math.floor(Math.random() * anecdotes.length)
    setSelected(random)
  }
  const voteHandler = () => {
    const newAnecdotes = anecdotes.map((anecdote, index) => {
      if (index === selected) {
        return {...anecdote, votes: anecdote.votes +1}
      } else {
        return anecdote
      }})
    setAnecdotes(newAnecdotes)
  }
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
      <br></br>
      <button onClick={anecdoteHandler}>Random anecdote</button>
      <button onClick={voteHandler}>Vote</button>
      <div>{anecdotes[selected].text} Votes:{anecdotes[selected].votes}</div>
      <h1>Anecdote with most votes</h1>
      <div>{anecdotes[maxVotesi].text}</div>
    </div>
  )
}

export default App