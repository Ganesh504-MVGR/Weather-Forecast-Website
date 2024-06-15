import React, { useState, useEffect } from 'react';
import WeatherForm from './components/WeatherForm';
import WeatherDisplay from './components/WeatherDisplay';
import { fetchWeather } from './weatherService';

const App = () => {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const { latitude, longitude } = position.coords;
                const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`);
                const data = await response.json();
                setWeatherData(data);
            });
        }
    }, []);

    const handleSearch = async (location) => {
        const data = await fetchWeather(location);
        setWeatherData(data);
    };

    return (
        <div>
            <h1>Weather Forecast</h1>
            <WeatherForm onSearch={handleSearch} />
            <WeatherDisplay weatherData={weatherData} />
        </div>
    );
};

export default App;
