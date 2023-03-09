//const { describe } = require('yarg');
//const { it } = require('node:test');
const Calculatrice = require('./calculatrice');

describe('Calculatrice', () => {
    it('additionne deux nombres', () => {
      const maCalculatrice = new Calculatrice();
      expect(maCalculatrice.addition(2, 3)).toBe(5);
    });
    it('multiplie deux nombres', () => {
        const maCalculatrice = new Calculatrice();
        expect(maCalculatrice.multiplication(5, 2)).toBe(10);
      });
      it('soustrait 2 nombres', () => {
        const maCalculatrice = new Calculatrice();
        expect(maCalculatrice.soustraction(15,5)).toBe(10);
    }, 3000);
    
    
      // Test pour la fonction division avec timeout

    it('divise deux nombres', () => {
        const maCalculatrice = new Calculatrice();
        expect(maCalculatrice.division(10, 5)).toBe(2);
      }, 2000);
      // Test pour la division par zéro
      it('lève une exception en cas de division par zéro', () => {
        const maCalculatrice = new Calculatrice();
        expect(() => maCalculatrice.division(10, 0)).toThrowError('Division par zéro');
      });
  });
  

