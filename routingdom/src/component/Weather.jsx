import React, { useState } from 'react'
import Header from '../comman/Header'

export default function Weather() {
    let [city,setCity] = useState('');
    let [weather,setWeather] = useState();
    let [isLoding,setIsLoding] = useState(false);
    let getData = async(event) =>{
        event.preventDefault();
        let api = `http://api.weatherapi.com/v1/current.json?key=c149e8da4d70498d9fd105058241705&q=${city}&aqi=yes`
        // fetch(api).
        // then((data)=>{
        //     return data.json();
        // }).
        // then((result)=>{
        //     console.log(result);
        // })
        setIsLoding(true);
        let result = await fetch(api);
        console.log(result.status);
        if(result.status==200)
        {
            let data = await result.json();
            
            setWeather(data);
            console.log(data);
            console.log(api);
        }
        setIsLoding(false);             
        
    }
  return (
    <div>
        <Header/>
        <h1>Weather</h1>
        <div className="wcontainer">
        <div className="searchValue">
            <div className="input-group mb-3">
                <form onSubmit={getData}>
                    <input type="text" className="border-[2px] border-black rounded-lg h-8 border-solid form-control" placeholder="Enter Place Name" id="place" value={city} onChange={(e)=>setCity(e.target.value)}/>
                    <button className='bg-blue-500 p-3 rounded-full hover:bg-blue-800 hover:text-white' id="search">Submit</button>
                </form>
              </div>
            {/* <!-- <input type="text" id="place" name="place" placeholder=""> --> */}
            
        </div>
        <div className="result card relative" id="result">
        <img width={250} className={`absolute top-0 ${isLoding ? '' : 'hidden'}`} src="https://th.bing.com/th/id/R.8fa41da1f4602b875dfe2ba5a3aff509?rik=CFhqLN6OVxIqkw&riu=http%3a%2f%2fclipart-library.com%2fimages%2f8cEbXkpLi.gif&ehk=dsjAdw1MsUpwICSCUvUW94MFeiU8yCijH1v2U6Dudig%3d&risl=&pid=ImgRaw&r=0" alt="" />
        {weather!==undefined ? 
        <>
            <div className="placeName">
               <h3>
                 {weather.location.name} </h3>
                 <h3>
                 {weather.location.region}/{weather.location.country}
                </h3>
            </div>
            <div className="Details">
                <div className="icon">
                    <img src={`${weather.current.condition.icon}`} alt={weather.current.condition.text}/>
                    <p>{weather.current.condition.text}</p>
                </div>
                <div className="temp">
                    <h1>{weather.current.temp_c}<sup>o</sup>C/{weather.current.temp_f}<sup>o</sup>F</h1>
                </div>
            </div>
            <div className="otherDetails">
                <div className="humdity">
                    <h3>Humidity</h3>
                    <h3>{weather.current.humidity}%</h3>
                </div>
                <div className="wind">
                    <h3>Wind Speed</h3>
                    <h3>{weather.current.wind_kph} km/h</h3>

                </div>
            </div>
            </>
            :
        'No Data'}
        </div> 
    </div>
    </div>
  )
}
