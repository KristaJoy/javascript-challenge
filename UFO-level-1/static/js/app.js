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
var form = d3.select("#form");

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
    
    // Use D3 to select the rows in the table and delete them
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

