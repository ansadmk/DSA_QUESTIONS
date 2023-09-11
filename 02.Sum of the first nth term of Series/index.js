function SeriesSum(n)
{
  var str=0
  for(i=0;i<n;i++){
    if(i!=0){
      str+=1/(i*3+1)
    }else{
      str=1
    }
   
  }
  return str.toFixed(2)
  
}
SeriesSum(1);