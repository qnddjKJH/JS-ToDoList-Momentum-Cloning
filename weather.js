const COORDS = 'coords';

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };

    saveCoords(coordsObj);
}

function handleGeoError() {
    console.log("Can't access geo location");
}

// navigator API 를 사용하여 사용자의 위치를 얻는다.
function  askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)
}

function loadCoords() {
    const loadedCords = localStorage.getItem(COORDS);

    if (loadedCords == null) {
        askForCoords();
    } else {
        // getWeather
    }
}

function init() {
    loadCoords();
}

init();