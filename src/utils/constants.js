// export const 

(()=>{
    console.log(process.env.REACT_APP_ENV)
})()

export const FETCH_DATA_API = process.env.REACT_APP_ENV !== "dev" ? "/api/historical-data" : "/historical-data"
