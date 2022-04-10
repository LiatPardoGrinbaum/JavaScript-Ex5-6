const arr = [];

for (i = 1; i < 101; i++) {
  arr.push(i);
}

console.log(arr);

//1
const arr2 = [...arr]; //copied array so i can use arr in the next excercises too
arr2.fill({ name: "Liat" });
console.log(arr2);

//2

const arr3 = Array.from(arr);
console.log(arr3);

//3 -Convert an array into one object.
const obj = {
  name: "Liat",
  age: "34",
  status: "married",
};

const arr4 = Object.values(obj);
console.log(arr4);

//4 - Convert an array into one object.
//I took the array created on question 2 (arr4)

const obj2 = { ...arr4 };
console.log(obj2);

//5 -Find out if an array is an array.
const arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/* will return true if its an array: */
console.log(Array.isArray(arr5));

//6- a - 4 different ways to copy an array without change the original if modified

console.log("copy of an array that won’t effect the original array if modified.");
/* using concat */
const arrNew1 = [].concat(arr5);
arrNew1.push("hello");
console.log(arrNew1);
console.log(arr5);

/* using slice */
const arrNew2 = arr5.slice(0, 10);
arrNew2.push("hello");
console.log(arrNew2);
console.log(arr5);

/* using spread */
const arrNew3 = [...arr5];
arrNew3.push("hello");
console.log(arrNew3);
console.log(arr5);

/* using Array.from */
const arrNew4 = Array.from(arr5);
arrNew4.push("hello");
console.log(arrNew4);
console.log(arr5);

//6-b
//Create a copy of an array that will effect the original
//array if modified.

console.log("Create a copy of an array that will effect the original array if modified.");
//arr5 is the original. I modified arr6 and it change arr5 as well.
const arr6 = arr5;
arr6.push(11, 12, 13);
console.log(arr6);
console.log(arr5);
