import {PLACE_ORDER} from "../actions/types"

const INTIAL_STATE = {
    data:[]
}

const ordersReducer = (state=INTIAL_STATE,action)=>{
    switch(action.type){
        case PLACE_ORDER:
        return{
            ...state,data:action.payload.data
        }
        default:
            return state
    }
}

export default ordersReducer