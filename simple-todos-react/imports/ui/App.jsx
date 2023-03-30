import React, { useState } from "react";
import { ComoAyudamos } from "../ui/comoAyudamos/ComoAyudamos";
import { Destacamos } from "../ui/destacamos/Destacamos";
import { LangHeader } from "./langHeader/LangHeader";
import { Video } from "./video/Video";

export const App = () => {
  const [lang, setLang] = useState("es");

  return (
    <div>
      <LangHeader setLang={setLang} lang={lang} />

      {/* <div>Menú header</div>
      <hr /> */}

      {/* <div>Jumbotron</div>
      <hr /> */}

      <ComoAyudamos lang={lang} />

      <Video />
      {/* <div>Video</div>
      <hr /> */}

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
