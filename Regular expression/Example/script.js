let re, str;

//postal code
re = /^[0-9]{4}$/;
str = "1234";

// Phone number
// +8801234567890, 01234567890, 8801234567890
re = /^01[0-9]{9}$/;
str = "01234567890";

re = /^(\+88)?01[0-9]{9}$/;  // +88 is optional
re = /^(\+)?(88)?01[0-9]{9}$/; // both + and 88 are optional

// Email address
// Shazid.mash01@gov.bd.com
re = /^([a-zA-Z0-9])+$/; //allows multiple digit and letters
str = "Shazidmash01"
re = /^([a-zA-Z0-9]\.?)+$/; //allows '.' , but also allows '.' at end
str = "Shazid.mash01";
str = "Shazid.mash01.";
re = /^([a-zA-Z0-9]\.?)+[^\.]$/;
str = "Shazid.mash01";
re = /^([a-zA-Z0-9]\.?)+[^\.]@$/; // allows @
str = "Shazid.mash01@";
re = /^([a-zA-Z0-9]\.?)+[^\.]@([a-zA-Z0-9]\.?)+[^\.]$/;
str = "Shazid.mash01@gov.bd.com"; //allows the correct email

 

console.log(re.test(str));