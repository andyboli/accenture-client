import { GRID } from ".";

describe("Test Grid Goundation", () => {
  test("Should multiply numbers by default pixel", () => {
    expect(GRID(1)).toBe("8px");
    expect(GRID(0.25)).toBe("2px");
    expect(GRID(12345)).toBe("98760px");
    expect(GRID(1.2345)).toBe("9.876px");
  });

  test("Should return 0px for NaN values", () => {
    expect(GRID(NaN)).toBe("0px");
    expect(GRID(Number("not a number"))).toBe("0px");
  });
});
