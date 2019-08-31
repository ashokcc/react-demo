import { combineReducers } from 'redux'
import CommonReducer from './commonReducer';

const rootReducer = combineReducers({
    users: CommonReducer
});

export default rootReducer;