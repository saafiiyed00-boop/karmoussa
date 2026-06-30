// console.log("hello iyed from console");

// // alert("hello")
// confirm("sure?")
// // prompt("saisir votre nom")
// 

// alert("This is an alert box"); 
// var visitorName = prompt("What's your name : ")
// console.log("le nom du visiteur est :",visitorName)
// var isCoolWithIt = confirm("Are you ok with it?")
// console.log(isCoolWithIt )
// let x;
// x=null;
// console.log(typeof(y))
// var personne={
// name:"iyed",
// age:28,
// istudent:false,

// }
;
// console.log(typeof(personne))
// console.log(personne)
// var num = 0;
// console.log(num)
// num ++
// console.log(num)
// num --
// console.log(num)
// function iyed(nom, prenom) {
	// return nom + " " +prenom;
// }
// console.log(iyed("bonjour" ,"balkis")); 

// nombre
// function multiplication(nom, nb) {
	// return nb * nom;
// }
// console.log(multiplication(3,"bonjour")); 

// function qkkf(jg, eé) {
	// return jg-eé;
// }
// console.log(qkkf("19" ,"29"));

// chaines de caractere
// function hh(nom, nb) {
	// return nom.repeat(nb);
// }
// console.log(hh("bonjour" ,3)); 

// 1_Defining the function

// function checkIfNumber( x ){
    // if ( typeof x === 'number' ){
        // console.log( x + ' is a number.' ); 
    // } else {
        // console.log("Oops that's not a number.");
	// }
// }

// 2_Calling the function

// checkIfNumber(5) // prints “5 is a number.”
// checkIfNumber('5') // doesn't do anything, “5” was passed here as a string (non-numeric value).

// checkIfNumber() // doesn’t do anything, no argument was passed to the function


// 1_Defining the function

// function checkIfNumber( x ){
//     if ( typeof x === 'number' ){
//         console.log( x + ' is a number.' ); 
//     } else {
//         console.log("Oops that's not a number.");
// 	}
// }

// // 2_Calling the function

// checkIfNumber(5) // prints “5 is a number.”

// checkIfNumber('5') // prints “Oops that's not a number”

// checkIfNumber() // prints “Oops that's not a number”




// 1_Defining the function

// function decodeColor( code ) {
//     if ( code === 1 ) {
//         console.log( 'Red' );
//     } else if ( code === 2 ) {
//         console.log( 'Yellow' );
//     } else if ( code === 3 ) {
//         console.log( 'Green' );
//     } else {
//         console.log( 'Unknown code' );
//     }
// }

// // 2_Calling the function

// decodeColor(1) // prints Red

// decodeColor(2) // prints Yellow

// decodeColor(3) // prints Green

// decodeColor('blah') // prints Unknown code

// 1_Defining the function

// function decodeColor( code ) {
//     switch( code) {
// 	case 1:
// 		console.log( 'Red' );
// 		break;
// 	case 2:
// 		console.log( 'Yellow' );
// 		break;
// 	case "x":
// 		console.log( 'Green' );
// 		break;
// 	default:
// 		console.log( 'Unknown code' );
// 	}
// }
// // 2_Calling the function

// decodeColor(1) // prints Red

// decodeColor(2) // prints Yellow

// decodeColor("x") // prints Green

// decodeColor(3) // prints Unknown code
// 1_Defining the function

// function decodeColor( code ) {
//     switch( code) {
// 	case 1:
// 		console.log( 'Red' );		
// 	case 2:
// 		console.log( 'Yellow' );		
// 	case "x":
// 		console.log( 'Green' );		
// 	default:
// 		console.log( 'Unknown code' );
// 	}
// }

// // 2_Calling the function

// decodeColor(2) // prints Yellow 
// // Green 
// // Unknown code
// 1_Defining the function

// function decodeColor( code ) {
//     switch( code) {
// 	case 1:
// 		return 'Red';
// 	case 2:
// 		return 'Yellow';
// 	case "x":
// 		return 'Green';
// 	default:
// 		return 'Unknown code';
// 	}
// }
// // 2_Calling the function

// console.log(decodeColor(2)) // prints Yellow
// /*
// PS: we now have to explicitly console.log the returned value of 
// our function to “see” it. 
// Merely executing the function won’t print anything on the 
// console (although everything is working fine and as it should) 
// */
// Let’s sum the values of a small array
// var numbers = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1]; 

// var sum = 0;
// var i = 0;
// while ( i < numbers.length ) {
//     sum += numbers[i];
//     i += 1;
// }
// console.log( 'The loop was executed ' + i + ' times' );
// // prints The loop was executed 10 times

// console.log(sum);
// // prints 115
// Let’s sum the values of a small array
// var numbers = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1]; 

// var sum = 0;
// var i = 0;
// do {
//     sum += numbers[i];
//     i += 1;
// } while ( i < numbers.length )

// console.log( 'The loop was executed ' + i + ' times' );
// // prints The loop was executed 10 times

// console.log(sum);
// // prints 115
// Let’s sum the values of a small array
// var numbers = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1]; 
// var sum = 0;

// // Using the for… in loop
// for ( var i in numbers) {
//     sum += numbers[i];
// }

// console.log(sum)
// // prints 115
// // Let’s sum the values of a small array
// var numbers = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1]; 
// var sum = 0;

// // Using the for… of loop
// for ( var value of numbers) {
//     sum += value;
// }
// console.log(sum)
// // prints 115
// Let’s sum every second element of the numbers array:
// var numbers = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1]; 
// var sum = 0;
// for ( var i in numbers ) {
//         if ( i % 2 == 0 ) continue;
//         sum += numbers[i]
// }

// console.log(sum);
// // prints 78
// /* 
// PS: Notice that we could've written i += 2 in a simple for loop to jump to every second value. 
// We’re using continue here just for the sake of the example.
//  Whenever i is even, continue moves execution back to the next iteration of i in numbers.
//  */

// /*
// You already know what a break statement looks like, because we learned it when dealing with the switch statement. 
// It is doing the same thing in loops. Suppose we want to break out from the loop whenever the sum exceeds 100:
// */
// var numbers = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1];
// var sum = 0;

// for ( var i in numbers) {
// 	sum += numbers[i];
// 	if ( sum >= 100 ) {
//             break;
//         }
//     }
// console.log(sum)
// // prints 103





































































































































































































