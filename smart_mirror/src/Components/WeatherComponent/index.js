
import React, {useState, useEffect} from 'react';
import axios from 'axios'; 

const styleSheet = {
    fontSize:"25px"
}


export default function Weather(){

    const [weather,setWeather] = useState(0); 

    async function ApiCall (){

        const response = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=greenburgh&appid=08a3651a9e0292ac3b723aca179491da");
        let temp = response.data.main.temp; 
        temp = Math.round((9/5)*(temp - 273) + 32);
        setWeather(temp);
    }

    useEffect(function(){
        ApiCall(); 
    },[]); 

    return(
        <div style={styleSheet}>
            <h3>{weather}°</h3>
            <h3>Greenburgh</h3>
        </div>
    )
}