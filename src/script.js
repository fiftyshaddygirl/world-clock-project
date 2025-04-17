function updateTime() {
  // Los Angeles
  let losAngeles = document.querySelector("#los-angeles");
  let losAngelesDate = losAngeles.querySelector(".date");
  let losAngelesTime = losAngeles.querySelector(".time");
  let losAngelesCurrent = moment().tz("America/Los_Angeles");
  losAngelesDate.innerHTML = losAngelesCurrent.format("dddd MMMM D, YYYY");
  losAngelesTime.innerHTML = losAngelesCurrent.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  // Oslo
  let oslo = document.querySelector("#oslo");
  let olsoDate = oslo.querySelector(".date");
  let osloTime = oslo.querySelector(".time");
  let osloCurrent = moment().tz("Europe/Oslo");
  olsoDate.innerHTML = osloCurrent.format("dddd MMMM D, YYYY");
  osloTime.innerHTML = osloCurrent.format("hh:mm:ss [<small>]A[</small>]");

  // Sydney
  let sydney = document.querySelector("#sydney");
  let sydneyDate = sydney.querySelector(".date");
  let sydneyTime = sydney.querySelector(".time");
  let sydneyCurrent = moment().tz("Australia/Sydney");
  sydneyDate.innerHTML = sydneyCurrent.format("dddd MMMM D, YYYY");
  sydneyTime.innerHTML = sydneyCurrent.format("hh:mm:ss [<small>]A[</small>]");
}

setInterval(updateTime, 1000);
