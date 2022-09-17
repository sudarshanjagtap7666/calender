var dt = new Date();
function RenderDate(){
    
    dt.setDate(1);
var day = dt.getDay();
var endDate = new Date(
    dt.getFullYear(),
    dt.getMonth() + 1,
    0
).getDate();
var prevDate = new Date(
    dt.getFullYear(),
    dt.getMonth(),
    0
).getDate();

var today = new Date();

var months = [
    "January","February","March","April",
    "May","June","July","August","September",
    "October","November","December"]
document.getElementById("date_str").innerHTML = dt.toDateString();  //to print day and date
document.getElementById("month").innerHTML = months[dt.getMonth()]; //to print th month name

var cells = "";

for(x = day; x>0; x--){
    cells += "<div class = 'prev_date'>" + (prevDate - x + 1) + "</div>";     //to print the previous date elements
}
for(i = 1; i <= endDate; i++){
    if(i == today.getDate() && dt.getMonth() == today.getMonth()){   // to add the active class at current date at current month only
        cells+= "<div class = 'today'>" + i + "</div>";     //to hold and print the date element
    }else{
        cells+= "<div>" + i + "</div>";     //to hold and print the date element
    }
}

document.getElementsByClassName("days")[0].innerHTML = cells;
}





function moveDate(para){
    if(para == 'prev'){
        dt.setMonth(dt.getMonth() - 1);
        
    }else if(para == 'next'){
        dt.setMonth(dt.getMonth() + 1);
        
    }
    RenderDate();
}