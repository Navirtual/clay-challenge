import React, { useState } from "react";
import {
  ComoAyudamos,
  Destacamos,
  Jumbotron,
  MenuIdioma,
  Video,
} from "./sections";
import { IDIOMA } from "./utils";

export const ClientIndex = () => {
  const [idioma, setIdioma] = useState(IDIOMA.ES);

  return (
    <>
      <MenuIdioma setLang={setIdioma} lang={idioma} />

      {/* Menú de Header no implementado */}

      <Jumbotron lang={idioma} />

      <ComoAyudamos lang={idioma} />

      <Video />

      {/* Sección de "Clientes" no implementado */}

      <Destacamos lang={idioma} />

      {/* Sección "Nuestra Promesa" no implementado */}

      {/* Sección "El Método Clay" no implementado */}

      {/* Sección "Números" no implementado */}

      {/* Sección "Testimonios" no implementado */}

      {/* Sección "En la Prensa" no implementado */}

      {/* Sección "Prueba gratis" no implementado */}

      {/* Sección "Newsletter" no implementado */}

      {/* Sección "Footer" no implementado */}
    </>
  );
};
