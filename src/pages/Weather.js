import React, { useEffect, useState } from "react";
import cloudlogo from "../assets/clouds logo.png";
import flaglogo from "../assets/flag logo.png";
import humiditylogo from "../assets/humidity logo.png";
import windlogo from "../assets/wind logo.png";

const Weather = () => {
  const [current_location, setCurrentLocation] = useState("Rajpura");
  const [current_weather, setCurrentWeather] = useState("");
  const [temprature, setTemprature] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [Humidity, setHumidity] = useState("");
  const [clouds, setClouds] = useState("");
  const [otherWeather, setOtherWeather] = useState("");
  const [display1, setDisplay1] = useState("");
  const [display2, setDisplay2] = useState("");
  const [searchBar, setSearchBar] = useState("");
  const [searchDiv, setSearchDiv] = useState("");
  const [weatherCondition, setWeatherCondition] = useState("");
  const [found, setFound] = useState("");

  let getData = async (city) => {
    try {
      let response = await fetch(
        ` https://api.weatherapi.com/v1/current.json?key=199fb48ecd4642548b6135505231508&q=${city}&aqi=no`
      );
      let data = await response.json();
      return data;
    } catch (e) {
      throw new Error("error occured");
    }
  };

  useEffect(() => {
    setCurrentLocation(document.querySelector(".location").textContent);
    setCurrentWeather(document.querySelector(".current-weather"));
    setTemprature(document.querySelector(".temprature").textContent);
    setWindSpeed(document.querySelector(".wind-speed").textContent);
    setHumidity(document.querySelector(".humidity").textContent);
    setClouds(document.querySelector(".clouds").textContent);
    setOtherWeather(document.querySelector(".other-weather"));
    setDisplay1(document.querySelector(".display1"));
    setDisplay2(document.querySelector(".display2"));
    setSearchBar(document.querySelector(".search-input").textContent);
    setSearchDiv(document.querySelector(".search-div"));
    setWeatherCondition(document.querySelector(".condition").textContent);
    setFound(document.querySelector(".not-found"));

    getData("Rajpura").then((data) => {
      setWeatherCondition(data.current.condition.text);
      setTemprature(`${data.current.temp_c}°C`);
      setWindSpeed(`${data.current.wind_kph} kp/h`);
      setHumidity(`${data.current.humidity}%`);
      setClouds(`${data.current.cloud}%`);
    });
  }, []);

  function current_weatherHandler() {
    found.classList.add("hid");
    searchDiv.style.cssText = "display:hidden";
    setCurrentLocation('rajpura');
    current_weather.classList.add("bg");
    otherWeather.classList.remove("bg");
    display1.classList.remove("activeDiv");
    display2.classList.remove("activeDiv");
    getData("Rajpura").then((data) => {
      console.log(data);
      setWeatherCondition(data.current.condition.text);
      setTemprature(`${data.current.temp_c}°C`);
      setWindSpeed(`${data.current.wind_kph} kp/h`);
      setHumidity(`${data.current.humidity}%`);
      setClouds(`${data.current.cloud}%`);
    });
  }

  function otherWeatherHandler() {
    found.classList.add("hid");
    searchDiv.style.cssText = "display:block";
    current_weather.classList.remove("bg");

    otherWeather.classList.add("bg");
    display1.classList.add("activeDiv");
    display2.classList.add("activeDiv");
  }

  function submitHandler(e) {
    e.preventDefault();
    found.classList.add("hid");

    const location = searchBar;
    // console.log(location, "hi");

    getData(location)
      .then((data) => {
        display1.classList.remove("activeDiv");
        display2.classList.remove("activeDiv");
        setCurrentLocation(searchBar);
        setWeatherCondition(data.current.condition.text);
        // console.log(data);
        setWeatherCondition(data.current.condition.text);
        setTemprature(`${data.current.temp_c}°C`);
        setWindSpeed(`${data.current.wind_kph} kp/h`);
        setHumidity(`${data.current.humidity}%`);
        setClouds(`${data.current.cloud}%`);

        setSearchBar("");
      })
      .catch(() => {
        setSearchBar("");
        console.log("Error Found");
        display1.classList.add("activeDiv");
        display2.classList.add("activeDiv");
        found.classList.remove("hid");
      });
  }

  return (
    <div className=" bg-black h-screen">
      <div className="flex justify-center text-white">
        <div className=" w-96 flex flex-col gap-16 ">
          <h1 className="self-center font-bold text-[25px]">WEATHER APP</h1>
          <div className="flex justify-between">
            <h1
              className="current-weather cursor-pointer"
              onClick={current_weatherHandler}
            >
              Your Weather
            </h1>
            <h1
              className="other-weather cursor-pointer"
              onClick={otherWeatherHandler}
            >
              search Weather
            </h1>
          </div>
          <div className="search-div hidden  gap-2 self-center">
            <form onSubmit={submitHandler}>
              <input
                type="text"
                className="search-input text-black w-80 rounded-lg"
                onChange={(e) => setSearchBar(e.target.value)}
                value={searchBar}
                id="search"
              />
              <label htmlFor="search">
                <i className="fa-solid fa-magnifying-glass cursor-pointer p-2 text-blue-400"></i>
              </label>
            </form>
          </div>
          <span className="not-found hid text-center text-red-600 text-lg font-mono">
            Location Not found
          </span>
          <div className="display1 flex flex-col gap-2 items-center self-center">
            <p className="flex gap-2">
              <span className="location text-[25px] font-mono">{current_location}</span>
              <img src={flaglogo} alt="" width="30px" />
            </p>

            <p className="condition font-sans text-lg">{weatherCondition}</p>
            <img src={cloudlogo} alt="" />
            <p className="temprature">{temprature}</p>
          </div>
          <div className="display2 flex justify-between gap-5 text-white">
            <div className="w-32 rounded-md flex flex-col justify-center items-center bg-slate-500 gap-2 shadow-xl p-2">
              <img src={windlogo} alt="" className="w-5" />
              <p>WINDSPEED</p>
              <p className="wind-speed">{windSpeed}</p>
            </div>
            <div className="w-32 rounded-md flex flex-col justify-center items-center bg-slate-500 gap-2 shadow-xl">
              <img src={humiditylogo} alt="" className="w-5" />
              <p>HUMIDITY</p>
              <p className="humidity">{Humidity}</p>
            </div>
            <div className="w-32 rounded-md flex flex-col justify-center items-center bg-slate-500 gap-2">
              <img src={cloudlogo} alt="" className="w-5" />
              <p>CLOUDS</p>
              <p className="clouds">{clouds}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
