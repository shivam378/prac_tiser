// let arr=[1,2,3,4,5,6];
// let sub=arr.slice(2);
// console.log(sub)
// let arr=[1,2,3,4,5,6];
// let sub=arr.slice(2,5);
// console.log(sub)


// let sarr = ['I' , 'am', 'Iron', 'Man'];
// let lstr= sarr[sarr.length-1];
// let lkdc= lstr.slice(1);
// console.log(lkdc)
function confirmending(str , target){
    let arr=str.split(' ');
    let targetString= arr[arr.length-1];
    let tar= targetString.slice(-target.length);
    if(tar==target)
    {
        return true;
    }
    else
    {
        return false;
    }
}
console.log(confirmending("Bastian" , "n"));