const BASE_URL = "http://localhost:3000/dev";

const TEST_DATA = {
    "cod":"200","message":0,"cnt":40,"list":[{"dt":1725310800,"main":{"temp":87.19,"feels_like":89.38,"temp_min":87.19,"temp_max":89.51,"pressure":1016,"sea_level":1016,"grnd_level":989,"humidity":49,"temp_kf":-1.29},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":11.43,"deg":18,"gust":10.96},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2024-09-02 21:00:00"},{"dt":1725321600,"main":{"temp":82.2,"feels_like":83.46,"temp_min":80.28,"temp_max":82.2,"pressure":1015,"sea_level":1015,"grnd_level":990,"humidity":53,"temp_kf":1.07},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":8.23,"deg":21,"gust":21.41},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2024-09-03 00:00:00"},{"dt":1725332400,"main":{"temp":73.13,"feels_like":73.24,"temp_min":73.13,"temp_max":73.13,"pressure":1017,"sea_level":1017,"grnd_level":991,"humidity":66,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"clouds":{"all":20},"wind":{"speed":7.34,"deg":21,"gust":22.91},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2024-09-03 03:00:00"},{"dt":1725343200,"main":{"temp":69.49,"feels_like":69.53,"temp_min":69.49,"temp_max":69.49,"pressure":1017,"sea_level":1017,"grnd_level":991,"humidity":72,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":63},"wind":{"speed":4.94,"deg":32,"gust":10.89},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2024-09-03 06:00:00"},{"dt":1725354000,"main":{"temp":67.23,"feels_like":67.12,"temp_min":67.23,"temp_max":67.23,"pressure":1017,"sea_level":1017,"grnd_level":991,"humidity":74,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":79},"wind":{"speed":3.62,"deg":47,"gust":3.76},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2024-09-03 09:00:00"},{"dt":1725364800,"main":{"temp":69.03,"feels_like":69.15,"temp_min":69.03,"temp_max":69.03,"pressure":1019,"sea_level":1019,"grnd_level":992,"humidity":75,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":89},"wind":{"speed":4.63,"deg":87,"gust":23.8},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2024-09-03 12:00:00"},{"dt":1725375600,"main":{"temp":80.04,"feels_like":81.54,"temp_min":80.04,"temp_max":80.04,"pressure":1020,"sea_level":1020,"grnd_level":994,"humidity":57,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":100},"wind":{"speed":14.76,"deg":123,"gust":20.04},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2024-09-03 15:00:00"},{"dt":1725386400,"main":{"temp":88.41,"feels_like":89.02,"temp_min":88.41,"temp_max":88.41,"pressure":1019,"sea_level":1019,"grnd_level":993,"humidity":42,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":98},"wind":{"speed":11.43,"deg":123,"gust":12.41},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2024-09-03 18:00:00"},{"dt":1725397200,"main":{"temp":87.62,"feels_like":87.94,"temp_min":87.62,"temp_max":87.62,"pressure":1017,"sea_level":1017,"grnd_level":992,"humidity":42,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":88},"wind":{"speed":9.64,"deg":113,"gust":11.65},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2024-09-03 21:00:00"},{"dt":1725408000,"main":{"temp":82.53,"feels_like":82.87,"temp_min":82.53,"temp_max":82.53,"pressure":1018,"sea_level":1018,"grnd_level":992,"humidity":47,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":94},"wind":{"speed":8.79,"deg":109,"gust":20.15},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2024-09-04 00:00:00"},{"dt":1725418800,"main":{"temp":76.12,"feels_like":75.63,"temp_min":76.12,"temp_max":76.12,"pressure":1020,"sea_level":1020,"grnd_level":994,"humidity":47,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":45},"wind":{"speed":11.52,"deg":110,"gust":29.75},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2024-09-04 03:00:00"},{"dt":1725429600,"main":{"temp":73.09,"feels_like":72.41,"temp_min":73.09,"temp_max":73.09,"pressure":1021,"sea_level":1021,"grnd_level":995,"humidity":49,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":60},"wind":{"speed":11.88,"deg":122,"gust":30.33},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2024-09-04 06:00:00"},{"dt":1725440400,"main":{"temp":68.49,"feels_like":67.77,"temp_min":68.49,"temp_max":68.49,"pressure":1022,"sea_level":1022,"grnd_level":995,"humidity":58,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":30},"wind":{"speed":9.1,"deg":123,"gust":27.54},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2024-09-04 09:00:00"},{"dt":1725451200,"main":{"temp":67.33,"feels_like":66.45,"temp_min":67.33,"temp_max":67.33,"pressure":1023,"sea_level":1023,"grnd_level":997,"humidity":57,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":34},"wind":{"speed":9.51,"deg":123,"gust":28.48},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2024-09-04 12:00:00"},{"dt":1725462000,"main":{"temp":77.14,"feels_like":76.39,"temp_min":77.14,"temp_max":77.14,"pressure":1024,"sea_level":1024,"grnd_level":998,"humidity":39,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":89},"wind":{"speed":13.94,"deg":124,"gust":21.03},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2024-09-04 15:00:00"},{"dt":1725472800,"main":{"temp":86.61,"feels_like":84.33,"temp_min":86.61,"temp_max":86.61,"pressure":1022,"sea_level":1022,"grnd_level":996,"humidity":30,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":83},"wind":{"speed":11.68,"deg":118,"gust":14.7},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2024-09-04 18:00:00"},{"dt":1725483600,"main":{"temp":88.66,"feels_like":86.43,"temp_min":88.66,"temp_max":88.66,"pressure":1020,"sea_level":1020,"grnd_level":994,"humidity":30,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":47},"wind":{"speed":9.6,"deg":103,"gust":11.68},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2024-09-04 21:00:00"},{"dt":1725494400,"main":{"temp":80.24,"feels_like":80.28,"temp_min":80.24,"temp_max":80.24,"pressure":1020,"sea_level":1020,"grnd_level":994,"humidity":42,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":44},"wind":{"speed":5.32,"deg":92,"gust":10.07},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2024-09-05 00:00:00"},{"dt":1725505200,"main":{"temp":75.97,"feels_like":75.61,"temp_min":75.97,"temp_max":75.97,"pressure":1021,"sea_level":1021,"grnd_level":995,"humidity":50,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"clouds":{"all":100},"wind":{"speed":6.44,"deg":108,"gust":24.23},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2024-09-05 03:00:00"},{"dt":1725516000,"main":{"temp":71.2,"feels_like":71.4,"temp_min":71.2,"temp_max":71.2,"pressure":1022,"sea_level":1022,"grnd_level":996,"humidity":72,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"clouds":{"all":100},"wind":{"speed":10.2,"deg":115,"gust":26.75},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2024-09-05 06:00:00"},{"dt":1725526800,"main":{"temp":69.21,"feels_like":69.3,"temp_min":69.21,"temp_max":69.21,"pressure":1022,"sea_level":1022,"grnd_level":995,"humidity":74,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"clouds":{"all":100},"wind":{"speed":8.43,"deg":112,"gust":24.99},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2024-09-05 09:00:00"},{"dt":1725537600,"main":{"temp":70.68,"feels_like":70.88,"temp_min":70.68,"temp_max":70.68,"pressure":1022,"sea_level":1022,"grnd_level":996,"humidity":73,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":100},"wind":{"speed":10.02,"deg":111,"gust":25.97},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2024-09-05 12:00:00"},{"dt":1725548400,"main":{"temp":72.39,"feels_like":72.57,"temp_min":72.39,"temp_max":72.39,"pressure":1022,"sea_level":1022,"grnd_level":996,"humidity":69,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":100},"wind":{"speed":8.61,"deg":104,"gust":21.74},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2024-09-05 15:00:00"},{"dt":1725559200,"main":{"temp":76.55,"feels_like":76.82,"temp_min":76.55,"temp_max":76.55,"pressure":1021,"sea_level":1021,"grnd_level":995,"humidity":62,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":100},"wind":{"speed":9.37,"deg":98,"gust":15.26},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2024-09-05 18:00:00"},{"dt":1725570000,"main":{"temp":78.76,"feels_like":78.76,"temp_min":78.76,"temp_max":78.76,"pressure":1019,"sea_level":1019,"grnd_level":993,"humidity":59,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":100},"wind":{"speed":7.78,"deg":87,"gust":12.5},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2024-09-05 21:00:00"},{"dt":1725580800,"main":{"temp":75.51,"feels_like":75.81,"temp_min":75.51,"temp_max":75.51,"pressure":1020,"sea_level":1020,"grnd_level":993,"humidity":65,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":100},"wind":{"speed":9.26,"deg":119,"gust":16.75},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2024-09-06 00:00:00"},{"dt":1725591600,"main":{"temp":70.12,"feels_like":70.32,"temp_min":70.12,"temp_max":70.12,"pressure":1020,"sea_level":1020,"grnd_level":994,"humidity":74,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":84},"wind":{"speed":7.61,"deg":133,"gust":22.24},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2024-09-06 03:00:00"},{"dt":1725602400,"main":{"temp":69.48,"feels_like":69.75,"temp_min":69.48,"temp_max":69.48,"pressure":1019,"sea_level":1019,"grnd_level":993,"humidity":77,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"clouds":{"all":89},"wind":{"speed":9.08,"deg":122,"gust":22.53},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2024-09-06 06:00:00"},{"dt":1725613200,"main":{"temp":67.19,"feels_like":67.42,"temp_min":67.19,"temp_max":67.19,"pressure":1018,"sea_level":1018,"grnd_level":992,"humidity":81,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"clouds":{"all":88},"wind":{"speed":5.73,"deg":109,"gust":18.01},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2024-09-06 09:00:00"},{"dt":1725624000,"main":{"temp":66.29,"feels_like":66.56,"temp_min":66.29,"temp_max":66.29,"pressure":1019,"sea_level":1019,"grnd_level":992,"humidity":84,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":81},"wind":{"speed":3.71,"deg":90,"gust":12.82},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2024-09-06 12:00:00"},{"dt":1725634800,"main":{"temp":77.32,"feels_like":77.67,"temp_min":77.32,"temp_max":77.32,"pressure":1018,"sea_level":1018,"grnd_level":992,"humidity":62,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":56},"wind":{"speed":9.71,"deg":116,"gust":13.15},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2024-09-06 15:00:00"},{"dt":1725645600,"main":{"temp":78.66,"feels_like":79.03,"temp_min":78.66,"temp_max":78.66,"pressure":1017,"sea_level":1017,"grnd_level":991,"humidity":60,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":73},"wind":{"speed":10.04,"deg":102,"gust":11.92},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2024-09-06 18:00:00"},{"dt":1725656400,"main":{"temp":73.94,"feels_like":74.32,"temp_min":73.94,"temp_max":73.94,"pressure":1016,"sea_level":1016,"grnd_level":990,"humidity":70,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":98},"wind":{"speed":9.48,"deg":131,"gust":14.56},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2024-09-06 21:00:00"},{"dt":1725667200,"main":{"temp":69.96,"feels_like":70.38,"temp_min":69.96,"temp_max":69.96,"pressure":1016,"sea_level":1016,"grnd_level":990,"humidity":79,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":94},"wind":{"speed":5.97,"deg":134,"gust":15.59},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2024-09-07 00:00:00"},{"dt":1725678000,"main":{"temp":68.07,"feels_like":68.49,"temp_min":68.07,"temp_max":68.07,"pressure":1016,"sea_level":1016,"grnd_level":990,"humidity":83,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"clouds":{"all":90},"wind":{"speed":3.29,"deg":128,"gust":8.81},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2024-09-07 03:00:00"},{"dt":1725688800,"main":{"temp":64.33,"feels_like":64.78,"temp_min":64.33,"temp_max":64.33,"pressure":1015,"sea_level":1015,"grnd_level":989,"humidity":92,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":54},"wind":{"speed":2.44,"deg":121,"gust":2.01},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2024-09-07 06:00:00"},{"dt":1725699600,"main":{"temp":62.92,"feels_like":63.28,"temp_min":62.92,"temp_max":62.92,"pressure":1015,"sea_level":1015,"grnd_level":989,"humidity":93,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":4},"wind":{"speed":1.1,"deg":63,"gust":0.87},"visibility":10000,"pop":0,"sys":{"pod":"n"},"dt_txt":"2024-09-07 09:00:00"},{"dt":1725710400,"main":{"temp":64.06,"feels_like":64.44,"temp_min":64.06,"temp_max":64.06,"pressure":1016,"sea_level":1016,"grnd_level":989,"humidity":91,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"clouds":{"all":13},"wind":{"speed":2.64,"deg":1,"gust":2.98},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2024-09-07 12:00:00"},{"dt":1725721200,"main":{"temp":78.22,"feels_like":78.57,"temp_min":78.22,"temp_max":78.22,"pressure":1016,"sea_level":1016,"grnd_level":990,"humidity":60,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":57},"wind":{"speed":7.25,"deg":359,"gust":11.21},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2024-09-07 15:00:00"},{"dt":1725732000,"main":{"temp":87.8,"feels_like":87.91,"temp_min":87.8,"temp_max":87.8,"pressure":1014,"sea_level":1014,"grnd_level":988,"humidity":41,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":47},"wind":{"speed":9.26,"deg":12,"gust":13.11},"visibility":10000,"pop":0,"sys":{"pod":"d"},"dt_txt":"2024-09-07 18:00:00"}],"city":{"id":7260623,"name":"Redstone Arsenal","coord":{"lat":34.7059,"lon":-86.6165},"country":"US","population":1946,"timezone":-18000,"sunrise":1725276041,"sunset":1725322302}
};

// DOM objects //
let locationModeSelect;
let tabsDiv;
let hourlyDiv;
let autoLocationP;
let getWeatherButton;


// API functions //

async function getCoords(data) {
    const url = new URL(`${BASE_URL}/coordinates`);
    for (const [key, value] of Object.entries(data)) {
        url.searchParams.append(key, value);
    }
    
    const response = await fetch(url);

    if (!response.ok) {
        console.error(response);
        throw Error(await response.text());
    }
    return await response.json();
}

async function getForecast(coords) {
    const url = new URL(`${BASE_URL}/forecast`);
    url.searchParams.append("lat", coords.lat);
    url.searchParams.append("lon", coords.lon);

    const response = await fetch(url);

    if (!response.ok) {
        console.error(response);
        throw Error(await response.text());
    }

    return await response.json();
}


// button functions

function onSubmit(event) {
    const mode = locationModeSelect.value;

    const params = {};

    switch (mode) {
        case "zip":
            params.zip = parseInt(document.getElementById("zip").value);
            if (!params.zip) return;
            break;
        case "city":
            params.city = document.getElementById("city").value;
            params.state = document.getElementById("state").value;
            if (!params.city || !params.state) return;
            break;
    }

    getCoords(params).then(async (coords) => {
        autoLocationP.innerText = coords.city;
        applyForecast(await getForecast(coords));
    });
}

function locationModeChange(_) {
    const mode = locationModeSelect.value;

    const elements = document.getElementsByClassName("mode-option");
    
    for (const element of elements) {
        if (!element.classList.contains("hidden")) {
            element.classList.add("hidden");
        }
    }

    switch (mode) {
        case "zip":
            document.getElementById("zip-mode").classList.remove("hidden");
            break;
        case "city":
            document.getElementById("city-mode").classList.remove("hidden");
            break;
        default:
            document.getElementById("auto-mode").classList.remove("hidden");
            break;
    }
}

function enableTableForButton(id, _) {
    const tables = document.getElementsByClassName("data-table");
    const relevantTable = document.getElementById("table-" + id);

    const buttons = document.getElementsByClassName("day-buttons");
    const relevantButton = document.getElementById("button-" + id);

    for (const table of tables) {
        if (!table.classList.contains("hidden")) {
            table.classList.add("hidden");
        }
    }

    relevantTable.classList.remove("hidden");

    for (const button of buttons) {
        if (button.classList.contains("selected-button")) {
            button.classList.remove("selected-button");
        }
    }

    relevantButton.classList.add("selected-button");
}


// functions to handle the forecast data //

function reformatForecast(forecast) {
    const days = {};

    // reformat the forecast
    for (const entry of forecast.list) {
        // js does timestamps in milliseconds for god knows why
        const date = new Date(entry.dt * 1000);

        const day = [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat"
        ][(date).getDay()];

        if (!days[day]) {
            days[day] = [];
        }

        days[day].push({
            date: date,
            temp: Math.round(entry.main.temp),
            feels_like: Math.round(entry.main.feels_like),
            weather: entry.weather[0],
            rain: entry["rain"] ? Math.round(entry.rain["3h"] * 10 / 3) / 10 : 0,
            humidity: entry.main.humidity
        });
    }

    days.city = forecast.city;

    return days;
}

function initializeTableHeader(table, header) {
    const thead = document.createElement("thead");
    table.appendChild(thead);
    const headTr = document.createElement("tr");
    thead.appendChild(headTr);

    for (const title of header) {
        const th = document.createElement("th");
        headTr.appendChild(th);
        th.scope = "col";
        th.innerText = title;
    }
}

function createTabButton(parent, id, day) {
    const tabButton = document.createElement("button");
    tabButton.classList.add("tab");
    tabButton.classList.add("flexitem");
    tabButton.classList.add("day-buttons");
    tabButton.value = id;
    tabButton.id = "button-" + id;
    tabButton.innerText = day;
    tabButton.addEventListener("click", (e) => enableTableForButton(id, e));
    parent.appendChild(tabButton);
}

function fillTable(table, data) {
    const tbody = document.createElement("tbody");
    table.appendChild(tbody);

    for (const record of data) {
        const tr = document.createElement("tr");
        tbody.appendChild(tr);

        const hours = record.date.getHours();

        for (measurement of [
            hours > 12 ? `${hours - 12} PM` : `${hours} AM`,
            `${record.temp}°F`,
            `${record.feels_like}°F`,
            record.weather.main,
            `${record.rain} in/h`,
            `${record.humidity}%`,
        ]) {
            const th = document.createElement("th");
            tr.appendChild(th);
            th.innerText = measurement;
        }
    }
}

function createFilledTable(parent, id, data) {
    // make the table
    const table = document.createElement("table");
    table.classList.add("hidden");
    table.classList.add("data-table");
    table.id = "table-" + id;
    parent.appendChild(table);

    initializeTableHeader(table, [
        "Time", "Temperature", "Feels Like", "Weather", "Precipitation", "Humidity"
    ]);

    fillTable(table, data);
}

function applyForecast(forecast) {
    const days = reformatForecast(forecast);
    const city = days.city;
    delete days.city;

    // empty divs to fill them with new data
    tabsDiv.innerHTML = "";
    hourlyDiv.innerHTML = "";

    for (const [day, data] of Object.entries(days)) {
        const date = data[0].date;

        const id = date.getMonth() + "_" + date.getDate();

        // make the tab div
        createTabButton(tabsDiv, id, day);

        createFilledTable(hourlyDiv, id, data);
    }

    autoLocationP.innerText = city.name;
    locationModeSelect.selectedIndex = 0;
    locationModeChange(null);
}


window.addEventListener('load', function () {
    navigator.geolocation.getCurrentPosition((pos) => {
        getForecast(pos).then((value) => applyForecast(value));
    });

    locationModeSelect = document.getElementById("location-mode");
    tabsDiv = document.getElementById("tabs");
    hourlyDiv = document.getElementById("hourly");
    autoLocationP = document.getElementById("auto-location");
    getWeatherButton = document.getElementById("get-weather");

    getWeatherButton.addEventListener("click", onSubmit);
    locationModeSelect.onchange = locationModeChange;
});

