const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
        </p>
    </div>
  )
}

const App = () => {

  const name = 'Gristian'
  const age = 29

  return (
    <>
      <h1>Greetings</h1>
      <Hello />
      <Hello name='Gristian' />
      <Hello name={name} age={age} />
    </>
  )
}

/*
const App = () => {
  const friends = [ 'Peter', 'Maya']

  return (
    <div>
      <p>{friends[0]}</p>
    </div>
  )
}

*/

export default App