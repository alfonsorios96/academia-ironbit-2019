const add = (x, y) => x + y;

describe("'add' utility", () => {
  it("given 3 and 3 as arguments, returns 6", () => {
    const result = add(3, 3);
    expect(result).toEqual(6);
  });
  it("given -3 and -3 as arguments, returns -6", () => {
    const result = add(-3, -3);
    expect(result).toEqual(-3);
  });
  it("given 3 and -3 as arguments, returns 0", () => {
    const result = add(3, -3);
    expect(result).toEqual(0);
  });
});