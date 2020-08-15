//Create variables needed
var tableData = data;
var tbody = d3.select("tbody");

//Go to data, get each function and store in variable moonData
data.forEach(function(moonData) {
    
    //Loop that goes through moonData and stores their key and values
    Object.entries(moonData).forEach(function([key, value]) {

        //create variable cell that adds values to tbody
        var cell = tbody.append("td");

        //add values to cell
        cell.text(value);
        });

        //append to next row
        tbody.append("tr");
        })

//Create a submit var
var click = d3.select("#submit");

//Create click function
click.on("click", function() {

   //Turn input into var
   var inputDateTime = d3.select("#datetime");
   var inputValue = inputDateTime.property("value");
 
   //Make sure the input date is in the table
   var sortedData = tableData.filter(tableData => tableData.datetime === inputValue);
 
   // loop through
   sortedData.forEach((dateData) => {
    
     //reprint the table, with sorted data
     Object.entries(dateData).forEach(([key, value]) => {
       var cell = tbody.append("td");
       cell.text(value);

    //append the next row
    var row = tbody.append("tr");

     });
   });
 });
