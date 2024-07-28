let myString = "  Day la chu trong \"nhay kep\"  ";
// let myString2 = 'Day la chu trong \'nhay kep\'';
console.log(myString);


//Length
const strLength = myString.length;
console.log(strLength);

//Get a character at a position
for(let index = 0; index < strLength; index++){
    // console.log(myString.charAt(index));
    // console.log(typeof myString.charAt(index));
}

//Get rid of spaces at the beginning and the end
let trimStr = myString.trim();
console.log(trimStr.length);
console.log(myString);
console.log(trimStr);


//Replace
let targetString = "tmoi Mnmay gmap nMhaum 7h";
let decodeString = targetString.replaceAll("m", "");
console.log(decodeString);

//Regex -> Regular Expression (String Regular Expression)
//g: global
//i: case-insensitive
let decodeStringWithReplace = targetString.replace(/m/gi, "");
console.log(decodeStringWithReplace);

//Total cooking time: 200mins (UI)
//DB -> docIdCooking Recipe -> {total: 200, factor: minuter} (BE)

let uiString = "200mins";
let uiStringWithNumber = uiString.replace(/[^0-9]/gi, ""); //200
// let uiStringWithNumber = uiString.replace(/[^0-9]/gi, ""); //mins
console.log(uiStringWithNumber);

//backstick -> ` | String Template
console.log(`${myString} something else ${uiString}`);

// concat: concatenate
// +
// .concat()

console.log('Hello, ' + ' ' + 'how are you?');
console.log('Hello, '.concat(' ', 'how are you?'));

//Substring
let strTobeCut = 'https://sdetpro.com';
//Inclusive
let startIndex = 0;
//Exclusive
let endIndex = 5;
let subStr = strTobeCut.substring(startIndex, endIndex);
console.log(subStr);

//split
console.log(strTobeCut.split('://'));