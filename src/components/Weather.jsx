import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';

export const Weather = () => {

    const[weatherData, setWeatherData] = useState();
    const[cityName, setCityName] = useState();

    const API_KEY = '4a881a160704c7164024b3afedafd82b';
    const city_name = 'Rome'

    useEffect(()=>{
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Haora&appid=${API_KEY}`)
        .then(response => {
            // setWeatherData(response.data);
            console.log(response.data);
        })
        .catch(error=>{
            console.error("Error: ", error);
        })
    },[])


    return(
        <>
            <h1>HEllo</h1>         
        </>
    )
        


//   return (
    
//     <div>Weather</div>
    
//   )
}
