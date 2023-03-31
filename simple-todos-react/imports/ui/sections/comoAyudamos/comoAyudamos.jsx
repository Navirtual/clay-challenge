import React from "react";

import { useTracker } from "meteor/react-meteor-data";
import { TextsCollection } from "../../../api/TextsCollection";
import { COMPONENTES, getText } from "../../utils/";

import "./comoAyudamos.style.css";
import "../../Shared.css";

export const ComoAyudamos = ({ lang }) => {
  const t = useTracker(() =>
    TextsCollection.findOne({
      lang,
      component: COMPONENTES.COMO_AYUDAMOS,
    })
  );

  return (
    t && (
      <div className="container-fluid mb-4 text-center como-ayudamos-container">
        <div className="container ">
          <div className="row">
            <div className="col">
              <h6 className="shared-header">{t.header}</h6>
              <h4 className="como-ayudamos-title">{t.title}</h4>
            </div>
          </div>
          <div className="row como-ayudamos-row">
            <div className="col-4">
              <div className="card como-ayudamos-card">
                <div className="card-body como-ayudamos-card-body">
                  <h2 className="pb-3 pt-2 como-ayudamos-card-title">
                    {t.card1.title}
                  </h2>
                  <p className="como-ayudamos-class-p">{t.card1.p}</p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card como-ayudamos-card">
                <div className="card-body como-ayudamos-card-body">
                  <h2 className="pb-3 pt-2 como-ayudamos-card-title">
                    {t.card2.title}
                  </h2>
                  <p className="como-ayudamos-class-p">{t.card2.p}</p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card como-ayudamos-card">
                <div className="card-body como-ayudamos-card-body">
                  <h2 className="pb-3 pt-2 como-ayudamos-card-title">
                    {t.card3.title}
                  </h2>
                  <p className="como-ayudamos-class-p">{t.card3.p}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
