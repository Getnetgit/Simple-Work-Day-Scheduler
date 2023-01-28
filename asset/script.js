


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  var currentDayP=$('#currentDay');
  var timeBlockDiv=$('.time-block');
  var saveBtn=$('');


  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  timeBlockDiv.children().children('i').on('click', (event)=> {
    var element=$(event.target) 
    var scheduleText=element.parent().parent().children('textarea').val();
    var hourId=element.parent().parent().prop('id');
     localStorage.setItem(hourId,scheduleText);
  });
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  
 
  var UpdateCurrentHour=setInterval(()=>{
    console.log(currentHour=dayjs().format('H'));
    var currentHour=dayjs().format('H');
    for (let i = 9; i < 18; i++) {
      var timeBlockId="#hour-"+i;
      
      if (currentHour==i) {
        $(timeBlockId).removeClass('past future');
        $(timeBlockId).addClass('present');
      } else if(currentHour>i) {
        $(timeBlockId).removeClass('present future');
        $(timeBlockId).addClass('past');
      }else{
        $(timeBlockId).removeClass('past present');
        $(timeBlockId).addClass('future');
      }
      
    }
  },1000)

  var idname="#hour-"+9;
 console.log($(idname));
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  

  // TODO: Add code to display the current date in the header of the page.
});
