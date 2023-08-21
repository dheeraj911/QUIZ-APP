import {useState} from 'react'
import {QuizData} from '../Data/QuizData'
import QuizResult from './QuizResult'

function Quiz() {
const [currentQuestion,setCurrentQuestion] = useState(0)
const [score,setScore] = useState(0)
const [option,setOption] = useState(0)
const [result,setResult] = useState(false)


const changeQuestion = ()=>{
    updateScore()
    setOption(0)
    if(currentQuestion < QuizData.length-1){
    setCurrentQuestion(currentQuestion+1)
    
    } else{
        setResult(true)
    }
} 



const updateScore = ()=>{
    if(option===QuizData[currentQuestion].answer){
setScore(score+1)
    }
}

const resetAll = ()=>{
    setResult(false)
    setCurrentQuestion(0)
    setOption(0)
    setScore(0)
}

  return (
    <div>
<p className="heading-txt">QUIZ APP</p>


<div className="container">
{result ? (
<QuizResult 
score={score}
totalScore={QuizData.length} 
reset={resetAll}
/>
):(
    <>
    <div className="question">
        <span id="question-number">{currentQuestion+1} </span>
        <span id="question-txt">{QuizData[currentQuestion].question} </span>
    </div>
    <div className="option-container">

         {QuizData[currentQuestion].options.map((options,i)=>{
           return (<button key={i} 
            className={`option-btn ${
            option==i+1?"checked":null}`} 

            onClick={()=>setOption(i+1)}>
                {options}
            </button>
           )
         })}
        </div>

        <button id='next-button' value="Next" onClick={changeQuestion}>NEXT</button>
        </>)}
</div>

    </div>
  )
}

export default Quiz