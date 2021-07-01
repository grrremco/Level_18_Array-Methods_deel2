
//A

const superheroes = [
    {name: "Batman", alter_ego: "Bruce Wayne"}, 
    {name: "Superman", alter_ego: "Clark Kent"}, 
    {name: "Spiderman", alter_ego: "Peter Parker"}]
    
    const findSpiderMan = superheroes.find((item) => {
        return item.name === 'Spiderman'
    })
    
    console.log(findSpiderMan); 
    // Find Spiderman
    // result should be: {name: "Spiderman", alter_ego: "Peter Parker"}


//B


const doubleArrayValues = function(array) {
    return array.map(number => {
      return number + number;
    });
  };

  console.log(doubleArrayValues([1, 2, 3]))
  // result should be [2, 4, 6]


 //C

const containsNumberBiggerThan10 = function(array) {
    return array.some(number => {
      return number > 10;
    });
  };

console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11])); 

// result should be true

console.log(containsNumberBiggerThan10([1,2,1,2,1,2]));
// result should be false



//D

function isItalyInTheGreat7(array) {
    return array.includes("Italy");
  }
console.log(isItalyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States']));
// result should be true


//E

const tenfold = function(array) {
    return array.map(number => {
      return number * 10;
    });
  };

console.log(tenfold([1, 4, 3, 6, 9, 7, 11]))  
    
// result should be (10, 40, 30, 60, 90, 70, 110)


//F

function isBelow100(array) {
    return array.every(number => {
      return number < 100;
    });
  }

console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]))
// result should be: false


//G

const numbers = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]

const bigSum = numbers.reduce((currentTotal, number) => {
    return number + currentTotal
}, 0)

console.log(bigSum)
  // result should be 1118