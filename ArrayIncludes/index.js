const numbers = [1,2,3,4];
console.log(hasNumber(numbers, -1));

function hasNumber(numbers, element){
  for(let number of numbers)
    if(number === element)
      return true;
  return false;
}