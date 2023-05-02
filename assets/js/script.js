// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
let currentDay = dayjs().format('dddd, MMMM D');

$(document).ready(function () {

  $('#currentDay').text(currentDay);
  // $('#9').children('textarea').val(localStorage.getItem('9'))
  // $('#10').children('textarea').val(localStorage.getItem('10'))
  // $('#11').children('textarea').val(localStorage.getItem('11'))
  // iterating through each element of the time-block
  $('.time-block').each(function (element) {
    let id = $(this).attr('id');//this is refering to the time-block element and grabbing the id attribute
    let storedEntry = localStorage.getItem(id);//getting the id from localStorage and saving it as a variable
    $(this).children('textarea').val(storedEntry);//grabbing the textarea value(key) and storedEntry(value) from localStorage from each time-block so everything can stay on the page when it refreshes
  })

  $('.time-block').each(function (element) {
    let id = $(this).attr('id');
    let currentTime = dayjs().format('h:mm A');
    let timeBlockPresent = $('.time-block');
    let timeBlockFuture = $('.time-block');
    let timeBlockPast = $('.time-block');
    if (currentTime == id) {
      timeBlockPresent.addClass('present');
      timeBlockPresent.css('background-color', '#ff6961');
    } else if (currentTime < id) {
      timeBlockFuture.addClass('future');
      timeBlockFuture.css('background-color', '#77dd77');
    } else (currentTime > id) 
      timeBlockPast.addClass('past');
      timeBlockPast.css('background-color', '#d3d3d3');
  })
  //get the hour dayjs if data-hour is < current hour addClass past
  //   function getScheduleTime(element) {
  // if (dayjs().format('h:mm A') < blockTime) {
  //   let timeBlockFuture = $('.time-block');
  //   timeBlockFuture.addClass('future');
  //   timeBlockFuture.css('background-color', '#77dd77');
  // }
  //   } 

  // let timeBlockPast = $('.time-block');
  // timeBlockPast.addClass('past');
  // timeBlockPast.css('background-color', '#d3d3d3');
  // let timeBlockPresent = $('.time-block');
  // timeBlockPresent.addClass('present');
  // timeBlockPresent.css('background-color', '#ff6961');




  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

  $('.saveBtn').on('click', function () {//event listener on the click of the saveBtn, the function passes the block below
    let textValue = $(this).siblings('textarea').val();//this is referring to saveBtn, textarea is the sibling, and getting the value of textarea
    let time = $(this).parent().attr('id');//grabbing the id of the parent of saveBtn
    localStorage.setItem(time, textValue);//setting the time which is the key and textValue which is the value in localStorage
  })

});