const stringsLength = (arr) => {
  let lengthArr = [];
  for (i = 0; i < arr.length; i++) {
    lengthArr.push(arr[i].length);
  }
  return lengthArr;
};

const stringsArr = ["boo", "doooo", "hoo", "ro"];
console.log(stringsLength(stringsArr));
