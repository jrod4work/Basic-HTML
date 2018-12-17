/* Index of functions
clear console: the ban circle
If else: 8
Big or small:41
Birds: 56
Name and Age: 82
Id Card:98


*/

function myFunction() {
var inputGrade = prompt("Enter a grade:")

var numberGrade = parseInt(inputGrade);

var letterGrade;



// Add your code below
if (numberGrade >= "90") {
    letterGrade = ("A");
}

else if (numberGrade >= "80") {
    letterGrade = ("B");
}
else if (numberGrade >= "70") {
    letterGrade = ("C");
}
else if (numberGrade >= "60") {
    letterGrade = ("D");
}
else {
    letterGrade = ("F");
}


console.log(letterGrade);

}

function calculateNumbers(){
    var number1 = 10;
    var number2 = 3;
    var number3 = number1 + number2;

    if (number3 >= 10){
        console.log("Big number");
        
    }
    else {
        console.log("Small number");
    }
}


function birds() {

let awesomeBirds = ['Bluebird', 'Roadrunner', 'DesertDove', 'Pigeon','Bluebird']

    for(let i=0; i< awesomeBirds.length; i++) {
        if (awesomeBirds[i] === 'Bluebird')
        
            console.log ('Bluebirds are so beautiful');
        
        
        else if (awesomeBirds[i] === 'Roadrunner') {
           console.log('This is a Roadrunner'); }
            

        else if (awesomeBirds[i] === 'DesertDove'){
            console.log ('This is an unknown specie')
        }
        else {
            console.log ('This is probably a Pigeon');
            }
        }

    }

    let btn = document.getElementById('btn');

    function  input() {
        let first = document.getElementById('first').value;
        let age = parseInt(document.getElementById('age').value);
        age += 2;
        console.log (first);
        console.log (age);
    }

    btn.addEventListener ('click', input);
    // the first one is the event, and the second is a function



    function idCard(){
        var firstName = document.getElementById('firstName').value;
        var lastName = document.getElementById('lastName').value;
        var age = document.getElementById('age1').value;
        var phone = document.getElementById('phoneNumber1').value; 
        var address = document.getElementById('address').value;
       

        var postFullName = firstName + " " + lastName;
        document.getElementById('postFullName').innerHTML = 'Name: ' + postFullName;
        
        var postAge = age;
        document.getElementById('postAge').innerHTML = 'Age: ' + postAge;

        var postPhone = phone;
        document.getElementById('postPhone').innerHTML = 'Phone Number: ' + postPhone;

        var postAddress = address;
        document.getElementById('postAddress').innerHTML = 'Address: ' + postAddress;
       
        }

    