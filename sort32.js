  var array  =  [] ;
function NR(){
    return Math.floor(Math.random()*10000+1)
  } 
  for(let i = 0; i < 10000; i++) 
    array[i] = NR()
  console.time("time");
array.sort();
  console.timeEnd("time");
