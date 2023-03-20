class Hippopotamus {
    constructor(name, weight, tuskSize) {
      this.name = name;
      this.weight = weight; // en kilos
      this.tuskSize = tuskSize; // en cm
    }
  
    swim() {
      this.weight -= 0.3;
    }
  
    eat() {
      this.weight += 1;
    }
  
    static fight(hippo1, hippo2) {
      if (hippo1.tuskSize > hippo2.tuskSize) {
        return hippo1.name + " gagne !";
      } else if (hippo2.tuskSize > hippo1.tuskSize) {
        return hippo2.name + " gagne !";
      } else {
        return "égalité !";
      }
    }

    toString() {
        return `Popotame ${this.name} : poids ${this.weight} kg, taille des défenses ${this.tuskSize} cm`;
      }

    isValid() {
       
        if (!this.name) {
          return false;
        }
        
     
        if (!this.tuskSize || isNaN(this.tuskSize)) {
          return false;
        }
    
        // Vérification de l'âge
        if (!this.weight || isNaN(this.weight)) {
          return false;
        }
    
        return true;
      }
  }
  // tests
  const hippo1 = new Hippopotamus("Hippo 1", 500, 20);
  const hippo2 = new Hippopotamus("Hippo 2", 600, 15);
  
  hippo1.swim();
  hippo2.eat();

  //fight test
  console.log(Hippopotamus.fight(hippo1, hippo2));
  console.log(hippo1);
module.exports = Hippopotamus;