// 1. Define a function called "makeSandwich" that takes 4 parameters: protein, cheese, veggie, bread
const makeSandwich = (protein, cheese, veggie, bread) => {
    // 2. makeSandwich should create a new sandwich object with the 4 parameters as its key/value pairs
    // 3. makeSandwich will return our newly created sandwich
    return {
        protein: protein,
        cheese: cheese,
        veggie: veggie,
        bread: bread
    }
}
// 4. Call it a few times passing in different arguments to make different sandwiches!
const turkey = makeSandwich("turkey", "provolone", "tomato", "sourdough")
console.log(turkey)

const hamburger = makeSandwich("beef patty", "cheddar", "lettuce", "sesame bun")
console.log(hamburger)

const tuna = makeSandwich("tuna salad", "swiss", "cucumber", "multigrain")
console.log(tuna)