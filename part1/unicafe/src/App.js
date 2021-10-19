import React, { useState } from 'react'

const Title = (props) => {
  return <h1>{props.content}</h1>
}

const Button = (props) => {
  return <button onClick={()=>{
    props.setFunc(props.originValue + 1)
  }} >{props.content}</button>
}

const StatisticLine = (props) => {
  return <tr><td>{props.name}</td><td>{props.value}</td></tr>
}

const Statistics = (props) => {
  if (props.good + props.neutral + props.bad == 0) {
    return (
      <p1>No feedback given.</p1>
    )
  } else {
    return(
      <div>
        <table>
        <StatisticLine name="good" value={props.good}/>
        <StatisticLine name="neutral" value={props.neutral}/>
        <StatisticLine name="bad" value={props.bad}/>
        <StatisticLine name="all" value={props.good + props.neutral + props.bad}/>
        <StatisticLine name="average" value={(props.good - props.bad) / (props.good + props.neutral + props.bad)}/>
        <StatisticLine name="positive" value={props.good / (props.good + props.neutral + props.bad) * 100 + "%"}/>
        </table>
      </div>
    )
  }
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Title content="give feedback"/>
      <Button content="good" setFunc={setGood} originValue={good} />
      <Button content="neutral" setFunc={setNeutral} originValue={neutral} />
      <Button content="bad" setFunc={setBad} originValue={bad} />
      <Title content="statistics"/>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
