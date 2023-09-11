function fakeBin(x){
    const a=x.split("")
    for(i=0;i<a.length;i++){
      parseInt(a[i])<5 ? a[i]="0" : a[i]="1"
    }
     return a.join("")
    }
console.log(fakeBin("12345678909876543"))