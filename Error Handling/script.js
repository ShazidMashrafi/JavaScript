console.log("Before Error!");

try {
    test();
} catch(err) {  //catches error and stores in err
    console.log(err); //if no error catch block doesn't execute
    console.log(err.message); //shows simplified output
    console.log(err.name);
} finally {
    console.log("Inside finally");
}

console.log("After error");