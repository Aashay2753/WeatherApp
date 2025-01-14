import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){

    const[weatherInfo , setWeatherInfo] = useState({
        city:"Pune",
        feelsLike: 31.66,
        humidity: 27,
        temp: 33.05,
        tempMax: 33.05,
        tempMin: 33.05,
        weather: "haze",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return(
        <div>
            <h2>Weather app by Aashay</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}