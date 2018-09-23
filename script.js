/* Index of functions
If else: 7
For loop Birds:39

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