/* eslint-disable no-unused-vars */
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import './home.css'

function Home() {
  const inputRef = useRef(null)
  return (
    <div className='container'>
      <h1 className='titleText'>Quiz Application</h1>
      <ol>
        <li>You will be asking 30 question one after another</li>
        <li>3 point will be awarded to the correct answer and -1 for incorrect answer</li>
        <li>Each question has three options. You can choose only one option.</li>
        <li>You can review and change answer before the quiz finish.</li>
        <li>The result will declare at the end of the quiz</li>
      </ol>

      <form id="form">
        <input ref={inputRef} className='userid' type="text" placeholder='Username*' />
      </form>
      <div className="start">
        <Link className="btn" to='/quiz' >Start Quiz</Link>
      </div>
    </div>
  )
}

export default Home