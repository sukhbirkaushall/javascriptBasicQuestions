// sorts the words alphabetically

let string = "This is a Testing String";
console.log(string)

let strArray = string.split(' ');
let strArraySort = strArray.sort();
console.log(strArraySort);

let sortedString = strArraySort.join(' ')
console.log(sortedString);
