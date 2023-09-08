import axios from "axios";
import {log} from "util";


const getCurrentDate = ()=>{
   return  axios.get("https://www.google.com")
        .then((data)=> {
            return  data.headers
        })
        .then((data)=> {
            return  data.date
        })
}

getCurrentDate()
    .then(date=> console.log(date))
