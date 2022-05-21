import {
  GET_HISTORIC_DATA,
  SET_DATE_RANGE,
  SET_SYMBOL,
  GET_HOLDINGS,
  PLACE_ORDER,
  SET_MODAL
} from "./types";
import { API } from "../utils/api";
import * as constants from "../utils/constants";

export const getHistoricData = (data) => async (dispatch, state) => {
  let response = "";
  console.log(data);
  try {
    response = await API.get(`${constants.FETCH_DATA_API}`, {
      params: data,
    });
    console.log(response.data);
    dispatch({
      type: GET_HISTORIC_DATA,
      payload: { data: response.data },
    });
  } catch (err) {
    console.log(err);
  }
};

export const setRangeDates = (dates) => {
  return {
    type: SET_DATE_RANGE,
    payload: dates,
  };
};

export const setSymbol = (symbol) => {
  return {
    type: SET_SYMBOL,
    payload: symbol,
  };
};

export const getHoldings = () => async (dispatch) => {
  let response = "";
  try {
    response = await API.get(`${constants.GET_HOLDINGS}`);
    console.log(response.data);
    dispatch({
      type: GET_HOLDINGS,
      payload: { data: response.data.data },
    });
  } catch (err) {
    console.log(err);
  }
};

export const placeOrder = (orderData) => async (dispatch) => {
  let response = "";
  console.log(orderData)
  try {
    response = await API.get(`${constants.PLACE_ORDER}`);
    console.log(response.data);
    dispatch({
      type: PLACE_ORDER,
      payload: { data: response.data.data },
    });
  } catch (err) {
    console.log(err);
  }
};

export const setModal = (modal) => {
    return {
      type: SET_MODAL,
      payload: modal,
    };
  };
  