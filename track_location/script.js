const btn = document.querySelector("#btn");
const result = document.querySelector("#result");

btn.addEventListener("click", getLocation);

function getLocation() {
  if (!navigator.geolocation) {
    alert("Geolocation API not supported by this browser.");
  } else {
    navigator.geolocation.getCurrentPosition(success, fail);
  }
}

function success(position) {
  result.innerHTML = "";
  result.innerHTML = `<p>Latitude :- ${position.coords.latitude}</p>
                        <p>Longitude :- ${position.coords.longitude}</p>`;
}

function fail(error) {
  console.log(error);
}
