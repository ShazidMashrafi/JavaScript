var countries = ["Bangladesh", "USA"];
console.log(countries);
console.log(countries[0]);
countries[1]="EU";
console.log(countries);
var l=countries.length;
console.log(l);

// assigning a value to last index+1 adds the element to the end
countries[2]="USA";
console.log(countries);
countries[countries.length]="Canada";
console.log(countries);

// push -> inserts element to end. Returns length of array
countries.push("Russia");
console.log(countries);
// pops -> deletes the last element. Returns the deleted element
countries.pop();
console.log(countries);


//shift -> deletes the firsts element. Returns deleted element
countries.shift();
console.log(countries);

//unshift -> inserts to the front. Returns length
countries.unshift("Bangladesh");
console.log(countries);

var nums=[];
console.log(nums);
nums.push(1);
nums.push("Two");
console.log(nums);