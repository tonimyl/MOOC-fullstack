const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.part} {props.excercise}</p>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part part={props.part1} excercise={props.exercise1}/>
      <Part part={props.part2} excercise={props.exercise2}/>
      <Part part={props.part3} excercise={props.exercise3}/>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
    <p>Number of exercices {props.exercise1 + props.exercise2 + props.exercise3}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} exercise1={exercises1} exercise2={exercises2} exercise3={exercises3} />
      <Total exercise1={exercises1} exercise2={exercises2} exercise3={exercises3}/>
    </div>
  )
}

export default App