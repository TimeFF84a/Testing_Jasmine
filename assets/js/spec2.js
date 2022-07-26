describe("Тестирование функции defUpperCase", () => {
  it("Функция должна вернуть переданный текст 'my test text' в верхнем регистре", () => {
    const t1 = "my test text";

    expect(defUpperCase(t1)).toBe(t1.toUpperCase());
  });

  it("Функция должна вернуть текст по умолчанию 'DEFAULT TEXT' в верхнем регистре", () => {
    expect(defUpperCase()).toBe("DEFAULT TEXT");
  });
});
