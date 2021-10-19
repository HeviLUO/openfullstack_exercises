import React, { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.content}</button>
  )
}

const Anecdote = (props) => {
  return (
    <div>
      <p>{props.content}</p>
      <p>has {props.votes} votes</p>
    </div>
  )
}

const Title = (props) => {
  return (
    <h1>{props.content}</h1>
  )
}

const App = () => {   
  const [selected, setSelected] = useState(0)
  const [most, setMost] = useState(0)
  const [mostVotes, setMostVotes] = useState(0)
  const [anecdotes, setAnecdots] = useState([
    {
      content: 'If it hurts, do it more often',
      votes: 0
    },
    {
      content: 'Adding manpower to a late software project makes it later!',
      votes: 0
    },
    {
      content: 'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      votes: 0
    },
    {
      content: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      votes: 0
    },
    {
      content: 'Premature optimization is the root of all evil.',
      votes: 0
    },
    {
      content: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      votes: 0
    },
    {
      content: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
      votes: 0
    }
  ])

  return (
    <div>
      <Title content="Anecdot of the day"/>
      <Anecdote content={anecdotes[selected].content} votes={anecdotes[selected].votes}/>
      <Button content="vote" onClick={()=>{
        const copy = { ...anecdotes }
        copy[selected].votes++
        setAnecdots(copy)
        if (copy[selected].votes > mostVotes) {
          setMostVotes(copy[selected].votes)
          setMost(selected)
        }
      }}/>
      <Button content="next anecdote" onClick={()=>{
        setSelected(parseInt(Math.random()*7, 10))
      }}/>
      <Title content="Anecdot with most votes"/>
      <Anecdote content={anecdotes[most].content} votes={anecdotes[most].votes}/>
    </div>
  )
}

export default App
