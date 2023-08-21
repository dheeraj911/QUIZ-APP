import React from 'react'

function QuizResult(props) {
  return (
    <>
    <div className='show-score'>
      <p>Your Score : {props.score}</p>
      <p>Total Score : {props.totalScore}</p>
    </div>
    <button id='next-button' onClick={props.reset}>TRY AGAIN</button>
    </>
  )
}

export default QuizResult