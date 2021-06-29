var tableData = data;

// Use D3 to select the table
var tbody = d3.select("tbody");

// Loop through and append each object to rows in table
data.forEach(sighting => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
    });
  });

// Select filter button
var button = d3.select("#filter-btn");
    
// Select the filter form
var form = d3.selectAll("input");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("change", runEnter);

function runEnter() {
    
    d3.event.preventDefault();
    
    // select form fields
    var dateInput = d3.select("#datetime");
    var cityInput = d3.select("#city");
    var stateInput = d3.select("#state");
    var countryInput = d3.select("#country");
    var shapeInput = d3.select("#shape");
    console.log(dateInput, cityInput, stateInput, countryInput, shapeInput);

    // create empty dictionary
    var filterDict = {};

    // create input values and add them to dictionary if value entered
    var dateValue = dateInput.property("value");
    if (dateValue) {filterDict["datetime"] = dateValue}

    var cityValue = cityInput.property("value");
    if (cityValue) {filterDict["city"] = cityValue}

    var stateValue = stateInput.property("value");
    if (stateValue) {filterDict["state"] = stateValue}
    
    var countryValue = countryInput.property("value");
    if (countryValue) {filterDict["country"] = countryValue}

    var shapeValue = shapeInput.property("value");
    if (shapeValue) {filterDict["shape"] = shapeValue}

    console.log(filterDict);

  // Create final filtered table data using forEach to filter based on user input
   var filteredData = tableData;
   Object.entries(filterDict).forEach(([key,value]) => {
   filteredData = filteredData.filter(tableData => tableData[key] === value)
   });
   
   // Use D3 to select the rows in the table and delete them
   var tr = d3.selectAll("tr");
   tr.remove();
   
   // select the table again
   var tbody = d3.select("tbody");
   
   // Rewrite the table with the filtered data
   filteredData.forEach(sighting => {
       var row = tbody.append("tr");
       Object.entries(sighting).forEach(([key, value]) => {
       var cell = row.append("td");
       cell.text(value);
       });

   });
   
};