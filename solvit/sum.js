function sumOfArray(x){
    let s=0;
    for(let i=0; i<x.length; i++){
        s=s+x[i];
    }
    console.log(s);
}
sumOfArray([2,5,8,5,9,15]);