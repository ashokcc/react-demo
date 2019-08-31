import {
    EDIT_USER,
    SUBMIT_USER
} from '../actions/actionTypes';

const initialState = {
    users: [
        {id: 1, fname:'Alvin', lname: 'Eclair', email:'Alvin.Eclair@gmail.com', phone: '123456', gender:'Male'},
        {id: 2,fname:'Ashok', lname: 'c', email:'ashokchoudhari072@gmail.com', phone: '7891011', gender:'Male'}
    ],
    user: {
        fname:'',
        lname:'',
        phone:'',
        email:'',
        gender:'',
        id: ''
    }
}
const CommonReducer = (state = initialState, action)=>{

    switch(action.type){
        case EDIT_USER:
            return {
                ...state,
                user: action.payload
            };
        case SUBMIT_USER:
            return {
                ...state,
                user: action.payload,
                users: state.users.concat(action.payload)
            };
        default:
            return state;
    }

}

export default CommonReducer;