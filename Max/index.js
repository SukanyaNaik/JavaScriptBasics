const numbers = [1,2,3,4,0];
const count = findMax(numbers);
console.log(count);

function findMax(numbers){
  const array = [...numbers];
  let max = array.splice(0,1)[0];
  
  //for(let element of array)
  //  if(max < element)
  //    max = element
  //return max;
  

  return array.reduce((max, current) => {
    //const occurrence = (current === searchElement) ? 1 : 0;
    //return accumulator + occurrence;
    if(max < current)
      max = current
    return max;
  }, max);
}