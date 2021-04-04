import React from 'react';
import { Row, Col } from 'reactstrap';
import Evaluador from '../../../utils/Evaluador';

const Instrucciones = ({ state }) => {

  const evaluador = new Evaluador(null);

  return (
    <Row>

      <Col md="12">

        <p className="h3 mb-3"><b>Comandos matemáticos</b></p>

        <Row >
          <Col md="7" className="mx-auto">
            <div className="table-responsive">
              <table className="table table-sm text-dark">
                <thead className="bg-primary text-white">
                  <tr>
                    <th scope="col"><small>Nombre</small></th>
                    <th scope="col"><small>Funcion</small></th>
                    <th scope="col"><small>Comando</small></th>
                  </tr>
                </thead>
                <tbody>
                  {evaluador.expreciones.map((e, k) => {
                    return (
                      <tr key={k}>
                        <td><small>{e.name}</small></td>
                        <td><small>{e.funcion}</small></td>
                        <td><small>{e.comando}</small></td>
                      </tr>
                    );
                  })}

                </tbody>
              </table>
            </div>
          </Col>
        </Row>


      </Col>


    </Row>
  );
}

export default Instrucciones;