//const { describe } = require('yargs');
const User = require('./user');

  describe('isValid', () => {
    it('true si tout va bien', () => {
      const user = new User('eren.jaeger@gmail.com', 'Jaeger', 'Eren', 24);
      expect(user.isValid()).toBe(true);
    });

    it('si ladresse est invalide on renvoi false', () => {
      const user = new User('blabla_tudort', 'Tudort', 'Blabla', 25);
      expect(user.isValid()).toBe(false);
    });

    it('si il manque un nom on met false', () => {
      const user = new User('larsene.lubin@gmail.com', null, 'Larsene', 25);
      expect(user.isValid()).toBe(false);
    });

    it('si il manque lage false', () => {
      const user = new User('larsene.lubin@gmail.com', 'Larsene', 'Lubin', null);
      expect(user.isValid()).toBe(false);
    });

    it('si il a moins de 13 ans on met false', () => {
      const user = new User('larsene.lubin@gmail.com', 'Larsene', 'Lubin', 12);
      expect(user.isValid()).toBe(false);
    });
  });
