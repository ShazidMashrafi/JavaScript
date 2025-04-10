console.log(`Select and option:
a. Option 1
b. Option 2
c. Option 3`);

choice = prompt();
var txt;

switch(choice)
{
    case "a":
       txt = "Option 1";
       break;
    case "b": 
       txt = "Option 2";
       break;
    case "c": 
       txt = "Option 3";
       break; 
    default:
        txt = "Invalid choice";
        break;
}
console.log(txt);