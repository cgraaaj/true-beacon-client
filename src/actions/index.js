import {GET_HISTORIC_DATA,SET_DATE_RANGE,SET_SYMBOL} from "./types"
import {API} from "../utils/api"
import * as constants from "../utils/constants"

export const getHistoricData =(data)=>async(dispatch,state)=>{

    let response = ""
    console.log(data)
    try{
        response = await API.get(`${constants.FETCH_DATA_API}`,{
            params:data
        })
        console.log(response.data)
        dispatch({
            type:GET_HISTORIC_DATA,
            payload:{data:response.data}
        })
    } catch(err){
        console.log(err)
    }
}

export const setRangeDates = (dates) =>{
    return{
        type:SET_DATE_RANGE,
        payload: dates
    }
}

export const setSymbol= (symbol)=>{
    return{
        type:SET_SYMBOL,
        payload:symbol
    }
}