


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  var timeBlockDiv=$('.time-block');
    timeBlockDiv.children().children('i').on('click', (event)=> {//select in element inside button then when clicked it captures what is intered in the text area and captues id of timeblock div then save event in the local storage with an id.
    var element=$(event.target) 
    var scheduleText=element.parent().parent().children('textarea').val();//get the text written in the time block text area 
    var hourId=element.parent().parent().prop('id');//capture id name 
     localStorage.setItem(hourId,scheduleText); //save text to localstorage with the id
  });
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  function applyTimeBlockBcolour() { //This function will apply backgdround colour to time block based on current hour by adding and removing pas ,present and future classes
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
  }
  
  applyTimeBlockBcolour();//Call function everytime page is loded or refereshed 
  var UpdateCurrentHour=setInterval(()=>{ //call function every second to switch background colour as soon ad ahour changes
    applyTimeBlockBcolour();
  },1000);

  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  for (let i = 3; i < 18; i++) {//Retrive event textes from local storage adn render them to its respectiive time block text area every time page loads or refereshed
    var timeBlockId="#hour-"+i;
    var savedSchaduleID="hour-"+i;
    $(timeBlockId).children('textarea').text(localStorage.getItem(savedSchaduleID));
  }

  // TODO: Add code to display the current date in the header of the page.
  var currentDayP=$('#currentDay');
  currentDayP.text(dayjs().format("dddd,  MMMM DD[th]"));
  
  
});
