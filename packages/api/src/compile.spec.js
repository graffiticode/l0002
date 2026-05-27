// SPDX-License-Identifier: MIT
import { compile } from "./compile.js";

// "hello, world!".. — a bare string program. Its value is the string itself,
// so the compiled data is the bare value (no `_` wrapper).
const STRING_CODE = {
  1: { tag: "STR", elts: ["hello, world!"] },
  2: { tag: "EXPRS", elts: [1] },
  3: { tag: "PROG", elts: [2] },
  root: 3
};

// theme <"nope"> {} .. — an invalid theme tag, which the checker rejects.
const BAD_THEME_CODE = {
  1: { tag: "STR", elts: ["nope"] },
  2: { tag: "RECORD", elts: [] },
  3: { tag: "THEME", elts: [1, 2] },
  4: { tag: "EXPRS", elts: [3] },
  5: { tag: "PROG", elts: [4] },
  root: 5
};

describe("compile", () => {
  it("returns successful output in the `data` field with empty `errors`", async () => {
    const result = await compile({ code: STRING_CODE, data: {} });
    expect(result).toEqual({ data: "hello, world!", errors: [] });
  });

  it("does not wrap the compiled value in an `_` field", async () => {
    const result = await compile({ code: STRING_CODE, data: {} });
    // The value is returned directly, not as { _: "hello, world!" }.
    expect(result.data).toBe("hello, world!");
  });

  it("returns compile errors in `errors` with null `data`", async () => {
    const result = await compile({ code: BAD_THEME_CODE, data: {} });
    expect(result.data).toBeNull();
    expect(Array.isArray(result.errors)).toBe(true);
    expect(result.errors.length).toBeGreaterThan(0);
    expect(result.errors[0]).toHaveProperty("message");
  });

  it("throws when required parameters are missing", async () => {
    await expect(compile({ data: {} })).rejects.toThrow(
      "Missing required parameters: code and data"
    );
    await expect(compile({ code: STRING_CODE })).rejects.toThrow(
      "Missing required parameters: code and data"
    );
  });
});
