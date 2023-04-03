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

      {/* Prototipo sin Menú Header */}

      <Jumbotron lang={idioma} />

      <ComoAyudamos lang={idioma} />

      <Video />

      {/* <div>Clientes</div>
          <hr /> */}

      <Destacamos lang={idioma} />

      {/* <div>Promesa</div>
          <hr /> */}

      {/* <div>Método Clay</div>
          <hr /> */}

      {/* <div>Números</div>
          <hr /> */}

      {/* <div>Testimonios</div>
          <hr /> */}

      {/* <div>Prensa</div>
          <hr /> */}

      {/* <div>Prueba gratis</div>
          <hr /> */}

      {/* <div>Newsletter</div>
          <hr /> */}

      {/* <div>Footer</div>
          <hr /> */}
    </>
  );
};
