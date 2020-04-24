import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ name }) => {
  return (
    < h1 > {name} </h1>
  )

}
const Part = ({ part, exercises }) => {
  return (<p>{part} {exercises}</p>)
}

const Content = ({ parts }) => {
  return (
    parts.map((d, i) => (<Part key={i} part={d.name} exercises={d.exercises} />))
  )
}

const Total = ({ parts }) => {

  return (
    <div>
      <p>Number of exercises {parts.map((d) => d.exercises).reduce((a, n) => a + n)}</p>
    </div>
  )

}

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      { name: 'Fundamentals of React', exercises: 10 },
      { name: 'Using props to pass data', exercises: 7 },
      { name: 'State of a component', exercises: 14 }
    ]
  }

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>)
}

ReactDOM.render(<App />, document.getElementById('root'))


