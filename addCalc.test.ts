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
  it('should give the sum for more than one number passed in string', () => {
    expect(add("1,2")).toBe(3);
  });
  it('should give the sum for newline between numbers passed in string', () => {
    expect(add("1\n2,3")).toBe(6);
  });
  it('should give the sum for delimiter other than comma in string', () => {
    expect(add("//;1\n2;3")).toBe(6);
  });
});