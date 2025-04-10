var foods = ["Cake", "Ice cream", "Chocolate", "Bread"];
var nums = [1, 10, 5, 2];

// 1st parameter is element
foods.forEach(function(e){
    console.log(e);
});

// 2nd parameter is index
foods.forEach(function(e, i){
    console.log(`In ${i}: ${e}`);
});

// 3rd parameter is array
foods.forEach(function(e, i, arr){
    console.log(`In ${i}: ${e}`);
    console.log(arr);
});

// For each can also work with outside functions
var print = function(e, i) {
    console.log(`In ${i}: ${e}`);
};

nums.forEach(print); //Needs to be called without brackets