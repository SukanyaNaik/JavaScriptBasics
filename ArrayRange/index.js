const numbers = arrayFromRange(1, 4);
//const numbers = [1,2,3,4];
console.log(numbers);

function arrayFromRange(min, max){
  let output = [];
  for(let i = min; i <= max; i++)
    output.push(i);
  return output;
}