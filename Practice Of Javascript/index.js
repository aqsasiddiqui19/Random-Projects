// Variable and Values 

// var myName = 'Saira';
// var myAge = 23;
// var _myClass ='12th';
// var $myName ="Sara";
// var 1myName ="Sara";
// var 1_my__Name ="Sara";
// console.log('myName, myAge, _myClass', $myName);


// Data Types In Javaswcript 

var myName = "Sara"; //(String)
console.log(myName);
//Type of Operator:
console.log(typeof(myName)); 

var myAge = 26; //(Number)
console.log(myAge);
console.log(typeof(myAge));

var Iamstudent = true; //(Boolean)
console.log(Iamstudent);
console.log(typeof(Iamstudent));

//-----------Practice---------//

var data = 10 + '26'; //(String)
console.log(data);
console.log(typeof(data)); //('1026')

var data = "Java" + "Script"; //(string)
console.log(data);
console.log(typeof(data)); //(JavaScript)

var data = "" + ""; //(string)
console.log(data);
console.log(typeof(data)); //("")

var data = "" + 0; //(string)
console.log(data);
console.log(typeof(data)); //("0")

var data = 9 - '5'; //(number) (bug)
console.log(data);
console.log(typeof(data)); //(4)

var data ="15" - "10"; //(number)
console.log(data);
console.log(typeof(data)); //(5)

var data ="Java" - "Script"; //(number)
console.log(data);
console.log(typeof(data)); //(NaN)

var data =  true + true;//(number)
console.log(data);
console.log(typeof(data));//(2)

var data =  true - true;//(number)
console.log(data);
console.log(typeof(data));//(0)

var data =  true - false;//(number)
console.log(data);
console.log(typeof(data));//(1)

var data = false + true;//(number)
console.log(data);
console.log(typeof(data));//(1)

var data = false - true;//(number)
console.log(data);
console.log(typeof(data));//(-1) (add greater sign)
 
Represent in Javascript
// 1 true
// 0 false

//-----Null,Undefined and NaN-----//

var noperson ="null";  // 2nd bug
console.log(noperson);
console.log(typeof(noperson)); // object

var marks; // value is not given-----undefined
console.log(marks)
console.log(typeof(marks)); //undefined

var data ="Java" - "Script"; //(number)
console.log(data);
console.log(typeof(data)); //(NaN)

var myPhoneNumber = 924587985; //(number)
console.log(isNaN(myPhoneNumber));

//---------Reassignment Value ------------//

let Refreshment = 'Tic'
x  = 'Tac';
x = 'Toe';

let color = 'red';
color ='black';

let name1 = 'Sara';
let name2 = 'name1';
name1 = 'seema';

let nameA = 'Sara';
let nameB = 'Saima';
nameA = 'nameC';
nameB = 'nameA'

let namex = 'laurel';
let namey = 'Hardy';
let namez = 'namey';
namey = namex;
namex = namez;



