describe("Тестирование класса Mat", () => {
  it("Проверяем суммирование методом sum()", () => {
    const m = new Mat(2, 3);

    expect(m.sum()).toBe(5);
  });

  it("Проверяем вычитание методом sub()", () => {
    expect(new Mat(2, 3).sub()).toBe(-1);
    expect(new Mat(21, 11).sub()).toBe(10);
    expect(new Mat(11, 5).sub()).toBe(6);
  });

  it("Умножение mul() для чисел 2 и 3 должен вернуть 6", () => {
    expect(new Mat(2, 3).mul()).toBe(6);
    expect(new Mat("2", 3).mul()).toBe(6);
    expect(new Mat(2, "3").mul()).toBe(6);
    expect(new Mat("2", "3").mul()).toBe(6);
  });

  it("Умножение mul() для не чисел должено вернуть NaN", () => {
    expect(new Mat("2", "str").mul()).toBeNaN();
    expect(new Mat(5, 10).mul()).not.toBeNaN();
  });
});

describe("Тeстирование функции ageClassification", () => {
  it("Проверяем Возраст - возраст, который не входит в диапозон => null", () => {
    expect(ageClassification(-1)).toBe(null);
  });

  it("Проверяем Возраст - возраст, который не входит в диапозон => null", () => {
    expect(ageClassification(122.01)).toBe(null);
  });

  it("Проверяем Возраст - возраст, который не входит в диапозон => null", () => {
    expect(ageClassification(150)).toBe(null);
  });

  it('Проверяем Возраст - "детский возраст"', () => {
    expect(ageClassification(1)).toBe("детский возраст");
  });

  it('Проверяем Возраст - "детский возраст"', () => {
    expect(ageClassification(24)).toBe("детский возраст");
  });

  it('Проверяем Возраст - "молодой возраст"', () => {
    expect(ageClassification(24.01)).toBe("молодой возраст");
  });

  it('Проверяем Возраст - "молодой возраст"', () => {
    expect(ageClassification(44)).toBe("молодой возраст");
  });

  it('Проверяем Возраст - "средний возраст"', () => {
    expect(ageClassification(44.01)).toBe("средний возраст");
  });

  it('Проверяем Возраст - "средний возраст"', () => {
    expect(ageClassification(65)).toBe("средний возраст");
  });

  it('Проверяем Возраст - "пожилой возраст"', () => {
    expect(ageClassification(65.01)).toBe("пожилой возраст");
  });

  it('Проверяем Возраст - "пожилой возраст"', () => {
    expect(ageClassification(75)).toBe("пожилой возраст");
  });

  it('Проверяем Возраст - "старческий возраст"', () => {
    expect(ageClassification(75.01)).toBe("старческий возраст");
  });

  it('Проверяем Возраст - "старческий возраст"', () => {
    expect(ageClassification(90)).toBe("старческий возраст");
  });

  it('Проверяем Возраст - "долгожители"', () => {
    expect(ageClassification(90.01)).toBe("долгожители");
  });

  it('Проверяем Возраст - "долгожители"', () => {
    expect(ageClassification(122)).toBe("долгожители");
  });
});

describe("Тeстирование функции weekFn", () => {
  it('Проверяем день недели - "Понедельник"', () => {
    expect(weekFn(1)).toBe("Понедельник");
  });

  it('Проверяем день недели - "Среда"', () => {
    expect(weekFn(3)).toBe("Среда");
  });

  it('Проверяем день недели - "Воскресенье"', () => {
    expect(weekFn(7)).toBe("Воскресенье");
  });

  it("Проверяем день недели - не входит в диапозон => null", () => {
    expect(weekFn(9)).toBe(null);
  });

  it("Проверяем день недели - не входит в диапозон => null", () => {
    expect(weekFn(1.5)).toBe(null);
  });

  it("Проверяем день недели - не входит в диапозон => null", () => {
    expect(weekFn("2")).toBe(null);
  });
});
