import React, { useState, useEffect } from 'react';
import { Row, Col, Input, Button } from 'reactstrap';
import Evaluador from '../../../utils/Evaluador';

const Form = ({ state }) => {

  const [funcion, setFuncion] = useState('6*x-5');
  const [values, setValues] = useState({ a: -1.5, b: 0.5, h: 0.5 });
  const [iteraciones, setIteraciones] = useState([]);
  const [area, setArea] = useState(0);


  const expr = /x/g;

  const evaluador = new Evaluador(expr);


  const formatter = new Intl.NumberFormat('es-MX', {
    minimumFractionDigits: 4,
    maximumFractionDigits: 4,
  });


  const generar = () => {
    const valsX = generarIntervalos();
    const reps = [];
    let a = 0;
    valsX.forEach(v => {
      const B = v + values.h;
      //const h = (B - v) / 3;
      const h = (values.b - v) / 3;
      const x1 = values.h + v;
      const x2 = values.h + x1;
      const fa = evaluador.evaluarFuncion(funcion, v);
      const fb = evaluador.evaluarFuncion(funcion, B);
      const fx1 = evaluador.evaluarFuncion(funcion, x1);
      const fx2 = evaluador.evaluarFuncion(funcion, x2);
      const i = ((3 * values.h) / 8) * (fa + (3 * fx1) + (3 * fx2) + fb);
      a += i;
      reps.push({ a: v, B, fa, fb, fx1, fx2, i });
    });
    setArea(a);
    setIteraciones([...reps]);
  }

  const generarIntervalos = () => {
    const vals = [];
    for (let i = values.a*1; i <= values.b; i += (values.h * 1)) vals.push(i * 1);
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
              <Input type="number" placeholder="x0" value={values.a} onChange={e => setValues({ ...values, a: e.target.value })} />
            </Col>
            <Col md="4">
              <p className="h5"><b>Valor B</b></p>
              <Input type="number" placeholder="x1" value={values.b} onChange={e => setValues({ ...values, b: e.target.value })} />
            </Col>
            <Col md="4">
              <p className="h5"><b>Valor H</b></p>
              <Input type="number" placeholder="Aproximada" value={values.h} onChange={e => setValues({ ...values, h: e.target.value })} />
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
                        <th scope="col">a</th>
                        <th scope="col">b</th>
                        <th scope="col">f(a)</th>
                        <th scope="col">f(b)</th>
                        <th scope="col">f(x1)</th>
                        <th scope="col">f(x2)</th>
                        <th scope="col">I</th>
                      </tr>
                    </thead>
                    <tbody>
                      {iteraciones.map((i, k) => {
                        return (
                          <tr key={k}>
                            <td>{k + 1}</td>
                            <td>{i.a}</td>
                            <td>{i.B}</td>
                            <td>{i.fa}</td>
                            <td>{i.fb}</td>
                            <td>{i.fx1}</td>
                            <td>{i.fx2}</td>
                            <td>{i.i}</td>
                          </tr>
                        );
                      })}
                      <tr >
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><b>Area total: {area}</b></td>
                      </tr>
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