console.log("homework js datatypes");

// Answer the Following
// For each of the following, write which datatypes you would use to represent the data, and then give a small example of the data structure:
//
// A light switch that can be either on or off.
//
booleans true or false "light switch on = true"
//
// A user's email address.
//
an array, a string method with quotes, ('me@gmail,com')
//
// A spaceship with a hull, laser blasters, tractor beam, and warp drive.
//
const Object => {
  hull: "metal",
  laser blasters: "5.0",
  tractor beam: "set to kill",
  warp drive: "20 parsects"
}
//
// A list of student names from our class.
//
const Array = ['jessa', 'ryan', 'chris', 'timothy', 'daniel', 'ect...']
//
// A list of student names from our class, each with a location.
//
Array with properties and values / nested with objects
//
const Array = [{
  name: 'jessa',
  city: 'st augustine',
};
{
  name: 'chris',
  city: 'denver',
}
{
  name: 'timothy',
  city: 'austin',
}]

//
// A list of student names from our class, each with a location and each with a list of favorite tv shows.

Array with properties and values / nested also... what is the difference? are they each objects?

name: 'jessa',
city: 'st augustine',
tv shows: ['parks and recreation', 'homeland']
};
{
name: 'chris',
city: 'denver',
tv shows: ['sense8', 'boss baby']
}
{
name: 'timothy',
city: 'austin',
tv shows: ['star trek', 'wings']
}]
//
// Take it Easy
// Make an array that holds all of the colors of the rainbow.
// Write code that will access "blue" from the rainbow array.
// Make an object that is called your name and holds the information about your favorite food, a hobby, the name of the town that you live in currently, and your favorite datatype.
// Write code that will access your hobby from the object that you just created.

const spectrum =['red', 'orange', 'yellow', 'green', 'blue', 'purple' ];
//
console.log(spectrum[4]);
//
const jessamyn = {
  favoriteFood: 'Ramen',
  hobby: 'eating',
  city: 'Austin',
  favoriteDateType: 'booleans'
}

console.log(jessamyn.hobby);
//
//
// const crazyObject = {
//   taco: [{meat: 'steak',
//          cheese: ['panela', 'queso', 'chihuahua']},
//          {meat: 'chicken',
//           salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
//         ],
//   larry: {
//     nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
//     quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
//     characters: [{
//       name: "Jeff",
//       occupation: "manager"
//     },
//     {
//       name: "funkhauser",
//       occupation: "tv dude"
//     },
//     {
//       name: "susie",
//       occupation: "jeffs wife",
//       favourtieHobby: "Swearing at Larry and Jeff"
//     },
//     ]
//   }
// }
// // Use crazy Object to log the following.
// //
// // "omg my mouth is burning"
// //
console.log(crazyObject.taco[1].salsa[5]);
//
//
// // "Pretty pretty prettayyyyy good"
// //
console.log(crazyObject.larry.quotes[0]);
//
// // "Swearing at Larry and Jeff"
// //
console.log(crazyObject.larry.characters[2].favourtieHobby);
//
// // "Chicken Teriyaki Boyyyyyy"
// //
console.log(crazyObject.larry.nicknames[1]);
//
// // The object the contains the name funkhauser
// //
console.log(crazyObject.larry.characters[1]);
//
// Object-ception
// With the following object:

// const inception = {
//    reality: {
//        dreamLayer1: {
//            dreamLayer2: {
//                dreamLayer3: {
//                    dreamLayer4: {
//                        dreamLayer5: {
//                            dreamLayer6: {
//                                limbo: "Joseph Gordon Levitt"
//                           }
//                        }
//                    }
//                }
//            }
//        }
//    }
// }
// // Change the value of limbo to null.
// //
inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;

console.log(inception);

output looks really cool in console...
//{reality:
  {…}}reality:
    dreamLayer1:
      dreamLayer2:
        dreamLayer3:
          dreamLayer4:
            dreamLayer5:
              dreamLayer6:
                limbo: null__
                proto__: Object__
              proto__: Object_
            proto__: Object__
          proto__: Object__
        proto__: Object__
      proto__: Object__
    proto__: Object__
  proto__: Object
