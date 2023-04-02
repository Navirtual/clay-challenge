import { METHOD } from "../utils";
const BASE_PATH = "http://localhost:3000/api/textos";

export const TextosService = async (lang, componente) => {
  const path = `${BASE_PATH}/${lang}/${componente}`;
  const response = await fetch(path, {
    method: METHOD.GET,
    headers: { "Content-Type": "application/json" },
  });

  return await response.json();
};
