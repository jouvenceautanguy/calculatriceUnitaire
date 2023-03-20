const Hippopotamus = require('./Hippopotamus');

describe('Hippopotamus isValid', () => {
  it('should return true if all properties are valid', () => {
    const hippo = new Hippopotamus('Hippo 1', 500, 20);
    expect(hippo.isValid()).toBe(true);
  });

  it('should return false if name is missing', () => {
    const hippo = new Hippopotamus(null, 500, 20);
    expect(hippo.isValid()).toBe(false);
  });

  it('should return false if tuskSize is missing', () => {
    const hippo = new Hippopotamus('Hippo 1', 500, null);
    expect(hippo.isValid()).toBe(false);
  });

  it('should return false if weight is missing', () => {
    const hippo = new Hippopotamus('Hippo 1', null, 20);
    expect(hippo.isValid()).toBe(false);
  });

  it('should return false if tuskSize is not a number', () => {
    const hippo = new Hippopotamus('Hippo 1', 500, 'not a number');
    expect(hippo.isValid()).toBe(false);
  });

  it('should return false if weight is not a number', () => {
    const hippo = new Hippopotamus('Hippo 1', 'not a number', 20);
    expect(hippo.isValid()).toBe(false);
  });
});