var arr = [1, ["a", "b"], 3, 4];
var x;
console.log(arr);
x = arr[1][0];
console.log(x);

arr = [1, ["a",[ "One", "Two"], "c"], 3, 4];
x = arr[1][1][0];
console.log(x);

arr = [1, 2, {Three:"Item 3", Four:"Item 4"}];
console.log(arr);
x = arr[2];
console.log(x);
console.log(x.Three);
x = arr[2].Four;
console.log(x);

arr = ["Item 1", "Item 2", {prop1:"Item 3", prop2:[1, 2, ["a", "b"]]}];
x = arr[2].prop2[2][1];
console.log(x);
x = arr[2]["prop2"][2][1];
console.log(x);