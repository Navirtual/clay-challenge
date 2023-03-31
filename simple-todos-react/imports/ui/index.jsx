import React, { useState } from "react";

import { ComoAyudamos, Destacamos, MenuIdioma, Video } from "./sections";

import { IDIOMAS } from "./utils";

export const ClientIndex = () => {
  const [idioma, setIdioma] = useState(IDIOMAS.ES);

  return (
    <div>
      <MenuIdioma setLang={setIdioma} lang={idioma} />

      {/* <div>Menú header</div>
          <hr /> */}

      {/* <div>Jumbotron</div>
          <hr /> */}

      <ComoAyudamos lang={idioma} />

      {/* <Video /> */}

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
    </div>
  );
};
