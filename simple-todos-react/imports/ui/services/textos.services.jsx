import { METHOD } from "../utils";

const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://clay-tech-app.meteorapp.com";
const BASE_PATH = `${BASE_URL}/api/textos`;

export const TextosService = async (lang, componente) => {
  const path = `${BASE_PATH}/${lang}/${componente}`;
  const response = await fetch(path, {
    method: METHOD.GET,
    headers: { "Content-Type": "application/json" },
  });

  return await response.json();
};
