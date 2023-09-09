function isIsogram(str){
    const st=str.toLowerCase() 
    const b=st.split("")
    const set=new Set(b)
    const arr=[...set].join("")
    return arr==st
      
  }

