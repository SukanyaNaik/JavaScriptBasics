const numbers = [1,2,3,4];
const output = move(numbers, 0, 5);
console.log(output);

function move(numbers, index, offset){
  const position = index + offset;
  if(position >= numbers.length || position < 0){
    console.error("Invalid offset");
    return;
  }
  let output = [...numbers];
  let element = output.splice(index,1)[0];
  console.log("element - ", element)
  console.log("output - ", output)
  output.splice(position, 0, element)
  return output
}