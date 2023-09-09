function SeriesSum(n)
{
  var str=1.00
  for(i=0;i<n;i++){
    if(i!=0){
      str+=1/(i*3+1)
    }
   
  }
  console.log(str.toFixed(2));
  return str.toFixed(2)
  
}
SeriesSum(1);