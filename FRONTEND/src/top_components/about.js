import '../styles/admin.css'
import '../styles/range-slider.scss'
var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouterDOM = require('react-router-dom');
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  const [gameEvents, setGameEvents] = useState([]);
  const [newDate, setNewDate] = useState(new Date());
  const [year, setYear] = useState()
  const [month, setMonth] = useState()
  const [day, setDay] = useState()

  useEffect(() => {
    if (localStorage.getItem("DATE DATA")) {
      setGameEvents(JSON.parse(localStorage.getItem("DATE DATA")))
}
}, [])

// run every time the jobApps state changes
useEffect(() => {
  localStorage.setItem("DATA DATA", JSON.stringify(gameEvents))
}, [gameEvents]);
  // const [year, setYear] = useState(newDate.getFullYear())
  // const [month, setMonth] = useState(newDate.getMonth())
  // const [day, setDay] = useState(newDate.getDay())
  console.log(newDate.getFullYear())
  return(
  <>
    <CalendarSchedule newDate={newDate} setNewDate={setNewDate} gameEvents={gameEvents} setGameEvents={setGameEvents} />
  </>
  )
}


function CalendarSchedule(props) {
let GameDate = props.newDate

  const [year, setYear] = useState(GameDate.getFullYear())
  const [month, setMonth] = useState(GameDate.getMonth())
  const [day, setDay] = useState(GameDate.getDay())

  console.log(year)
  console.log(month)
  console.log(day)

function handleSubmit(e) {
  e.preventDefault()
  props.setNewDate(new Date(year, month, day))
  props.setGameEvents(prev => prev.concat({year, month, day, id: Date.now()}))

  console.log("GAME EVENTS ARRAY")
  console.log(props.gameEvents)
  setYear("")
  setMonth("")
  setDay("")

}
console.log(props.gameEvents)
  return(
  <>
    <div className='container-fluid gx-0 p-0 pt-5 m-0'>
      <p>ABOUT</p>
      </div>

    
    

  </>
)}

//