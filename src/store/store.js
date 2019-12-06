import { createStore, applyMiddleware } from "redux";
import rootReducer from "../redux";
import createSagaMiddleware from 'redux-saga';
import { put, call, takeEvery } from 'redux-saga/effects';
import {
    startTimer,
    stopTimer,
    resetTimer,
    runTimer,
    startBreak,
    autoStartTimer
} from "../redux/actions";

// Sagas
function* watchUserClickStart() {
  yield takeEvery(stopTimer, trackStartTimeToLocalStorge);
}

const localStorageKey = 'user'
function* trackStartTimeToLocalStorge() {
	try {
	    let getArr = localStorage.getItem(localStorageKey);
        if(getArr == null)
            getArr = [];
        else
            getArr = JSON.parse(getArr);
        // HOW TO GET CURRENT STATE ??????
        const currentState = {
        	url: '',
			loading: false,
			error: false,
        }
        getArr.push(currentState);
        localStorage.setItem(localStorageKey, JSON.stringify(getArr));
        console.log(localStorage.getItem(localStorageKey));
	} catch (error) {
	    //
	}
}

const sagaMiddleware = createSagaMiddleware();

export default createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(watchUserClickStart);


//CREATE STORE
/*export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
*/