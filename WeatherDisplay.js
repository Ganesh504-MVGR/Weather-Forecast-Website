import React from 'react';

const WeatherDisplay = ({ weatherData }) => {
    return (
        <div>
            {weatherData ? (
                <div>
                    <h2>Weather in {weatherData.city.name}</h2>
                    {weatherData.list.slice(0, 5).map((forecast, index) => (
                        <div key={index}>
                            <p>{forecast.dt_txt}</p>
                            <p>Temperature: {forecast.main.temp}°C</p>
                            <p>Condition: {forecast.weather[0].description}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No data available</p>
            )}
        </div>
    );
};

export default WeatherDisplay;
