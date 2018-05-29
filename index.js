var katzDeli=[];
var deliCounter=0;
function takeANumber(katzDeliLine){
  deliCounter++;
  katzDeliLine.push(deliCounter);
  return `Welcome you are number ${deliCounter}`
}
  
 function nowServing(katzDeliLine) {
	if (katzDeliLine.length === 0) {
		return 'There is nobody waiting to be served!';
	} else {
		return 'Currently serving ' + katzDeliLine.shift() + '.';
	}
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  var lineNamesandNumbers = [];
  
  for(var i=0; i<katzDeliLine.length; i++) {
    lineNamesandNumbers.push(i+1 + ". "+ katzDeliLine[i]);
  }
  return "The line is currently: " + lineNamesandNumbers.join(', ');
}
     
     
