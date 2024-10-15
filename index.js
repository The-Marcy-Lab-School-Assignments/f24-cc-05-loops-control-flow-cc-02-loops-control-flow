//Problem 1

const multiplesOfSixandNine = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 6 === 0 && i % 9 === 0) {
      console.log(i);
    }
  }
};

//Problem 2

const greaterNum = (num1, num2) => {
  if (num1 === num2) {
    return "Both integers are equal.";
  } else if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  } else {
    return null;
  }
};

//Problem 3

const sumOfFourAndSix = () => {
  let sum = 0;
  for (let i = 0; i <= 1000; i++) {
    if (i % 4 === 0 && i % 6 === 0) {
      sum += i;
    }
  }
  return sum;
};

//Problem 4

const oddAndEvenToN = (num) => {
  for (let i = 0; i <= num; i++) {
    if (i % 2 === 0) {
      console.log("Even");
    } else {
      console.log("Odd");
    }
  }
};

//Problem 5

const sumOfNotDivisibleByTen = () => {
  let sum = 0;
  for (let i = 1; i <= 1000; i++) {
    if (i % 10 !== 0) {
      sum += i;
    }
  }
  return sum;
};

//Problem 6

// const greaterNum = (a, b, c, d) => {
//  if (typeof a === "num" && typeof b === "num" && typeof c === "num" && typeof d === "num"){
//       if (){

//       }
//     } else {
//         return null
//     }
// };

// const arr = [1, 2, 2];
// const max = Math.max(...arr);
// console.log(max);

//Bonus 1

const multiplesOfFourAndSix = () => {
  let arr = [];
  for (let i = 0; i < 100; i++)
    if (i % 4 === 0 && i % 6 === 0) {
      arr.push(i);
    }
  return arr;
};
console.log(multiplesOfFourAndSix());
