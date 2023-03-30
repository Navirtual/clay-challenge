import React from "react";

import { useTracker } from "meteor/react-meteor-data";
import { TextsCollection } from "../../api/TextsCollection";
import { getText } from "../utils/utils";

import "./Styles.css";
import "../Shared.css";

export const ComoAyudamos = ({ lang }) => {
  const t = useTracker(() =>
    TextsCollection.find({ lang, component: "how-we-help" }).fetch()
  );

  return (
    <div className="container-fluid mb-4 text-center como-ayudamos-container">
      <div className="container ">
        <div className="row">
          <div className="col">
            <h6 className="shared-header">{getText(t, "header")}</h6>
            <h4 className="como-ayudamos-title">{getText(t, "title")}</h4>
          </div>
        </div>
        <div className="row como-ayudamos-row">
          <div className="col-4">
            <div className="card como-ayudamos-card">
              <div className="card-body como-ayudamos-card-body">
                <h2 className="pb-3 pt-2 como-ayudamos-card-title">
                  {getText(t, "card1.title")}
                </h2>
                <p className="como-ayudamos-class-p">{getText(t, "card1.p")}</p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card como-ayudamos-card">
              <div className="card-body como-ayudamos-card-body">
                <h2 className="pb-3 pt-2 como-ayudamos-card-title">
                  {getText(t, "card2.title")}
                </h2>
                <p className="como-ayudamos-class-p">{getText(t, "card2.p")}</p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card como-ayudamos-card">
              <div className="card-body como-ayudamos-card-body">
                <h2 className="pb-3 pt-2 como-ayudamos-card-title">
                  {getText(t, "card3.title")}
                </h2>
                <p className="como-ayudamos-class-p">{getText(t, "card3.p")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
