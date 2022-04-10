const arr = [1, 7, 3, 0, -5, 7, 3, 9];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//how could it work without declaring or using num inside the loop?!
const arrayLength = (arrName) => {
  let count = 0;
  for (num of arrName) {
    count += 1;
  }
  return count;
};

console.log("the array's length is", arrayLength(arr));

//used for of loop, could also used regular for loop ()
const arraySum = (arrName) => {
  let count = 0;
  for (let num of arrName) {
    count += num;
  }
  return count;
};

console.log("the array's sum is", arraySum(arr));

const arrayMulti = (arrName) => {
  let multi = 1;
  for (let num of arrName) {
    multi *= num;
  }
  if (multi === -0) {
    multi = 0;
  }
  return multi;
};

console.log("the array's numbers multiplication is", arrayMulti(arr));
