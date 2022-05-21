// export const 

(()=>{
    console.log(process.env.REACT_APP_ENV)
})()

export const FETCH_DATA_API = process.env.REACT_APP_ENV !== "dev" ? "/api/historical-data" : "/historical-data"
export const GET_HOLDINGS = process.env.REACT_APP_ENV !== "dev" ? "/api/portfolio/holdings" : "/portfolio/holdings"
export const PLACE_ORDER = process.env.REACT_APP_ENV !== "dev" ? "/api/order/place_order" : "/order/place_order"
