const API_KEY = 'YOUR_API_KEY'; // Replace with your API key

export const fetchWeather = async (location) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${API_KEY}`);
    const data = await response.json();
    return data;
};
