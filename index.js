var katzDeli = [];
var counter = 0;

function takeANumber (katzDeliLine) {
//if (katzDeliLine.length > 0);{
    //katzDeliLine.push(katzDeliLine[i]);
    counter ++;
    return ('Welcome,  You are number ' +  counter + ' in line.')
}

function nowServing (katzDeliLine) { 
if(katzDeliLine.length <= 0) { 
return 'There is nobody waiting to be served!'; 
}
var customer = katzDeliLine.shift(); 
return "Currently serving " + customer + "."; 
}


function currentLine (katzDeliLine) {
if (katzDeliLine.length <= 0) {
  return "The line is currently empty.";
}
var customerAndNumber = [];
for (var i=0; i < katzDeliLine.length; i++) {
customerAndNumber.push((i + 1) + ". " + katzDeliLine[i])
}
return "The line is currently: " + customerAndNumber.join(", "); 
}