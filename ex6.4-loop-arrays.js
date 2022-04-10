// the function from excercise 3.3
const percentageOfWorld2 = (population) => {
  return ((population / 7900000000) * 100).toFixed(2);
};

// const countries = ["Israel", "Germany", "india", "Scotland"];
const populations = [9600000, 83800000, 1406600000, 5400000];

const populationPercentages = (popArr) => {
  const percentages = [];
  for (i = 0; i < popArr.length; i++) {
    let countryPerc = percentageOfWorld2(popArr[i]);
    percentages.push(countryPerc);
  }
  return percentages;
};

console.log(populationPercentages(populations));
