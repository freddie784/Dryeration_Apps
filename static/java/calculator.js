const lineBreak = document.createElement('br');
function submit() {
  bushels = parseInt(document.getElementsByClassName('totalBushels')[0].value);
  fuelType = document.getElementsByClassName('fuelType')[0].value;
  grainType = document.getElementsByClassName('grainType')[0].value;
cornRange(bushels, fuelType)

};



function cornRange(bushels, fuel) {
  var moistureDiv = document.getElementById('moistureRange');
  moistureDiv.innerHTML = '';
  leftValue(moistureDiv);
  createRange(moistureDiv, 16.0, 35.0)
  rightValue(moistureDiv);
  console.log(bushels, fuel);
}

function createRange(div,start, end, range) {
  var moistureInput = document.createElement('input');
  moistureInput.id = 'moistureInput';
  moistureInput.type = 'range';
  moistureInput.min = (start);
  moistureInput.max = (end);
  moistureInput.step = '.5';
  moistureInput.list = 'tickmarks';
  
  moistureInput.addEventListener('change', function() {
    var range = parseFloat(document.getElementById('moistureInput').value);
    moisturePercent(range);
});
  
div.appendChild(moistureInput);

}

function moisturePercent(range) {
  var input = document.getElementById('moistureInput');
  input.innerHTML = '';

  var moistureRangeNumber = document.createElement('p');
  var moistureBoxDiv = document.getElementById('moistureBox');
  moistureBoxDiv.innerHTML = '';
  moistureRangeDiv = document.createElement('div');
  moistureRangeDiv.id = 'rangeNumber';
  moistureRangeDiv.innerHTML = range;
  
  
  moistureBoxDiv.appendChild(moistureRangeDiv);
  
  
  // moistureRangeNumber.id = 'moistureRangeNumber';
  input.appendChild(lineBreak);
  input.appendChild(moistureRangeNumber);
  moistureRangeNumber.innerHTML = range;

  grainMoisture = parseFloat(moistureRangeNumber.innerHTML);

  calculate(grainMoisture);
};

function calculate (grainMoisture) {

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