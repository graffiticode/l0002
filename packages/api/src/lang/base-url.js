export const buildGetBaseUrlForLanguage = ({
  isNonEmptyString,
  env,
  getConfig,
  getCompilerHost,
  getCompilerPort
}) => (lang) => {
  if (Number.isInteger(Number.parseInt(lang, 10))) {
    lang = `L${lang}`;
  }
  if (!isNonEmptyString(lang)) {
    throw new Error("lang must be a non empty string");
  }
  const envBaseUrl = env[`BASE_URL_${lang.toUpperCase()}`];
  if (isNonEmptyString(envBaseUrl)) {
    return envBaseUrl;
  }
  const config = getConfig() || {};
  const host = getCompilerHost(lang, config);
  const port = getCompilerPort(lang, config);
  let protocol = "https";
  if (host === "localhost") {
    protocol = "http";
  } else if (isNonEmptyString(config.protocol)) {
    protocol = config.protocol;
  }
  return `${protocol}://${host}:${port}`;
};
