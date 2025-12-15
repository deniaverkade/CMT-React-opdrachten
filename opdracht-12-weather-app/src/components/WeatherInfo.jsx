

const WeatherInfo = ({ weatherIcon, cityName, weatherTemp, weatherChill, weatherHumidity, weatherWind,weatherDesc }) => {

    const iconlink = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

    return (<>
        <div>
            <h1>{cityName}</h1>

            <div>
                <img src={iconlink} />
                <h1>{weatherTemp}&#8451;</h1>
                <h2>{weatherDesc}</h2>
            </div>
            <div>
                <h3>Gevoelstemperatuur: {weatherChill}</h3>
                <h3>Luchtvochtigheid: {weatherHumidity}%</h3>
                <h3>Windsnelheid: {weatherWind} km/u</h3>
            </div>


        </div>
    </>);
}

export default WeatherInfo;