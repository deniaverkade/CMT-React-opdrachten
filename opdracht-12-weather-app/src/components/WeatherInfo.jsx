

const WeatherInfo = ({ weatherIcon, cityName, weatherTemp, weatherChill, weatherHumidity, weatherWind, weatherDesc }) => {

    const iconlink = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

    return (<>
        <div class="absolute mt-45">
            <h1 class="text-5xl ml-16 font-bold text-center">{cityName}</h1>

            <div class="flex mt-3 ml-25">
                <h1 class="text-3xl mt-9">{weatherTemp}&#8451;</h1>
                <img src={iconlink} />
            </div>
            <h2 class="text-2xl text-center ml-15 font-bold">{weatherDesc}</h2>
            <div class="text-xl mt-5 flex-column p-5">
                <h3><span class="font-bold">Gevoelstemperatuur:</span> {weatherChill}&#8451;</h3>
                <h3><span class="font-bold">Luchtvochtigheid:</span> {weatherHumidity}%</h3>
                <h3><span class="font-bold">Windsnelheid:</span> {weatherWind} km/u</h3>
            </div>


        </div>
    </>);
}

export default WeatherInfo;