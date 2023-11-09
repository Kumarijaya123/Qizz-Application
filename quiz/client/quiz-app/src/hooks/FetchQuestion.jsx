// fetch question hook to fetch API data and set the value to the store

import { useEffect, useState } from "react";
import data from '../database/data';
import { useDispatch } from 'react-redux';

// Redux action
import * as Action from '../redux/quest_reducer';

export const useFetchQuestion = () => {
    const dispatch = useDispatch();
    const [getData, setGetData] = useState({
        isLoading: false,
        apiData: [],
        serverError: null
    });

    useEffect(() => {
        setGetData((prev) => ({ ...prev, isLoading: true }));

        // Use an async function to fetch backend data
        (async () => {
            try {
                let question = await data;
                if (question.length > 0) {
                    setGetData((prev) => ({ ...prev, isLoading: false }));
                    setGetData((prev) => ({ ...prev, apiData: question }));

                    // Dispatch an action
                    dispatch(Action.startExamAction(question));
                } else {
                    throw new Error('No question');
                }
            } catch (error) {
                setGetData((prev) => ({ ...prev, isLoading: false, serverError: error }));
                setGetData((prev) => ({ ...prev, serverError: error }));
            }
        })();
    }, [dispatch]);

    return [getData, setGetData];
};

// move action dispatch function
export const MoveNextQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.moveNextAction())  // increae the trace value by 1

    } catch(error){
        console.log(error)
    }
}

// prevAction  dispatch function
export const MovePrevQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.movePrevAction())  //  decreace the trace value by 1

    } catch(error){
        console.log(error)
    }
}