$(document).ready(function(){
    
    $("#submitButton").click(function(event) {
        event.preventDefault();
        var theCount = doCount();
        readOut(theCount);
        console.log(theCount);  
    });
    
    function doCount() {
        var listOfNumbers = [];
        var countToFinal = parseInt($("#countToFinal").val());
        var countByInput = parseInt($("#countByInput").val());

        for (var physicalCount = 0; physicalCount <= countToFinal; physicalCount += countByInput) {
            listOfNumbers.push(physicalCount);
        }
        return listOfNumbers;
    }

    function readOut(arrayNumbers) {
        $("#readOut").empty();
        arrayNumbers.forEach(function(number) {
            console.log('readOut - Run')
        $("#readOut").append("<ul>" + number + "</ul>");
        });
    }

});



// -------- Specs ------------
//Create a program that takes two numbers - one to count to and another to determine what multiple to use to get there.

// Here is some sample input:
// Count to: 30
// Count by: 5
// Output: 5, 10, 15, 20, 25, 30

// Count to: 50
// Count by: 7
// Output: 7, 14, 21, 28, 35, 42, 49

// Don't forget to consider how to handle any input that might be submitted:

// empty values (user just presses enter)
// non-numeric values (It may be helpful to read up about the numerical value, NaN)
// negative numbers
// count by number is larger than the count to numbers