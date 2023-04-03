import { ENV, METHOD, RUTA } from "../utils";

const BASE_URL =
  process.env.NODE_ENV === ENV.DEV ? RUTA.LOCALHOST : RUTA.METEOR;
const BASE_PATH = `${BASE_URL}/api/textos`;

export const TextosService = async (lang, componente) => {
  const path = `${BASE_PATH}/${lang}/${componente}`;
  const response = await fetch(path, {
    method: METHOD.GET,
    headers: { "Content-Type": "application/json" },
  });

  return await response.json();
};
