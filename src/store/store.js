import { createStore } from 'redux';
import Issuedata from "../issues.json"

function issueReducer(state = Issuedata) { 
    return state
}

const store = createStore(issueReducer);

export default store;