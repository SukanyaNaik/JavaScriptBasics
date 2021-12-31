const numbers = [1,2,3,4];
const output = except(numbers, [1])
console.log(output);

function except(numbers, array){
  let output = [];
  for(let element of numbers)
    if(array.indexOf(element) < 0) // OR - if(!array.includes(element))
      output.push(element);
  return output
}