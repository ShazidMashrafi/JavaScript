let re,str;

// Square brackets -> character set
re = /h[ea]llo/; // Must be one of the characters inside brackets
re = /[HA]ello/;
re = /^[he]llo/; // Must start with any of the characters inside brackets
re = /[^he]ello/; // Anything those inside brackets;
re = /[a-f]ello/; // anything between a to f
re = /^[A-Z]/;  // First letter must be uppercase
re = /^[A-z]/; // First letter must be a letter
re = /^[A-Za-z]/; // First letter must be a letter
re = /^[0-9]/; // First letter must be a digit 
re = /^[0-9]ello/; // any digit from 0 to 9 + ello must be in string
re = /[^0-9]elllo/; // Not digit
re = /[0-9][0-9]hello/; // 2 digit

// Braces{} -> Quantifier
re = /hel{3}o/;  // there needs to be 3 l's
re = /hel{2,5}o/; // l needs to be 2 to 5 times
re = /hel{2,}o/; // l needs to be 2 or more times

// Parenthesis -> grouping
re = /^([0-9]){3}hello/; //first 3 characters needs to be digits
re = /^([0-9]){5}/; // re = /^[0-9][0-9][0-9][0-9][0-9]/;



str = "hello"; 
str = "tello";
str = "1hello";
str = "10hello";
str = "hello";
str = "123hello";
str = "12345";

//Checking a phone number is Bangladeshi or not
re = /^01[0-9]{9}$/;
re = /^\+8801[0-9]{9}$/;
str = "+8801777777777";

// 2x5x3x // Random digit followed by x 3 times
re = /^([0-9]x){3}/;
str = "1x7x9x";

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