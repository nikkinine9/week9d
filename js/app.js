var n1 = prompt("Enter first number");
var n2 = prompt("Enter second number");

function add_numbers(a, b) {
    var first = parseInt(a);
    var second = parseInt(b);
    return 5 * (first + second);
}
console.log(add_numbers(n1, n2));

let x = 10;
if (true) {
    let y = 20;
    var z = 30;
    console.log(x + y + z);
}
console.log(x + z);

function unless(test, then) {
    if (!test) then();
}

function repeat(times, body) {
    for (var i = 0; i < times; i++) body(i);
}

repeat(3, function(n) {
    unless(n % 2, function() {
        console.log(n, "is even");
    });
});