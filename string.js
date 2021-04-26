let name = "I am Iron man";
//console.log(name);
let strArray = name.split(' ');
console.log(strArray);
let biggest = 0;
for (let i = 1; i < strArray.length; i++) {

    if (strArray[i].length > biggest) {
        biggest = strArray[i].length;
    }

}
console.log(biggest)