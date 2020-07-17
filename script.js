// $(document).ready(function() {
console.log(moment());
const searchBar = document.getElementById("search-bar");
const searchBtn = document.getElementById("searchBtn");


$(searchBtn).on("click", function (event) {
  event.preventDefault();
  
  const cityName = searchBar.value;
  console.log(cityName);
  const APIKey = "1893546eadda6ea230333e67a557c549";
  
  const queryURLCurr = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=1893546eadda6ea230333e67a557c549";
  console.log(queryURLCurr);
  
  const queryURLFore = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=1893546eadda6ea230333e67a557c549";
  console.log(queryURLFore);



  $.ajax({
    url: queryURLCurr,
    method: "GET"
    //its a promise
  }).then(function (response) {
    console.log(response);

    $('#searchedCity').text(response.name);
    $('#temp').text(Math.floor(((response.main.temp) - 273.15) * 1.8 + 32));
    $('#humid').text(response.main.humidity);
    $('#wind').text(response.wind.speed);
  }); 



  $.ajax({
    url: queryURLFore,
    method: "GET"
    //its a promise
  }).then(function (response) {
    console.log(response);
  });

   


})
















