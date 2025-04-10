let re, str;

// Short hand character classes

// '\w' looks for word characters(alpha numeric or underscore)
re = /\w/; 
str = "019";
str = "Sha019";
str = "*&*%";
str = "*976"

re = /^\w/;
str = "019";
str = "sha12";
str = "&82";
re = /\w+/; // one or more;

// '\W' -> looks for non word characters
re = /\W/;
str = "Shazid";
str = "091^";
re = /\W+/; // one or more

// '\d' looks for digits
re = /\d/;
str = "Shazid";
str = "019";
re = /\d+/; //one or more
 
// '\D' looks for non digits
re = /\D/;
str = "0128";
str = "01s";

// '\s' looks for spaces
re = /\s/;
str = "Shazid";
str = "shazid mashrafi";

//'\S' looks for non spaces
re = /\S/;
str = "Shazid";
str = " ";

// '\b' ensures a space
re = /hello\b/;
str = "hello world";
str = "hello2 world";

//Assertions (like conditions)
re = /x(?=y)/; // x is  immediately followed by y
str = "xoifoisdf";
str = "fsdhfxyjsfds";
str = "xabcy";
re = /ab(?=cd)/; // ab is immediately followed by cd
str = "abfdsfsd";
str = "abcddfd";
re = /ab(?!cd)/; // ab is not followed by cd


reTest(re, str);
function reTest(re,str) {
    if(re.test(str)) {
        console.log(`${str} matches ${re.source}`);
    }
    else {
        console.log(`${str} doesn't match ${re.source}`);
    }
}