import { Router } from "express";
import { InvalidArgumentError } from "../errors/http.js";
import { isNonEmptyString } from "../util.js";
import { buildHttpHandler } from "./utils.js";

const getLangIdFromRequest = (req) => {
  const [, base] = req.baseUrl.split("/");
  let id = req.query.id;
  if (base === "lang" && Number.isInteger(Number.parseInt(req.query.id))) {
    return id;
  }
  const re = /^[Ll](\d+)$/;
  const match = re.exec(base);
  if (!match) {
    throw new InvalidArgumentError("must provide a language identifier");
  }
  id = match[1];
  if (!Number.isInteger(Number.parseInt(id))) {
    const err = new Error("should not be possible");
    err.statusCode = 500;
    throw err;
  }
  return id;
};

export const buildLangRouter = ({ pingLang, getLangAsset }) => {
  const router = new Router();
  router.get("/", buildHttpHandler(async (req, res) => {
    const langId = getLangIdFromRequest(req);
    const lang = `L${langId}`;
    const [, , path] = req.baseUrl.split("/");
    const pong = await pingLang(lang);
    if (!pong) {
      res.sendStatus(404);
    } else if (isNonEmptyString(path)) {
      const asset = await getLangAsset(lang, `/${path}`);
      if (path.indexOf(".jp") > 0) {
        res.setHeader("Content-Type", "image/jpeg");
      } else if (path.indexOf(".png") > 0) {
        res.setHeader("Content-Type", "image/png");
      } else if (path.indexOf(".svg") > 0) {
        res.setHeader("Content-Type", "image/svg+xml");
      } else if (path.indexOf(".js") > 0) {
        res.setHeader("Content-Type", "application/javascript");
      } else if (path.indexOf(".json") > 0) {
        res.setHeader("Content-Type", "application/json");
      }
      res.send(asset);
    } else {
      res.sendStatus(200);
    }
  }));
  return router;
};
