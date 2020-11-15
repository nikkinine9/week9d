function addAndMultiply(a, b) {
    return (a + b) * 5;
}

console.log(addAndMultiply(5, 7));
console.log(addAndMultiply(2, 6));
console.log(addAndMultiply(8, 3));

function lengthChecker(stringToCheck) {
    if (stringToCheck.length > 10) {
        return true;
    } else if (stringToCheck.length <= 10) {
        return false;
    } else {
        console.log("There has been an error!");
    }
}

console.log(lengthChecker("Read a book."));
console.log(lengthChecker("There is an urgent need for understanding how climate change will affect our lives."));
console.log(lengthChecker("My daughter passed in 2014"));



function arrayChecker(arrayToCheck) {
    for (var index = 0; index < arrayToCheck.length; index++) {
        if (arrayToCheck[index].startsWith("ph")) {
            return arrayToCheck[index];
        }
    }
    console.log("No string starts with ph!");
}

console.log(arrayChecker(["phone, cellphone"]));
console.log(arrayChecker(["blah, talking"]));
console.log(arrayChecker(["cellphone, blah, phone"]));