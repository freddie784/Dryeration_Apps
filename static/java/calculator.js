//create variable for line breaks
const lineBreak = document.createElement('br');

//function for when someone clicks on the submit button to submit bushels
function submit() {
  var bushels = parseInt(document.getElementsByClassName('totalBushels')[0].value);
  var fuelType = document.getElementsByClassName('fuelType')[0].value;
  var grainType = document.getElementsByClassName('grainType')[0].value;
cornRange(bushels, fuelType)

};


//function to create moisture range for corn
function cornRange(bushels, fuel) {
  var moistureDiv = document.getElementById('moistureRange');
  moistureDiv.innerHTML = '';
  leftValue(moistureDiv);
  createRange(moistureDiv, 16.0, 35.0)
  rightValue(moistureDiv);
  console.log(bushels, fuel);
}

//function to create ranges
function createRange(div,start, end, range) {
  var moistureInput = document.createElement('input');
  moistureInput.id = 'moistureInput';
  moistureInput.type = 'range';
  moistureInput.min = (start);
  moistureInput.max = (end);
  moistureInput.step = '.5';
  moistureInput.list = 'tickmarks';
  
  // function to call function that monitors rangeValue
  moistureInput.addEventListener('change', function() {
    var range = parseFloat(document.getElementById('moistureInput').value);
    moisturePercent(range);
});
  
div.appendChild(moistureInput);

}
// function that monitors rangeValue
function moisturePercent(range) {
  //get range number
  var input = document.getElementById('moistureInput');
  input.innerHTML = '';
//create label to show range number
  var moistureRangeNumber = document.createElement('p');
  var moistureBoxDiv = document.getElementById('moistureBox');
  moistureBoxDiv.innerHTML = '';
  moistureRangeDiv = document.createElement('div');
  moistureRangeDiv.id = 'rangeNumber';
  moistureRangeDiv.innerHTML = range;
  
//add label to html
  moistureBoxDiv.appendChild(moistureRangeDiv);
  input.appendChild(lineBreak);
  input.appendChild(moistureRangeNumber);
  moistureRangeNumber.innerHTML = range;
//get number from range and submit to function
  grainMoisture = parseFloat(moistureRangeNumber.innerHTML);
  calculate(grainMoisture);
};
//adding Drying costs display drying costs
function showCosts(totalDryingCost){
  var costDiv = document.createElement("div");
  var costNumber = document.createElement("a");
  var moistureBoxDiv = document.getElementById('moistureBox');
  moistureBoxDiv.appendChild(lineBreak);
  moistureBoxDiv.appendChild(costDiv)
  costDiv.appendChild(costNumber);
  costNumber.innerHTML = Math.round(parseFloat(totalDryingCost));
}

