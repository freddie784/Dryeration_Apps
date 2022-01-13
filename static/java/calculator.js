var number_of_bushels = document.querySelector('totalBushels')

function submit(number_of_bushels) {
  console.log(number_of_bushels)
};

d3.select("button").on("click", () => {
  let number_of_bushels = document.getElementsByClassName('totalBushels')[0].value;
  submit(number_of_bushels)
});





per_bushel_drying_cost = .01;
heat_cost = .73;