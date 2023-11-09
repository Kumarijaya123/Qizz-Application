/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

// Custom Hook
import { useFetchQuestion } from '../hooks/FetchQuestion';
import { useSelector } from 'react-redux';

function Question({onChecked}) {
  const [checked, setChecked] = useState(undefined)
  const [{ isLoading, apiData, serverError }] = useFetchQuestion();

  const questions = useSelector(state => state.questions.queue[state.questions.trace]);
  const dispatch = useDispatch();

  // Ensure you are correctly getting data from the Redux store
  const trace = useSelector(state => state.questions.trace);
  
  useEffect(() => {

  })
  function onSelect(i) {
    onChecked(i)
  }

  if (isLoading) {
    return <h3 className="text-light">isLoading</h3>;
  }

  if (serverError) {
    return <h3 className="text-light">{serverError || 'Unknown Error'}</h3>;
  }

  return (
    <div className="questions">
      <h2 className="text-light">{questions?.question}</h2>
      <ul key={questions?.id}>
        {questions && questions.options && questions.options.map((q, i) => (
          <li key={i}>
            <input
              type="radio"
              value={false}
              name="options"
              id={`q${i}-option`}
              onChange={() => onSelect(i)} // Pass a function reference
            />
            <label className="text-primary" htmlFor={`q${i}-option`}>{q}</label>
            <div className="check"></div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question;