function calculate (grainMoisture) {

  if (grainMoisture == 16.0){
    bushels = parseInt(document.getElementsByClassName('totalBushels')[0].value);
    let dryingCostperBushel = .007;
    totalDryingCost = bushels * dryingCostPerBushel;
    showCosts(totalDryingCost)
  }	
  if (grainMoisture == 16.5){
    bushels = parseInt(document.getElementsByClassName('totalBushels')[0].value);
    let dryingCostperBushel = .011;
    totalDryingCost = bushels * dryingCostPerBushel;
    showCosts(totalDryingCost)
  }		
  if (grainMoisture == 17.0){
    bushels = parseInt(document.getElementsByClassName('totalBushels')[0].value);
    let dryingCostperBushel = .014;
    totalDryingCost = bushels * dryingCostPerBushel;
    showCosts(totalDryingCost)
  }		
  if (grainMoisture == 17.5){
    bushels = parseInt(document.getElementsByClassName('totalBushels')[0].value);
    let dryingCostperBushel = .018;
    totalDryingCost = bushels * dryingCostPerBushel;
    showCosts(totalDryingCost)
  }		
  if (grainMoisture == 18.0){
    bushels = parseInt(document.getElementsByClassName('totalBushels')[0].value);
    let dryingCostperBushel= .022;
    totalDryingCost = bushels * dryingCostPerBushel;
    showCosts(totalDryingCost)
  }		
  if (grainMoisture ==18.5){
    bushels = parseInt(document.getElementsByClassName('totalBushels')[0].value);
    let dryingCostperBushel = .025;
    totalDryingCost = bushels * dryingCostPerBushel;
    showCosts(totalDryingCost)
  }	
  if (grainMoisture ==19.0)	{
    bushels = parseInt(document.getElementsByClassName('totalBushels')[0].value);
    let dryingCostperBushel = .029;
    totalDryingCost = bushels * dryingCostPerBushel;
    showCosts(totalDryingCost)
  }	
  if (grainMoisture == 19.5){
    bushels = parseInt(document.getElementsByClassName('totalBushels')[0].value);
    let dryingCostperBushel = .033;
    totalDryingCost = bushels * dryingCostPerBushel;
    showCosts(totalDryingCost)
  }		
  if (grainMoisture == 20.0){
    bushels = parseInt(document.getElementsByClassName('totalBushels')[0].value);
    let dryingCostPerBushel = .037;
    totalDryingCost = bushels * dryingCostPerBushel;
    showCosts(totalDryingCost)
  }			
  if (grainMoisture == 20.5){
    bushels = parseInt(document.getElementsByClassName('totalBushels')[0].value);
    let dryingCostperBushel = .041;
    totalDryingCost = bushels * dryingCostPerBushel;
    showCosts(totalDryingCost)
  }		
  if (grainMoisture == 21.0){
    bushels = parseInt(document.getElementsByClassName('totalBushels')[0].value);
    let dryingCostPerBushel = .045;
    totalDryingCost = bushels * dryingCostPerBushel;
    showCosts(totalDryingCost)
  }	
  if (grainMoisture == 21.5){
    bushels = parseInt(document.getElementsByClassName('totalBushels')[0].value);
    let dryingCostPerBushel = .049;
    totalDryingCost = bushels * dryingCostPerBushel;
    showCosts(totalDryingCost)
  }	
  if (grainMoisture == 22.0)	{
    bushels = parseInt(document.getElementsByClassName('totalBushels')[0].value);
    let dryingCostPerBushel = .053;
    totalDryingCost = bushels * dryingCostPerBushel;
    showCosts(totalDryingCost)
  }	
  if (grainMoisture == 22.5){
    bushels = parseInt(document.getElementsByClassName('totalBushels')[0].value);
    let dryingCostPerBushel = .057;
    totalDryingCost = bushels * dryingCostPerBushel;
    showCosts(totalDryingCost)
  }	
  if (grainMoisture == 23.0){
    bushels = parseInt(document.getElementsByClassName('totalBushels')[0].value);
    let dryingCostPerBushel = .061;
    totalDryingCost = bushels * dryingCostPerBushel;
    showCosts(totalDryingCost)
  }	
  if (grainMoisture == 23.5){
    bushels = parseInt(document.getElementsByClassName('totalBushels')[0].value);
    let dryingCostPerBushel = .0655;
    totalDryingCost = bushels * dryingCostPerBushel;
    showCosts(totalDryingCost)
  }	
  if (grainMoisture == 24.0){
    bushels = parseInt(document.getElementsByClassName('totalBushels')[0].value);
    let dryingCostPerBushel = .07;
    totalDryingCost = bushels * dryingCostPerBushel;
    showCosts(totalDryingCost)
  }	
  if (grainMoisture == 24.5){
    bushels = parseInt(document.getElementsByClassName('totalBushels')[0].value);
    let dryingCostPerBushel = .0745;
    totalDryingCost = bushels * dryingCostPerBushel;
    showCosts(totalDryingCost)
  }	
  if (grainMoisture == 25.0){
    bushels = parseInt(document.getElementsByClassName('totalBushels')[0].value);
    let dryingCostPerBushel = .079;
    totalDryingCost = bushels * dryingCostPerBushel;
    showCosts(totalDryingCost)
  }	
  if (grainMoisture == 25.5){
    bushels = parseInt(document.getElementsByClassName('totalBushels')[0].value);
    let dryingCostPerBushel = .0835;
    totalDryingCost = bushels * dryingCostPerBushel;
    showCosts(totalDryingCost)
  }	
  if (grainMoisture == 26.0){
    bushels = parseInt(document.getElementsByClassName('totalBushels')[0].value);
    let dryingCostPerBushel = .088;
    totalDryingCost = bushels * dryingCostPerBushel;
    showCosts(totalDryingCost)
  }	
  if (grainMoisture == 26.5){
    bushels = parseInt(document.getElementsByClassName('totalBushels')[0].value);
    let dryingCostPerBushel = .0925;
    totalDryingCost = bushels * dryingCostPerBushel;
    showCosts(totalDryingCost)
  }	
  if (grainMoisture == 27.0){
    bushels = parseInt(document.getElementsByClassName('totalBushels')[0].value);
    let dryingCostPerBushel = .097;
    totalDryingCost = bushels * dryingCostPerBushel;
    showCosts(totalDryingCost)
  }	
  if (grainMoisture == 27.5){
    bushels = parseInt(document.getElementsByClassName('totalBushels')[0].value);
    let dryingCostPerBushel = .102;
    totalDryingCost = bushels * dryingCostPerBushel;
    showCosts(totalDryingCost)
  }	
  if (grainMoisture == 28.0){
    bushels = parseInt(document.getElementsByClassName('totalBushels')[0].value);
    let dryingCostPerBushel = .107;
    totalDryingCost = bushels * dryingCostPerBushel;
    showCosts(totalDryingCost)
  }	
  if (grainMoisture == 28.5){
    bushels = parseInt(document.getElementsByClassName('totalBushels')[0].value);
    let dryingCostPerBushel = .112;
    totalDryingCost = bushels * dryingCostPerBushel;
    showCosts(totalDryingCost)
  }	
  if (grainMoisture == 29.0){
    bushels = parseInt(document.getElementsByClassName('totalBushels')[0].value);
    let dryingCostPerBushel = .117;
    totalDryingCost = bushels * dryingCostPerBushel;
    showCosts(totalDryingCost)
  }	
  if (grainMoisture == 29.5){
    bushels = parseInt(document.getElementsByClassName('totalBushels')[0].value);
    let dryingCostPerBushel = .122;
    totalDryingCost = bushels * dryingCostPerBushel;
    showCosts(totalDryingCost)
  }	
  if (grainMoisture == 30.0){
    bushels = parseInt(document.getElementsByClassName('totalBushels')[0].value);
    let dryingCostPerBushel = .127;
    totalDryingCost = bushels * dryingCostPerBushel;
    showCosts(totalDryingCost)
  }	
  if (grainMoisture == 30.5){
    bushels = parseInt(document.getElementsByClassName('totalBushels')[0].value);
    let dryingCostPerBushel = .132;
    totalDryingCost = bushels * dryingCostPerBushel;
    showCosts(totalDryingCost)
  }	
  if (grainMoisture == 31.0){
    bushels = parseInt(document.getElementsByClassName('totalBushels')[0].value);
    let dryingCostPerBushel = .137;
    totalDryingCost = bushels * dryingCostPerBushel;
    showCosts(totalDryingCost)
  }	
  if (grainMoisture == 31.5){
    bushels = parseInt(document.getElementsByClassName('totalBushels')[0].value);
    let dryingCostPerBushel = .1425;
    totalDryingCost = bushels * dryingCostPerBushel;
    showCosts(totalDryingCost)
  }	
  if (grainMoisture == 32.0){
    bushels = parseInt(document.getElementsByClassName('totalBushels')[0].value);
    let dryingCostPerBushel = .148;
    totalDryingCost = bushels * dryingCostPerBushel;
    showCosts(totalDryingCost)
  }	
  if (grainMoisture == 32.5){
    bushels = parseInt(document.getElementsByClassName('totalBushels')[0].value);
    let dryingCostPerBushel = .1535;
    totalDryingCost = bushels * dryingCostPerBushel;
    showCosts(totalDryingCost)
  }	
  if (grainMoisture == 33.0){
    bushels = parseInt(document.getElementsByClassName('totalBushels')[0].value);
    let dryingCostPerBushel = .159;
    totalDryingCost = bushels * dryingCostPerBushel;
    showCosts(totalDryingCost)
  }	
  if (grainMoisture == 33.5){
    bushels = parseInt(document.getElementsByClassName('totalBushels')[0].value);
    let dryingCostPerBushel = .165;
    totalDryingCost = bushels * dryingCostPerBushel;
    showCosts(totalDryingCost)
  }	
  if (grainMoisture == 34.0){
    bushels = parseInt(document.getElementsByClassName('totalBushels')[0].value);
    let dryingCostPerBushel = .170;
    totalDryingCost = bushels * dryingCostPerBushel;
    showCosts(totalDryingCost)
  }	
  if (grainMoisture == 34.5){
    bushels = parseInt(document.getElementsByClassName('totalBushels')[0].value);
    let dryingCostPerBushel = .176;
    totalDryingCost = bushels * dryingCostPerBushel;
    showCosts(totalDryingCost)
  }	
  if (grainMoisture == 35.0){
    bushels = parseInt(document.getElementsByClassName('totalBushels')[0].value);
    let dryingCostPerBushel = .182;
    totalDryingCost = bushels * dryingCostPerBushel;
    showCosts(totalDryingCost)

  }	

};

function leftValue(div) {
  var leftValue = document.createElement('a');
  leftValue.setAttribute('class', 'rangeValue')
  div.appendChild(leftValue);
  leftValue.innerHTML = '16';

}

function rightValue(div) {
  var rightValue = document.createElement('a');
  rightValue.setAttribute('class', 'rangeValue');
  div.appendChild(rightValue);
  rightValue.innerHTML = '35';
}

function calculateSoybeans(bushels) {

}





per_bushel_drying_cost = .01;
heat_cost = .73;