function SeriesSum(n)
{
  var str=""
  for(i=0;i<n;i++){
    if(i!=0){
      str+="+ 1/"+`${i*3+1}`
    }else if(i=0){
      str="1"
    }
   
  }
  console.log(str)
  
}