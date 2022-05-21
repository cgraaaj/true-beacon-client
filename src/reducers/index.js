import { combineReducers } from "redux";

import dataReducer from './dataReducer'
import holdingsReducer from "./holdingsReducer";
import ordersReducer from "./ordersReduce";

export default combineReducers({
  data: dataReducer,
  holdings: holdingsReducer,
  orders: ordersReducer
});
