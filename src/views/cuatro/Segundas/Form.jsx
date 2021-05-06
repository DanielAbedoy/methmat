import React, { useState, useEffect } from 'react';
import { Row, Col, Input, Button } from 'reactstrap';
import Evaluador from '../../../utils/Evaluador';

const Form = ({ state }) => {

  const [funcion, setFuncion] = useState('3*pot(x,2)-5*x+6');
  const [values, setValues] = useState({ a: -1.5, b: 0.5, h: 0.5, tipo: "" });
  const [iteraciones, setIteraciones] = useState([]);

  
  const expr = /x/g;

  const evaluador = new Evaluador(expr);

  
  const formatter = new Intl.NumberFormat('es-MX', {
    minimumFractionDigits: 4,
    maximumFractionDigits: 4,
  });


  const generar = () => {
    if (values.tipo === "adelante") adelante();
    else if (values.tipo === "atras") atras();
    else if (values.tipo === "centro") centro();
  }

  const atras = () => {
    const valsX = generarIntervalos();
    let results = [];
    valsX.forEach((v, i) => {
      const f = evaluador.evaluarFuncion(funcion, v );
      const f1 = evaluador.evaluarFuncion(funcion, v - values.h);
      const f2 = evaluador.evaluarFuncion(funcion, v-(2*values.h));
      const d = (f - (2 * f1) + f2) / Math.pow(values.h, 2);
      results.push({ v,f, f1, d });
    });

    setIteraciones([...results]);
  }

  const adelante = () => {
    const valsX = generarIntervalos();
    let results = [];
    valsX.forEach((v, i) => {
      //if (i + 1 === valsX.length) return;
      const f = evaluador.evaluarFuncion(funcion, v + (values.h*2));
      const f1 = evaluador.evaluarFuncion(funcion, v + values.h);
      const f2 = evaluador.evaluarFuncion(funcion, v);
      const d = (f - (2 * f1) + f2) / Math.pow(values.h, 2);
      results.push({ v,f, f1, d });
    });

    setIteraciones([...results]);
  }

  const centro = () => {
    const valsX = generarIntervalos();
    let results = [];
    valsX.forEach((v, i) => {
      if (i + 1 === valsX.length) return;
      const f = evaluador.evaluarFuncion(funcion, v + values.h);
      const f1 = evaluador.evaluarFuncion(funcion, v);
      const f2 = evaluador.evaluarFuncion(funcion, v-values.h);
      const d = (f - (2 * f1) + f2) / Math.pow(values.h, 2);
      results.push({ v,f, f1, d });
    });

    setIteraciones([...results]);
  }

  const generarIntervalos = () => {
    const vals = [];
    for (let i = values.a; i <= values.b; i += values.h) vals.push(i);
    return vals;
  }

  return (
    <>

      <Row>
        <Col md="12" xl="8" className="mx-auto">

          <Row>
            <Col md="12">
              <p className="h5"><b>Función</b></p>
              <Input type="text" placeholder="Escribe la función" value={funcion} onChange={e => setFuncion(e.target.value)} />
            </Col>
          </Row>
          <Row className="my-4">
            <Col md="4">
              <p className="h5"><b>Valor A</b></p>
              <Input type="number" placeholder="x0" value={values.a} onChange={e => setValues({...values,a:e.target.value})} />
            </Col>
            <Col md="4">
              <p className="h5"><b>Valor B</b></p>
              <Input type="number" placeholder="x1" value={values.b} onChange={e => setValues({...values,b:e.target.value})} />
            </Col>
            <Col md="4">
              <p className="h5"><b>Valor H</b></p>
              <Input type="number" placeholder="Aproximada" value={values.h} onChange={e => setValues({...values,h:e.target.value})} />
            </Col>
            <Col md="4" className="mt-4">
              <p className="h5"><b>Tipo de diferenciación</b></p>
              <Input type="select" value={values.tipo} onChange={e => setValues({...values,tipo:e.target.value})}>
                <option value="">Selecciona...</option>
                <option value="adelante">Hacia adelante</option>
                <option value="atras">Hacia atras</option>
                <option value="centro">Hacia el centro</option>
              </Input>
            </Col>
          </Row>
          <Row>
            <Col md="4" xl="4" className="ml-auto">
              <Button type="button" color="success" block onClick={generar}>Generar</Button>
            </Col>
          </Row>



          {iteraciones.length > 0 &&
            <Row className="mt-5">
              <Col md="12">
                <p className="h3">Paso 2:</p>
                <div className="table-responsive">
                  <table className="table table-sm text-dark">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">X</th>
                        <th scope="col">f(xi)</th>
                        <th scope="col">f´(xi)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {iteraciones.map((i, k) => {
                        return (
                          <tr key={k}>
                            <td>{k + 1}</td>
                            <td>{i.v}</td>
                            <td>{i.f}</td>
                            <td>{i.d}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </Col>
            </Row>
          }

          

        </Col>




      </Row>

    </>
  );
}

export default Form;