const BASE_URL = "https://5egul6atdc.execute-api.us-east-1.amazonaws.com/dev";

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

