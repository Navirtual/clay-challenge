import React from "react";
import { IDIOMA } from "../../utils/";

export const MenuIdioma = ({ setLang, lang }) => {
  return (
    <div className="container-fluid mb-4">
      <div className="container">
        <div className="row">
          <div className="col-4"></div>
          <button
            className="col-2 btn btn-primary btn-sm mr-2"
            disabled={lang === IDIOMA.ES}
            onClick={() => setLang(IDIOMA.ES)}
          >
            <i className="fas fa-flag"></i> ES
          </button>
          <button
            className="col-2 btn btn-primary btn-sm ml-2"
            disabled={lang === IDIOMA.EN}
            onClick={() => setLang(IDIOMA.EN)}
          >
            <i className="fas fa-flag"></i> EN
          </button>
          <div className="col-4"></div>
        </div>
      </div>
      <hr />
    </div>
  );
};
