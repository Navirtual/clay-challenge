import React from "react";

import { useTracker } from "meteor/react-meteor-data";
import { TextsCollection } from "../../../api/TextsCollection";
import { getText } from "../../utils/";

import "./styles.css";
import "../../Shared.css";

export const Destacamos = ({ lang }) => {
  const t = useTracker(() =>
    TextsCollection.find({ lang, component: "destacamos" }).fetch()
  );
  return (
    <div className="container-fluid text-center mb-4">
      <div className="container">
        <div className="row">
          <div className="col-6 destacamos-col-img">
            <img src="https://clay.cl/wp-content/uploads/2020/07/Documents-pana.svg" />
          </div>
          <div className="col-6">
            <div className="card destacamos-card text-left">
              <div className="card-body">
                <h6 className="shared-header">{getText(t, "header")}</h6>
                <h3 className="destacamos-title mb-4">{getText(t, "title")}</h3>
                <p>{getText(t, "p")}</p>
                <ul className="destacamos-list">
                  <li className="destacamos-list-item">
                    <span className="destacamos-list-item-icon pr-2">
                      <i className="fas fa-check"></i>
                    </span>
                    {getText(t, "item1")}
                  </li>
                  <li className="destacamos-list-item">
                    <span className="destacamos-list-item-icon pr-2">
                      <i className="fas fa-check"></i>
                    </span>
                    {getText(t, "item2")}
                  </li>
                  <li className="destacamos-list-item">
                    <span className="destacamos-list-item-icon pr-2">
                      <i className="fas fa-check"></i>
                    </span>
                    {getText(t, "item3")}
                  </li>
                  <li className="destacamos-list-item">
                    <span className="destacamos-list-item-icon pr-2">
                      <i className="fas fa-check"></i>
                    </span>
                    {getText(t, "item4")}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
