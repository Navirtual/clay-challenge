import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { COMPONENTE } from "../../utils";
import { TextsCollection } from "../../../api/TextsCollection";
import "./destacamos.style.css";
import "../../shared.css";

export const Destacamos = ({ lang }) => {
  const texto = useTracker(() =>
    TextsCollection.findOne({ lang, component: COMPONENTE.DESTACAMOS })
  );

  /**
   * Se deja comentada implementación que utiliza el service.
   */

  // const [texto, setTexto] = useState();
  // useEffect(() => {
  //   TextosService(lang, COMPONENTE.DESTACAMOS).then((response) => {
  //     setTexto(response);
  //   });
  // }, [lang]);

  return (
    texto?.title && (
      <div className="container-fluid text-center mb-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 destacamos-col-img">
              <img src="https://clay.cl/wp-content/uploads/2020/07/Documents-pana.svg" />
            </div>
            <div className="col-md-6">
              <div className="card destacamos-card text-left">
                <div className="card-body">
                  <h6 className="shared-header">{texto.header}</h6>
                  <h3 className="destacamos-title mb-4">{texto.title}</h3>
                  <p>{texto.p}</p>
                  <ul className="destacamos-list">
                    <li className="destacamos-list-item">
                      <span className="destacamos-list-item-icon pr-2">
                        <i className="fas fa-check"></i>
                      </span>
                      {texto.item1}
                    </li>
                    <li className="destacamos-list-item">
                      <span className="destacamos-list-item-icon pr-2">
                        <i className="fas fa-check"></i>
                      </span>
                      {texto.item2}
                    </li>
                    <li className="destacamos-list-item">
                      <span className="destacamos-list-item-icon pr-2">
                        <i className="fas fa-check"></i>
                      </span>
                      {texto.item3}
                    </li>
                    <li className="destacamos-list-item">
                      <span className="destacamos-list-item-icon pr-2">
                        <i className="fas fa-check"></i>
                      </span>
                      {texto.item4}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
