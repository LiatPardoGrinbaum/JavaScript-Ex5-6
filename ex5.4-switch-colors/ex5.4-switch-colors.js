const colors = (color) => {
  switch (color) {
    case "yellow":
    case "pink":
    case "orange":
      return "light color";

    case "blue":
    case "purple":
    case "brown":
      return "dark color";

    default:
      return "unknown color";
  }
};
console.log(colors("orange"));
console.log(colors("beige"));
