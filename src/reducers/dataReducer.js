import {
    GET_HISTORIC_DATA,
    SET_DATE_RANGE,
    SET_SYMBOL,
    SET_MODAL
  } from "../actions/types";
  
  const INTIAL_STATE = {
    historicData:[],
    selectedDateRange:{},
    symbols:[{
      text:"Nifty 50",
      value: "nifty_50"
    },
    {
      text:"Bank Nifty",
      value: "bank_nifty"
    }],
    selectedSymbol:'',
    modal: {
      flag: false,
      userProfile:{}
    },
  };
  
  const dataReducer = (state = INTIAL_STATE, action) => {
    switch (action.type) {
      case GET_HISTORIC_DATA:
        return {
          ...state,
          historicData:[...action.payload.data]
        };
      case SET_DATE_RANGE:
        let d = new Date()
        const offset = d.getTimezoneOffset()
        let startDate = new Date(action.payload.startDate.getTime() - (offset*60*1000)).toISOString().split('T')[0]
        let endDate = new Date(action.payload.endDate.getTime() - (offset*60*1000)).toISOString().split('T')[0]
        console.log(startDate,endDate)
        return{
          ...state,
          selectedDateRange:{startDate,endDate}
          // selectedDateRange:action.payload
        }
      case SET_SYMBOL:
        console.log(action)
        return{
          ...state,
          selectedSymbol:action.payload
        }
      case SET_MODAL:
        return {
          ...state,
          modal: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default dataReducer;
  