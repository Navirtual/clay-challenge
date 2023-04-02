import React, { useEffect, useState } from "react";
import { COMPONENTE } from "../../utils/";
import { TextosService } from "../../services/textos.services";
import "./comoAyudamos.style.css";
import "../../shared.css";

export const ComoAyudamos = ({ lang }) => {
  const [texto, setTexto] = useState();
  useEffect(() => {
    TextosService(lang, COMPONENTE.COMO_AYUDAMOS).then((response) => {
      setTexto(response);
    });
  }, [lang]);

  return (
    texto?.title && (
      <div className="container-fluid mb-4 text-center como-ayudamos-container">
        <div className="container">
          <div className="row">
            <div className="col">
              <h6 className="shared-header">{texto.header}</h6>
              <h4 className="como-ayudamos-title">{texto.title}</h4>
            </div>
          </div>
          <div className="row como-ayudamos-row">
            <div className="col-md-4 col-sm-12">
              <div className="card como-ayudamos-card">
                <div className="card-body como-ayudamos-card-body">
                  <h2 className="pb-3 pt-2 como-ayudamos-card-title">
                    {texto.card1.title}
                  </h2>
                  <p className="como-ayudamos-class-p">{texto.card1.p}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="card como-ayudamos-card">
                <div className="card-body como-ayudamos-card-body">
                  <h2 className="pb-3 pt-2 como-ayudamos-card-title">
                    {texto.card2.title}
                  </h2>
                  <p className="como-ayudamos-class-p">{texto.card2.p}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="card como-ayudamos-card">
                <div className="card-body como-ayudamos-card-body">
                  <h2 className="pb-3 pt-2 como-ayudamos-card-title">
                    {texto.card3.title}
                  </h2>
                  <p className="como-ayudamos-class-p">{texto.card3.p}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
