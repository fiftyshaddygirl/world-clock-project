function updateTime() {
  // Los Angeles
  let losAngeles = document.querySelector("#los-angeles");
  if (losAngeles) {
    let losAngelesDate = losAngeles.querySelector(".date");
    let losAngelesTime = losAngeles.querySelector(".time");
    let losAngelesCurrent = moment().tz("America/Los_Angeles");
    losAngelesDate.innerHTML = losAngelesCurrent.format("dddd MMMM D, YYYY");
    losAngelesTime.innerHTML = losAngelesCurrent.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }

  // Oslo
  let oslo = document.querySelector("#oslo");
  if (oslo) {
    let olsoDate = oslo.querySelector(".date");
    let osloTime = oslo.querySelector(".time");
    let osloCurrent = moment().tz("Europe/Oslo");
    olsoDate.innerHTML = osloCurrent.format("dddd MMMM D, YYYY");
    osloTime.innerHTML = osloCurrent.format("hh:mm:ss [<small>]A[</small>]");
  }
  // Sydney
  let sydney = document.querySelector("#sydney");
  if (sydney) {
    let sydneyDate = sydney.querySelector(".date");
    let sydneyTime = sydney.querySelector(".time");
    let sydneyCurrent = moment().tz("Australia/Sydney");
    sydneyDate.innerHTML = sydneyCurrent.format("dddd MMMM D, YYYY");
    sydneyTime.innerHTML = sydneyCurrent.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }
}

setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimezone = event.target.value;
  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }
  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimezone);
  let cityElement = document.querySelector("#cities");

  cityElement.innerHTML = `
  <div class="city">
    <div>
       <h2>${cityName}</h2>
       <div class="date">${cityTime.format("dddd MMMM D, YYYY")}</div>
    </div>
       <div class="time">${cityTime.format(
         "hh:mm:ss"
       )} <small>${cityTime.format("A")}</small></div>
  </div>
  `;
}

let citySelect = document.querySelector("#city");
citySelect.addEventListener("change", updateCity);
