/* if/else */
const isStrongPassword = (password) => {
  if (password.length > 7) {
    return "strong";
  } else {
    return "weak";
  }
};
console.log("using if else:");
console.log(isStrongPassword("liat11"));
console.log(isStrongPassword("liat11234"));

/* ternary */
const isStrongPassword2 = (password) => {
  let answer = password.length > 7 ? "strong" : "weak";
  return answer;
};
console.log("using ternary:");
console.log(isStrongPassword2("liat11"));
console.log(isStrongPassword2("liat11234"));

/*  && operator */

console.log("using && operator:");
const isStrongPassword3 = (password) => {
  let answer = (password.length > 7 && "strong") || (password.length <= 7 && "weak");
  return answer;
};

console.log(isStrongPassword2("liat11"));
console.log(isStrongPassword2("liat11234"));

/* advanced password
 using  ternary and regex. used test method to check if the string contain any of the regex (at least 1 capital letter.) it return true if it matches */
console.log("advanced password:");

const isStrongPassword4 = (password) => {
  // let bigLetters = /[A-Z]/;
  /[A-Z]/.test(password) && password.length > 7
    ? console.log("Very strong") //if up is true, print this, if not do what below
    : password.length > 7
    ? console.log("Strong")
    : console.log("weak");
};

isStrongPassword4("LIat1148");
isStrongPassword4("lalalala");
isStrongPassword4("Llala");
