/* eslint-disable no-unused-vars */
import React from 'react'
import './result.css'
import {Link} from 'react-router-dom'
import ResultTable from './ResultTable'
function Result() {

  function onRestart(){
    console.log('on restart')
  }
  return (
    <div className='container'>
      <h1 className="titleText">Quiz Application</h1>
      <div className="result flex-center">
        <div className="flex">
          <span>Username</span>
          <span className="bold">Daily Challenges</span>
        </div>
        <div className="flex">
          <span>Total Quiz Marks : </span>
          <span className="bold">45</span>
        </div>
        <div className="flex">
          <span>Total Questions : </span>
          <span className="bold">15</span>
        </div>
        <div className="flex">
          <span>Total Attempts : </span>
          <span className="bold">15</span>
        </div>
        <div className="flex">
          <span>Total Earn Points : </span>
          <span className="bold">30</span>
        </div>
        <div className="flex">
          <span>Quiz Result</span>
          <span className="bold">Passed</span>
        </div>
      </div>

      <div className="start">
        <Link className="btn" to={'/'} onClick={onRestart}>Restart</Link>
      </div>

      <div className="container">
        <ResultTable/>
      </div>
    </div>
  )
}

export default Result