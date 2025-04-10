// map creates a new array from array using iteration
var foods = ["Cake", "Ice cream", "Chocolate", "Bread"];
var nums = [1, 10, 5, 2];


// Parameters: first -> element, second -> index, third -> array
function add(item) {
    return `${item} is a food`;
}

var arr =  foods.map(add);
console.log(arr);

var arr_sqr = nums.map(function(item){
    return item*item;
})
console.log(arr_sqr);