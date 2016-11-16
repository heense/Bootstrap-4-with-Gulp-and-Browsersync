// function plus(a, b) {
//     return(
//         console.log(a+b),
//         console.log(this),
//         console.log(arguments)
//
//     );
// }



// plus(2,2);
// var calc = {
//     status: 'Awsome',
//     plus: function(a, b) {
//         return (
//             console.log(this),
//             console.log(a + b),
//             console.log(arguments),
//             console.log(this.status)
//         )
//     }
// }
// calc.plus(2, 2);


var Dog = function() {
    var name, breed;
    console.dir(this);
}
firstDog = new Dog;
firstDog.name = "Rover";
firstDog.breed = "Diberman";

secondDog = new Dog;
secondDog.name = "Fluffy";
secondDog.breed = "Poodle";


console.log(firstDog.name);
console.log(secondDog.name);
