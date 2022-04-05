// Display today's day and date
var todaysDate = moment().format('dddd, MMM Do YYYY');
    $("#currentDay").html(todaysDate);

// Saves time and values to local storage
$(".saveBtn").click(function() {
    var value = $(this).siblings(".time-block").attr('id');
    var time = $(this).siblings(".time-block").val();
    localStorage.setItem(time, value);

    
  });

// Lists current hour using moment js
function thisHour() {
    //get current number of hours
    var currentHour = moment().hour();
    // loop over time blocks
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id"));
        console.log( blockHour, currentHour)

        //changes css for current, past, and future hours
        if (blockHour < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future","present");         
        }
        else if (blockHour === currentHour) {
            $(this).addClass("present");
            $(this).removeClass("past","future");        
        }
        else {
            $(this).addClass("future");
            $(this).removeClass("past", "present");            
        }
    })
}
thisHour();