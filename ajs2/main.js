let btnsearch = document.getElimentById("btn-search");
let weatherinfo = document.getElimentById("weather-info");
let input = document.getElimentById("input");
async function fethweather(country) {
  let response = await fetch(
    `
    https://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&
    appid=eae3b612980b7423e2c96a3bd7345618
    `,
  );
  let data = await response.json();
  console.log(data);
  weatherinfo.innerHtml = `
            <h1>wheather in ${data.name}</h1>
        <h1>${data.main.temp}</h1>
        <p>${data.weather[0].description}</p>
        <p>humedity:${data.main.humedity}</p>
        <p>wind speed :${data.wind.speed}</p>
    `;
}

btnsearch.addEventListener("click", function () {
  fetchweather(input.value);
});
