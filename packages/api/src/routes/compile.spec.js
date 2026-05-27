// SPDX-License-Identifier: MIT
import express from "express";
import compileRoute from "./compile.js";
import { compile } from "../compile.js";

// "hello, world!".. — a bare string program.
const STRING_CODE = {
  1: { tag: "STR", elts: ["hello, world!"] },
  2: { tag: "EXPRS", elts: [1] },
  3: { tag: "PROG", elts: [2] },
  root: 3
};

// theme <"nope"> {} .. — an invalid theme tag.
const BAD_THEME_CODE = {
  1: { tag: "STR", elts: ["nope"] },
  2: { tag: "RECORD", elts: [] },
  3: { tag: "THEME", elts: [1, 2] },
  4: { tag: "EXPRS", elts: [3] },
  5: { tag: "PROG", elts: [4] },
  root: 5
};

const startServer = () => new Promise((resolve) => {
  const app = express();
  app.use(express.json());
  app.use("/compile", compileRoute({ compile }));
  const server = app.listen(0, "127.0.0.1", () => {
    const { port } = server.address();
    resolve({
      url: `http://127.0.0.1:${port}`,
      close: () => new Promise((res) => server.close(res)),
    });
  });
});

describe("routes/compile", () => {
  let server;

  beforeEach(async () => {
    server = await startServer();
  });

  afterEach(async () => {
    await server.close();
  });

  const postCompile = (body) =>
    fetch(`${server.url}/compile`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
    });

  it("responds with the { data, errors } envelope on success", async () => {
    const res = await postCompile({ code: STRING_CODE, data: {} });
    expect(res.status).toBe(200);
    await expect(res.json()).resolves.toEqual({ data: "hello, world!", errors: [] });
  });

  it("responds with errors in the envelope on a compile error", async () => {
    const res = await postCompile({ code: BAD_THEME_CODE, data: {} });
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.data).toBeNull();
    expect(Array.isArray(body.errors)).toBe(true);
    expect(body.errors.length).toBeGreaterThan(0);
  });

  it("responds 400 when required parameters are missing", async () => {
    const res = await postCompile({ data: {} });
    expect(res.status).toBe(400);
    await expect(res.json()).resolves.toEqual({
      error: "Missing required parameters: code and data",
    });
  });
});
