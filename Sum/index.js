console.log(sum(1, 2, 3, 4));

function sum(...numbers){
  if(DataTransferItemList.length === 1 && Array.isArray(numbers[0]))
    numbers = [...numbers[0]];
  return numbers.reduce((a, b) => a + b);
}