import { describe } from "@jest/globals";
import { buildValidateToken } from "./auth.js";
import { startAuthApp } from "@graffiticode/auth/testing";

describe("auth", () => {
  let authApp;
  let validateToken;
  beforeEach(async () => {
    authApp = await startAuthApp();
    validateToken = buildValidateToken({ authUrl: authApp.url });
  });

  afterEach(async () => {
    if (authApp) {
      await authApp.cleanUp();
    }
  });

  it("should reject for missing token", async () => {
    const token = "header.payload.signature";

    await expect(validateToken(token)).rejects.toThrow();
  });

  it("should return uid from auth app", async () => {
    const { accessToken: token } = await authApp.authService.generateTokens({ uid: "1" });

    await expect(validateToken(token)).resolves.toStrictEqual({ uid: "1" });
  });
});
