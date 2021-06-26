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
var form = d3.select("#filters");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {
    
    d3.event.preventDefault();
    
    // select filter form field
    var dateInput = d3.select("#datetime");
  
    // create input value
    var dateValue = dateInput.property("value");

    // Filter the data based on input
    var filteredDateData = tableData.filter(tableData => tableData.datetime === dateValue);
    // var filteredCityData = tableData.filter(tableData => tableData.city === cityValue);
    
    
    console.log(filteredDateData);

    // Use D3 to select the rows in the table and delete them
    var tbody = d3.select("tbody");
    var tr = d3.selectAll("tr");
    tr.remove();
    
    // select the table again
    var tbody = d3.select("tbody");
    
    // Rewrite the table with the filtered data
    filteredDateData.forEach(sighting => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });

    });
    
};



  // var cityInput = d3.select("#city");
    // var stateInput = d3.select("#state");
    // var countryInput = d3.select("#country");
    // var shapeInput = d3.select("#shape");

        // var cityValue = cityInput.property("value");
    // var stateValue = stateInput.property("value");
    // var countryValue = countryInput.property("value");
    // var shapeValue = shapeInput.property("value");