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
    <p>Number of courses {props.exercise1 + props.exercise2 + props.exercise3}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  console.log(parts[0])

  return (
    <div>
      <Header course={course} />
      <Content part1={parts[0].name} part2={parts[1].name} part3={parts[2].name} exercise1={parts[0].exercises} exercise2={parts[1].exercises} exercise3={parts[2].exercises}/>
      <Total exercise1={parts[0].exercises} exercise2={parts[1].exercises} exercise3={parts[2].exercises} />
    </div>
  )
}

export default App