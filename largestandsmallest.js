let a =[2,3,9,1,11,87];
function las(arr){
    let largest=-1;
    let smallest =100000;
    for(let i=0; i<a.length ; i++){
        if( arr[i]>largest){
            largest=arr[i];
        }
        if(arr[i]<smallest){
            smallest=arr[i];
        }
    }
    console.log(smallest +  " "+ largest);
}
las(a);