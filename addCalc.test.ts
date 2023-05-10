import add from "./addCalc";
describe('testing add method', () => {
  it('should give zero for empty string', () => {
    expect(add("")).toBe(0);
  });
  it('should give zero for whitespace in string', () => {
    expect(add(" ")).toBe(0);
  });
  it('should give the number itself for one number only in string', () => {
    expect(add("1")).toBe(1);
  });
});