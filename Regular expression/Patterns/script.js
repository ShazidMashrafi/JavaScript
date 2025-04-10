let re;
let str;
//Literal character. Has to be exactly in the string.
re = /llo/i;

// Meta characters
re = /^hello/; // Must start with
re = /hello&/; // Must end with
re = /^hello&/; // Must start and end with
re = /h.llo/; // '.' cna be any character
re = /h*llo/; // Zero or more times a character;
re = /he?llo/; // the character before '?' is optional. some other character is not allowed 
re = /he?a?llo/; // it can do multiple characters
re = /hello\?/; // '\' is a escape sequence

str = "hello world";
str = "hello hello";
str = "hello";
str = "hillo world";
str = "heello  world";
str = "hllo world";
str = "hallo"

console.log(re.exec(str));
reTest(re,str);

function reTest(re,str) {
    if(re.test(str)) {
        console.log(`${str} matches ${re.source}`);
    }
    else {
        console.log(`${str} doesn't match ${re.source}`);
    }
}