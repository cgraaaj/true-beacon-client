import {GET_HOLDINGS} from "../actions/types"

const INTIAL_STATE = {
    data:[]
}

const holdingsReducer = (state=INTIAL_STATE,action)=>{
    switch(action.type){
        case GET_HOLDINGS:
        return{
            ...state,data:action.payload.data
        }
        default:
            return state
    }
}

export default holdingsReducer