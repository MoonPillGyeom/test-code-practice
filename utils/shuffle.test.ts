import shuffle from "./shuffle";

describe("shuffle", () => {
  const array = [1, 2, 3, 4];

  it("rand number", () => {
    expect(shuffle(array)).not.toEqual(array);
  });

  it("random number sort", () => {
    expect(shuffle(array).sort()).toBe(array.sort());
  });
});
