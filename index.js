// City Search
var tbody = document.querySelector("tbody.city");
var cityInput = document.querySelector("#city");
var searchBtn = document.querySelector("#searchcity");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
searchBtn.addEventListener("click", handleSearchButtonClick);


var filteredCity = city_info;


function renderTable() {
  tbody.innerHTML = "";


  for (var i = 0; i < filteredCity.length; i++) {
    

    var info = filteredCity[i];
    var fields = Object.keys(info);

    var row = tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {

      var field = fields[j];
      var cell = row.insertCell(j);
      cell.innerText = info[field];
    }
  }
}

function handleSearchButtonClick() {
  
  var filterCity = cityInput.value.trim();


  if (filterCity.length != 0){
    filteredCity = city_info.filter(function(info) {
      var cityName = info.city;
       return cityName === filterCity;
         });
  }
  else {
    filteredCity = city_info
  }
  renderTable();
}

renderTable();

//College Search

var tbody1 = document.querySelector("tbody.school");
var schoolInput = document.querySelector("#school");
var searchBtn2 = document.querySelector("#searchschool");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
searchBtn2.addEventListener("click", handleSearchButtonClick2);


var filteredSchool = college_info;


function renderTable2() {
  tbody1.innerHTML = "";


  for (var i = 0; i < filteredSchool.length; i++) {
    

    var info2 = filteredSchool[i];
    var fields2 = Object.keys(info2);

    var row2 = tbody1.insertRow(i);
    for (var j = 0; j < fields2.length; j++) {

      var field2 = fields2[j];
      var cell2 = row2.insertCell(j);
      cell2.innerText = info2[field2];
    }
  }
}

function handleSearchButtonClick2() {
  
  var filterSchool = schoolInput.value.trim();


  if (filterSchool.length != 0){
    filteredSchool = college_info.filter(function(info2) {
      var schoolName = info2.Name;
       return schoolName === filterSchool;
         });
  }
  else {
    filteredSchool = college_info
  }
  renderTable2();
}
renderTable2();

