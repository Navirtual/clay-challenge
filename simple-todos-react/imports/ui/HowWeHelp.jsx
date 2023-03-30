import React from 'react'
import './HowWeHelp.css';

export const HowWeHelp = () => {
    return (
        <div className="container-fluid mt-4 mb-4 text-center">
            <div className="row">
                <div className="col"></div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <span className="icon">Icon</span>
                            <h2>Conciliación Bancaria</h2>
                            <p>Cuadra la caja de tu empresa de manera confiable y segura. Nos conectamos automáticamente a bancos, SII y facturadores. Todo desde nuestro Software contable y financiero</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <span className="icon">Icon</span>
                            <h2>Gestión y Cobranza</h2>
                            <p>Reportería instantánea de clientes y proveedores. Con nuestro software contable y de gestión financiera, automatizamos procesos para tener una cobranza más eficiente</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <span className="icon">Icon</span>
                            <h2>Contabilidad</h2>
                            <p>Porque en Clay la prioridad es facilitar tu gestión, automatiza hasta el 80% de tu contabilidad y obtén los estados financieros de tu negocio de forma sencilla, 100% disponibles para cuando los necesites.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
