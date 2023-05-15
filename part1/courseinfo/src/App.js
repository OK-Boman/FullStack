const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  //Header

  const Header = (props) => {
    return (
      <>
        <h2>
          Welcome to Kristians FullStack submissions
        </h2>
      </>
    )
  }

  //Content

  const Content = (props) => {
    return (
      <>
        <p> {part1} {exercises1}</p> 
        <p> {part2} {exercises2}</p>
        <p> {part3} {exercises3}</p>
      </>
    )
  }

  //Total


  const Total = (props) => {
    return (
      <>
        <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
      </>
    )
  }

  //The actual page (JSX)

  return (
    <div>
      <Header course={course}/>
      <Content/>
    </div>
  )
}


export default App;
