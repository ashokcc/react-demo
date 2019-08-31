import { SUBMIT_USER, EDIT_USER} from './actionTypes';

export const submitUser = (props)=>{
    return (dispatch) =>{
        try{
            dispatch({type:SUBMIT_USER, payload:props});
        }catch(error){
            dispatch({type:SUBMIT_USER, payload:error});
        }
    };
};
export const editUser = (props)=>{
    return (dispatch) =>{
        try{
            dispatch({type:EDIT_USER, payload:props});
        }catch(error){
            dispatch({type:EDIT_USER, payload:error});
        }
    };
};
