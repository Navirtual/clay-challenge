import React, { useState } from "react";

import { ComoAyudamos, Destacamos, LangHeader, Video } from "./sections";

import { IDIOMA } from "./utils";

export const ClientIndex = () => {
  const [lang, setLang] = useState(IDIOMA.ES);

  return (
    <div>
      <LangHeader setLang={setLang} lang={lang} />

      {/* <div>Menú header</div>
          <hr /> */}

      {/* <div>Jumbotron</div>
          <hr /> */}

      <ComoAyudamos lang={lang} />

      <Video />

      {/* <div>Clientes</div>
          <hr /> */}

      <Destacamos lang={lang} />

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
