const countryToLiveIn = (language, isIsland, population, country) => {
  if (language !== "english" || isIsland === true || population >= 50000000) {
    console.log(`${country} does not meet your criteria`);
  } else {
    console.log(`You should live in ${country}`);
  }
};

countryToLiveIn("hebrew", false, 9200000, "Israel");
countryToLiveIn("english", false, 38000000, "Canada");
