console.log("Hello!")
const row = 5;

for(let i = 1; i <= row; i++)
{
  let pattern = '';
  for(let j = 0; j < i; j++){
    pattern += '*';
  }
  console.log(pattern);
}