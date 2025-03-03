import { characters } from "../../src/js-foundation/02-destructuring";

describe("js-foundation/02-destructuring.ts", () => {
  test("charactes should containt Flash, Superman ", () => {
    // Que lo contenga
    expect(characters).toContain("Flash");
    expect(characters).toContain("Superman");
  });

  test("first character should be Flash, and second Superman", () => {
    // Que tenga un orden en especifico
    const [flash, superman] = characters;

    expect(flash).toBe("Flash");
    expect(superman).toBe("Superman");
  });
});
