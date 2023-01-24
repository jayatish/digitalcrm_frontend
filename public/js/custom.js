if($('#from, #to').length){
  // check if element is available to bind ITS ONLY ON HOMEPAGE
  var currentDate = moment().format("DD-MM-YYYY");

  $('#from, #to').daterangepicker({
      locale: {
            format: 'DD-MM-YYYY'
      },
      
      "alwaysShowCalendars": true,
      "minDate": currentDate,
      autoApply: true,
      autoUpdateInput: false
    
  }, function(start, end, label) {
    // console.log("New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')");
    // Lets update the fields manually this event fires on selection of range
    var selectedStartDate = start.format('DD-MM-YYYY'); // selected start
    var selectedEndDate = end.format('DD-MM-YYYY'); // selected end

    $checkinInput = $('#from');
    $checkoutInput = $('#to');

    // Updating Fields with selected dates
    $checkinInput.val(selectedStartDate);
    $checkoutInput.val(selectedEndDate);

    // Setting the Selection of dates on calender on CHECKOUT FIELD (To get this it must be binded by Ids not Calss)
    var checkOutPicker = $checkoutInput.data('daterangepicker');
    checkOutPicker.setStartDate(selectedStartDate);
    checkOutPicker.setEndDate(selectedEndDate);

    // Setting the Selection of dates on calender on CHECKIN FIELD (To get this it must be binded by Ids not Calss)
    var checkInPicker = $checkinInput.data('daterangepicker');
    checkInPicker.setStartDate(selectedStartDate);
    checkInPicker.setEndDate(selectedEndDate);

  });

} // End Daterange Picker

$("#to").click(function(){
  $(".daterangepicker").addClass("right");
});

// 
// $(document).ready(function() {
//   $("#daterangepicker").kendoDateRangePicker();
// });                                          
// // date picker
// "use strict";
// $(".dropdown-menu").on("click", function (e) {
//   e.stopPropagation();
// }).on("mousedown", function (e) {
//   if ($(e.target).is("button, a, input"))
//     return;
    
//   var $el = $(this).parent().find(":focus");
//   setTimeout(function () {
//     //debugger;
//     $el.trigger("focus");
//   }, 0);
// });

//
$(".k-animation-container").click(function(){ 
  $(".dropdown-menu").addClass("show");
}); 
// 

$(".dropdown-toggle").click(function(){
  $(".dropdown").removeClass("open");
});

$(".cross img").click(function(){
  $(".app-container").removeClass("sidebar-mobile-open");
});
$(".cross img").click(function(){
  $(".hamburger").removeClass(" is-active");
});

      
// tabs
const tabBtn = document.querySelectorAll(".tab__btn");
const tabContents = document.querySelectorAll(".tab__item");

tabBtn.forEach(function(element) {
   element.addEventListener("click", openTabs);
});

function openTabs(evt) {
  const btnTarget = evt.currentTarget;
  const item = btnTarget.dataset.item;

   tabContents.forEach(function(item) {
      item.classList.remove("tab__item--active");
   });

   tabBtn.forEach(function(item) {
      item.classList.remove("tab__btn--active");
   });

   document.querySelector(`#${item}`).classList.add("tab__item--active");

   btnTarget.classList.add("tab__btn--active"); 
}

