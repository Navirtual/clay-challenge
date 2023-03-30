import React from "react";

export const LangHeader = ({ setLang, lang }) => {
  return (
    <div className="container-fluid mb-4">
      <div className="container">
        <div className="row">
          <div className="col-4"></div>
          <button
            className="col-2 btn btn-primary btn-sm mr-2"
            disabled={lang === "es"}
            onClick={() => setLang("es")}
          >
            <i className="fas fa-flag"></i> ES
          </button>
          <button
            className="col-2 btn btn-primary btn-sm ml-2"
            disabled={lang === "en"}
            onClick={() => setLang("en")}
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
