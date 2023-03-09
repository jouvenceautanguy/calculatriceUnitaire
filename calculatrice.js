class Calculatrice {
    addition(a, b) {
      return a + b;
    }
  
    soustraction(a, b) {
      return a - b;
    }
  
    multiplication(a, b) {
      return a * b;
    }
  
    division(a, b) {
        if (b === 0) {
          throw new Error('Division par zéro');
        }
        return a / b;
      }
  }
 // const maCalculatrice = new Calculatrice();

//   console.log(maCalculatrice.addition(5, 7)); // Output: 12
//   console.log(maCalculatrice.soustraction(10, 5)); // Output: 5
//   console.log(maCalculatrice.multiplication(3, 4)); // Output: 12
//   console.log(maCalculatrice.division(10, 2)); // Output: 5
//   console.log(maCalculatrice.division(5, 0));

module.exports = Calculatrice;