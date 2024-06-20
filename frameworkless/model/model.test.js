import model from "./model";

// describe("create model", () => {
//   it("addItem let's go!!!", () => {
//     const { addItem, getState } = model();
//     addItem("abc");
//     expect(getState().todos[0].text).toBe("abc");
//     expect(getState()).not.toEqual([]);
//   });
// });

describe("update model", () => {
  const { updateItem, getState, addItem } = model();
  beforeEach(() => {
    addItem("abc");
  });
  it("updateItem let's go!!!", () => {
    updateItem(0, "abcd");
    expect(getState().todos[0].text).toEqual("abcd");
  });
});

describe("All delete model", () => {
  it("deleteItem let's go!!!", () => {
    const { deleteItem, getState, addItem } = model();
    // deleteItem(1);
    // expect(getState().todos).toEqual()
    expect(getState().todos).toEqual([]);
    // expect(getState().todos.length).toEqual(0);
    // expect(getState().todos[0]).not.toEqual(true);
  });
});
