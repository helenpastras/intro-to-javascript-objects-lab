// const pokemon = require('./data.js');

const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
  difficulty: ['Easy', 'Intermediate', 'Hard', 'Pro-level'],
}
console.log(game.gyms.difficulty);


// // Exercise 2
// console.dir(pokemon, { maxArrayLength: null })
console.log(pokemon[58]);

// Exercise 2
console.log(game);

// /*
// Exercise 3
// 1. Add a new property to the `game` object. Let's call it "difficulty".
// 2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


// Solve Exercise 3 here
//   added above in the game: 
//  difficulty: ['Easy', 'Intermediate', 'Hard', 'Pro-level'],
console.log("Exercise 3" , game.difficulty);


// Exercise 4: 
// Exercise 4
// 1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
// 2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?
let starterPok;
console.log(pokemon[0]);
for (let i = 0; i < pokemon.length; i++) {
        if (pokemon[i].starter === true) {
            starterPok = pokemon[i];
            game.party.push(starterPok)
        }
    };
    console.log("Exercise 4:" , game.party);

// Exercise 5
// 1. Choose three more Pokémon from the `pokemon` array and add them to your party.
// 2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?
game.party.push(pokemon[30]);
game.party.push(pokemon[39]);
game.party.push(pokemon[79]);
// i know this is not right, but I couldn't get anything else to work 
console.log("Exercise 5:" , game.party);

//Exercise 6
// 1. Set the `completed` property to true for gyms with a difficulty below 3.
// 2. Think about how you'd loop through the `gyms` array to check and update the `completed` property. 

// I know the theory of what I should do, but fail to see how to get to it the right way; having more time for these would really help tbh. 

for (let gym of game.gyms) {
  if (gym.difficulty <= 3) {
    gym.completed = true;
    console.log('Exercise 6: The game is completed for: ' , gym)
  }
else {    
    console.log('Exercise 6: The game goes on');
}
};
console.log(game.gyms);

// Exercise 7
// 1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
// Hint: 
//   - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
//   - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
//   - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
//   - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

// Solve Exercise 7 here:
const evolvePok = [
    game.party[0]=pokemon[1],
    game.party[1]=pokemon[4],
    game.party[2]=pokemon[7],
    game.party[3]=pokemon[25]    
];
console.log("Exercise 7: These Pokemon have evolved: " , evolvePok);

// Exercise 8
// 1. Print the name of each Pokémon in your party.
// 2. Consider using a loop or an array method to access each Pokémon's name.

// Solve Exercise 8 here:
game.party.forEach((element) => console.log("Exercise 8: The party includes: " , element.name));

// Exercise 9
// 1. Can you print out all the starter Pokémon from the `pokemon` array?
// 2. Think about how you can identify a starter Pokémon and then log their names.
for (let i = 0; i < pokemon.length; i++) {
        if (pokemon[i].starter === true) {
            starterPok = pokemon[i];
            console.log("Exercise 9: These Pokemon are starters: " ,starterPok)
        }
};

  
// Exercise 10
// Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
//   - Accept an object as a parameter called `pokemonObj`
//   - Add the `pokemonObj` to the `game.party` array.
//   - not return anything

// After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

// Solve Exercise 10 here:
game.catchPokemon = function() {
  pokemonObj = null;
  game.party.pokemonObj;
  console.log("Exercise 10: " , pokemonObj)
};
game.catchPokemon();
console.log("Exercise 10: " , pokemonObj)
//I tried the following thinking it would help catch the game.catchPokemon(game.party[2]);


// Exercise 11
// 1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
// 2. How will you find and update the quantity of pokeballs in the `game.items` array?

// Tips:
// For this exercise, it's okay to have a negative number of pokeballs.
// After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
// Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

// Solve Exercise 11 here:
game.catchPokemon = function() {
    game.items.quantity--;

    pokemonObj = null;
    game.party.pokemonObj;
    console.log("Exercise 11: " , game.items.quantity)
};
game.catchPokemon();


// Exercise 12
// 1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
//  (change the value of `complete` in the qualifying objects from false to true).

// Solve Exercise 12 here:
for (let gym of game.gyms) {
  if (gym.difficulty > 3 && gym.difficulty <= 6 ) {
    gym.completed = true;
    console.log('Exercise 12: The game is completed for: ' , gym)
  }
else {    
    console.log('Exercise 12: The game goes on for: ' , gym);
}
};
console.log(game.gyms);



// Exercise 13
// 1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
// 2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

// This method should:
//   - Not accept any arguments.
//   - Initially create a constant `gymTally`, which is an object that has two 
//     properties: `completed` and `incomplete`, both of which are initially set to 0.
//   - Iterate through the objects in the `game.gyms` array and update the 
//     properties on `gymTally` as follows: 
//     - `completed` should count how many gyms in the array have a value of `true` 
//       for their `completed` property. 
//     - `incomplete` should count how many gyms in the array have a value of 
//       `false` for their `completed` property.
//   - Log the value of `gymTally`.
//   - The method should not return anything.

// For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

// Solve Exercise 13 here:


// Exercise 14
// 1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

// This method should:
//   - Not accept any arguments.
//   - Count the number of Pokemon in the party.
//   - return the found number of Pokemon in the party.

// Solve Exercise 14 here:


// Exercise 15
// 1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
// (change the value of `complete` in the qualifying objects from false to true).

// Solve Exercise 15 here:


// Exercise 16
// 1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


// Solve Exercise 16 here: