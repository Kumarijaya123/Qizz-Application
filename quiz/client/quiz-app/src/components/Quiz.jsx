/* eslint-disable no-unused-vars */
import React, { useEffect , useState} from 'react';
import './quiz.css';
import Question from './Question';
import { MoveNextQuestion, MovePrevQuestion } from '../hooks/FetchQuestion';
import { PushAnswer } from '../hooks/setResult';


// Redux store import
import { useSelector, useDispatch } from 'react-redux';
import {Navigate} from 'react-router-dom'



function Quiz() {
  const [check, setChecked] = useState(undefined)
  
  const result = useSelector(state => state.result);
  const {queue, trace} = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(result);
  });

  function onNext() {
    console.log('On next click');

    if(trace < queue.length){
    // Update the trace value by one using MoveNextAction
    dispatch(MoveNextQuestion());
    dispatch(PushAnswer(check))
    }
  
  }

    function onPrev(){
      console.log('on prev click')
        if(trace > 0){
            /** decrease the trace value by one using MovePrevQuestion */
            dispatch(MovePrevQuestion());
        }
    }

    function onChecked(check){
        setChecked(check)
    }

    /** finished exam after the last question */
    if(result && result.length >= queue.length){
        return <Navigate to={'/result'} replace={true}></Navigate>
    }


  return (
    <div className='container'>
      <h1 className="titleText">Quiz Application</h1>
      <Question onChecked={onChecked}/>
      <div className="grid">
        <button className='btn-prev' onClick={onPrev}>
          Previous
        </button>
        <button className='btn-next' onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Quiz;
