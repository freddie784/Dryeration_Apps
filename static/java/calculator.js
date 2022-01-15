function submit() {
  bushels = document.getElementsByClassName('totalBushels')[0].value;
  fuelType = document.getElementsByClassName('fuelType')[0].value;
  grainType = document.getElementsByClassName('grainType')[0].value;
cornRange(bushels, fuelType)

};

// type = "range" min='16' max='35' step='.5' list = 'tickmarks'

function cornRange(bushels, fuel) {
  document.getElementsByClassName('grainMoisture').type = 'range';
  document.getElementsByClassName('grainMoisture').min = '16';
  document.getElementsByClassName('grainMoisture').max = '35';
  document.getElementsByClassName('grainMoisture').step = '.5';
  document.getElementsByClassName('grainMoisture').list = 'tickmarks';
  moistureDriedTo = document.getElementsByClassName('grainMoisture')[0].value;
  console.log(bushels)
}

function calculateSoybeans(bushels) {

}





per_bushel_drying_cost = .01;
heat_cost = .73;