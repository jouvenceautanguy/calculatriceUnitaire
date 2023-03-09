class User {
    constructor(email, nom, prenom, age) {
      this.email = email;
      this.nom = nom;
      this.prenom = prenom;
      this.age = age;
    }

  isValid() {
    // Vérification de l'adresse email
    if (!this.email || !this.email.match(/[^@]+@[^@]+\.[^@]+/)) {
      return false;
    }
    
    // Vérification du nom et du prénom
    if (!this.nom || !this.prenom) {
      return false;
    }

    // Vérification de l'âge
    if (!this.age || this.age < 13) {
      return false;
    }

    return true;
  }
}
console.log(new User('eren.jaeger@gmail.com', 'Jaeger', 'Eren', 24));
module.exports = User;