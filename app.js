const modifiedFood = [pizza, burger, fingerChips, donuts, springRoll];

//### Function #1: Array Slice
function Slice()
{
    var Result = modifiedFood.slice(1,2,3);
    return Result;
}

//### Function #2: Array Splice
function Splice()
{
    var Result = modifiedFood.splice(0,1,"noodles","icecream",2,3,4);
    return Result;  
}

//### Function #3: Filter
var numberArray = [12,324,213,4,2,3,45,4234];
var numArr = [];
function isEven() {
    for (var i = 0; i < numberArray.length; i++) {
        if (numberArray[i] % 2 === 0) {
           return numberArray[i];
        }
    }
}

function isPrime()
{
  numArr = numberArray.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
          if (number % i === 0) 
          numArr.push(number);
          return numArr;
        }
      });
}

//### Function #4: Reject
function nonPrime()
{
  numberArray.map((number) => {
    for (let i = 2; i < number; i++) {
        if(number % i === 0) {
            let index = numberArray.indexOf(number);
            return numberArray.splice(index, 1);       
        }
      }
  });
}

//### Function #5: Lambda


//### Function #6: Map
const myArray = [11, 34, 20, 5, 53, 16];
var square = [];

function findSquareOfNumbers()
{
   square = myArray.map(function(value){
    return Math.pow(value,2);
  });
  
  return square;
}

//### Function #7: Reduce