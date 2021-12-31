const numbers = [1,2,3,4,1];
try{
  const count = countOccurrences(true, 1);
  console.log(count);
} catch (e){
  console.log(e.message)
}

function countOccurrences(array, searchElement){
  //let count = 0;
  //for(let element of array)
  //  if(element === searchElement)
  //    count++;
  //return count;
  if(!Array.isArray(array))
    throw new Error("Input is not an array.")

  return array.reduce((accumulator, current) => {
    //const occurrence = (current === searchElement) ? 1 : 0;
    //return accumulator + occurrence;
    if(current === searchElement)
      accumulator++;
    return accumulator;
  }, 0);
}