//
// //
// Bond Films
// Array of objects:
// const bondFilms = [
// { "title" : "Skyfall",
//   "year" : 2012,
//   "actor" : "Daniel Craig",
//   "gross" : "$1,108,561,008"
// },
// {
//    "title" : "Thunderball",
//   "year" : 1965,
//   "actor" : "Sean Connery",
//   "gross" : "$1,014,941,117"
// },
// {
//     "title" : "Goldfinger",
//   "year" : 1964,
//   "actor" : "Sean Connery",
//   "gross" : "$912,257,512"
// },
// {
//   "title" : "Live and Let Die",
//   "year" : 1973,
//   "actor" : "Roger Moore",
//   "gross" : "$825,110,761"
// },
// {
//   "title" : "You Only Live Twice",
//   "year" : 1967,
//   "actor" : "Sean Connery",
//   "gross" : "$756,544,419"
// },
//   {
//   "title" : "The Spy Who Loved Me",
//   "year" : 1977,
//   "actor" : "Roger Moore",
//   "gross" : "$692,713,752"
// },
// {
//   "title" : "Casino Royale",
//   "year" : 2006, "actor" :
//   "Daniel Craig",
//   "gross" : "$669,789,482"
// },
// {
//   "title" : "Moonraker",
//   "year" : 1979,
//   "actor" : "Roger Moore",
//   "gross" : "$655,872,400"
// },
// {
//   "title" : "Diamonds Are Forever",
//   "year" : 1971,
//   "actor" : "Sean Connery",
//   "gross" : "$648,514,469"
// },
// {
//   "title" : "Quantum of Solace",
//   "year" : 2008,
//   "actor" : "Daniel Craig",
//   "gross" : "$622,246,378"
// },
// {
//   "title" : "From Russia with Love",
//   "year" : 1963,
//   "actor" : "Sean Connery",
//   "gross" : "$576,277,964"
// },
// {
//   "title" : "Die Another Day",
//   "year" : 2002,
//   "actor" : "Pierce Brosnan",
//   "gross" : "$543,639,638"
// },
// {
//   "title" : "Goldeneye",
//   "year" : 1995,
//   "actor" : "Pierce Brosnan",
//   "gross" : "$529,548,711"
// },
// {
//   "title" : "On Her Majesty's Secret Service",
//   "year" : 1969,
//   "actor" : "George Lazenby",
//   "gross" : "$505,899,782"
// },
// {
//   "title" : "The World is Not Enough",
//   "year" : 1999,
//   "actor" : "Pierce Brosnan",
//   "gross" : "$491,617,153"
// },
// {
//   "title" : "For Your Eyes Only",
//   "year" : 1981,
//   "actor" : "Roger Moore",
//   "gross" : "$486,468,881"
// },
// {
//   "title" : "Tomorrow Never Dies",
//   "year" : 1997,
//   "actor" : "Pierce Brosnan",
//   "gross" : "$478,946,402"
// },
// {
//   "title" : "The Man with the Golden Gun",
//   "year" : 1974,
//   "actor" : "Roger Moore",
//   "gross" : "$448,249,281"
// },
// {
//   "title" : "Dr. No",
//   "year" : 1962,
//   "actor" : "Sean Connery",
//   "gross" : "$440,759,072"
// },
// {
//   "title" : "Octopussy",
//   "year" : 1983,
//   "actor" : "Roger Moore",
//   "gross" : "$426,244,352"
// },
// {
//   "title" : "The Living Daylights",
//   "year" : 1987,
//   "actor" : "Timothy Dalton",
//   "gross" : "$381,088,866"
// },
// {
//   "title" : "A View to a Kill",
//   "year" : 1985,
//   "actor" : "Roger Moore",
//   "gross" : "$321,172,633"
// },
// {
//   "title" : "License to Kill",
//   "year" : 1989,
//   "actor" : "Timothy Dalton",
//   "gross" : "$285,157,191"
// }
// ];
// Yikes. Well, copy the bondFilms array of objects above into your js file. Use for loops and conditionals and methods in order to complete the below:
//
// Create a new array called bondTitles with only the titles of the Bond films, and console.log the new array.
// well it looks right to me but has a syntax error so idk...

const bondTitles = [];
let (let i = 0; i < bondFilms.length; i++); {
  bondTitles.push(bondFilms[i].title);
}
console.log(bondTitles);
//

// Create a new array oddBonds, of only the Bond films released on odd-numbered years.
// holy s**t this worked BUT it listed an array of all strings in the end, this has happened a few times to me... what am i adding that's incorrect?

const oddBonds = [];
for (let i = 0; i < bondFilms.length; i++) {
  if (bondFilms[i].year % 2 !== 0) {
    oddBonds.push(bondFilms[i])
  }
}
  console.log(oddBonds);
//
// Determine the total cumulative gross of the Bond franchise, and console.log the result. hint To make the grosses into usable numbers, look into the .replace Javascript method (there are many ways to do this, however). Look into parseInt also.

// yep over my head but i took notes and tried to research it, i'll be working this out in the am when we do review...

var total = 0;
for (var i=0; i < allVals.length; i++) {
  allVals[i] = parseInt(allVals[i],10);
  total += allVals[i];
  console.log(total);
}
// notes from github
//
// simple cumlative sum in javascript
// cumsum = [];
// j = [0,1,2,3,4];
//
// for(var a=0;a<j.length;a++) {
//   if(a==0) cumsum[a] = j[0];
//   else cumsum[a] = cumsum[a-1] + j[a];
// }
// notes from stackoverflow
//
// first of all you have to create the total variable outside of your for loop then initialize it to zero
//
// var total = 0;
//
// for (var i=0; i < allVals.length; i++) {
//
//   allVals[i] = parseInt(allVals[i],10);
//   total += allVals[i];
//   console.log(total);
// }
// Second Because you are adding a number to an uninitialized variable you are getting a NaN result
//
// for example
//
// var c;
// c +=1; //this will be NaN(not a numeric number)
// the reason is that when you initialize a variable JavaScript knows the right data type
// that should be given to that variable
// //
