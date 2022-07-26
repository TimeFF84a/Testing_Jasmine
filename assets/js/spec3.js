describe("Тестирование класса Mat с помощью beforeEach", () => {
  let m;
  let i = 2;
  let j = 3;

  beforeEach(() => {
    m = new Mat(i++, j++);
  });
  it("Суммирование методом sum() 2, 3 => 5", () => {
    expect(m.sum()).toBe(5);
  });

  it("Суммирование методом sum() 3, 4 => 7", () => {
    expect(m.sum()).toBe(7);
  });
});
