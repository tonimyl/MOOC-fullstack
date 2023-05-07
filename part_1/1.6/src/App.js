import { useState } from 'react'

// tämä on oikea paikka määritellä komponentti!
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
const Display = props => <div>{props.text} {props.value}</div>


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  console.log(good)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // älä määrittele komponenttia täällä!
  

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good +1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral +1)} text="Neutral" />
      <Button handleClick={() => setBad(bad +1)} text="Bad" />
      <h1>statistics</h1>
      <Display text="Good:" value={good}/>
      <Display text="Neutral:" value={neutral}/>
      <Display text="Bad:" value={bad}/>
    </div>
  )
}

export default App