const people = ["Greg", "Mary", "Devon", "James"];
//1
for (let person of people) {
  console.log(person);
}

//2- removes Greg from the beginning
people.shift();
console.log(people);

//3- removes James from the end
people.pop();
console.log(people);

//4 - add Matt to the beginning
people.unshift("Matt");
console.log(people);

//5 - add my name to the end
people.push("Liat");
console.log(people);

//6
for (let i = 0; i < people.length; i++) {
  if (people[i] === "Mary") {
    console.log(people[i]);
    break;
  }
}

//7
let people2 = people.slice(2);
console.log(people2);

//8

console.log(people.indexOf("Mary"));

//9
console.log(people.indexOf("Foo"));

//10
console.log(people);
people.shift();
people.pop();
people.push("James");
people.unshift("Greg");
console.log(people);

people.splice(2, 1, "Elizabeth", "Artie");
console.log(people);

//11
let withBob = people.concat(["Bob"]);
console.log(withBob);
