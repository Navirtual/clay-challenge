import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { COMPONENTE } from "../../utils/";
import { TextsCollection } from "../../../api/TextsCollection";
import "./jumbotron.style.css";

export const Jumbotron = ({ lang }) => {
  const texto = useTracker(() =>
    TextsCollection.findOne({ lang, component: COMPONENTE.JUMBOTRON })
  );

  /**
   * Se comenta implementación que utiliza el service.
   */

  // const [texto, setTexto] = useState();
  // useEffect(() => {
  //   TextosService(lang, COMPONENTE.JUMBOTRON).then((response) => {
  //     setTexto(response);
  //   });
  // }, [lang, t]);

  return (
    texto?.title && (
      <div className="container-fluid jumbotron-container mb-4">
        <div className="container pt-4 pb-4">
          <div className="row">
            <div className="col-md-6">
              <div className="card-body">
                <h2 className="jumbotron-title mb-4">{texto.title}</h2>
                <h2 className="jumbotron-text mb-4">{texto.text}</h2>
                <div className="row pt-4">
                  <div className="col">
                    <button className="btn btn-primary btn-start-now">
                      {texto.button.start}
                    </button>
                    <button className="btn btn-primary btn-free-test">
                      {texto.button.test}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img src="https://clay.cl/wp-content/uploads/2020/07/header-clay-pana-1.svg" />
            </div>
          </div>
        </div>
      </div>
    )
  );
};
