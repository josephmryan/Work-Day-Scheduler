// Display today's day and date
var todaysDate = moment().format('dddd, MMM Do YYYY');
    $("#currentDay").html(todaysDate);

// Saves time and values to local storage
$(".saveBtn").click(function (event) {
    event.preventDefault();
    var value = $(this).siblings(".time-block").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, value);
  });

