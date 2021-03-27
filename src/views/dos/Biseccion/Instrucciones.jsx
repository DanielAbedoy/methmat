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
            <div class="table-responsive">
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
                        <td><samll>{e.funcion}</samll></td>
                        <td><samll>{e.comando}</samll></td>
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