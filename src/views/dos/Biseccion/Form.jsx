import React, { useState, useEffect } from 'react';
import { Row, Col, Input, Button } from 'reactstrap';
import Evaluador from '../../../utils/Evaluador';

const Form = ({ state }) => {

  const [funcion, setFuncion] = useState('');
  const [x0, setX0] = useState(0);
  const [x1, setX1] = useState(0);
  const [tolerancia, setTolerancia] = useState(0);
  const [iteraciones, setIteraciones] = useState([]);
  const expr = /x/g;

  const evaluador = new Evaluador(expr);

  const [respuesta, setRespuesta] = useState({ f1: '', f2: '' });

  useEffect(() => {

    if ((respuesta.f1 * respuesta.f2) < 0) iteracionesFunc();

  }, [respuesta])

  const validar = () => {
    if (funcion === '') return false;
    return true;
  }

  const generar = () => {
    if (validar()) pasoUno();
    else alert("Debes agregar una función")
  }

  const iteracionesFunc = () => {
    let itera = [];

    let xi = x0;
    let xu = x1;

    let xr = (xi + xu) / 2;


    let n1 = evaluador.evaluarFuncion(funcion, xi);
    let n2 = evaluador.evaluarFuncion(funcion, xr);
    let producto = n1 * n2;

    itera.push({
      xi: xi.toFixed(4), xu: xu.toFixed(4), xr: xr.toFixed(4), fi: n1.toFixed(4),
      fxr: n2.toFixed(4), producto: producto.toFixed(4)
    });

    if (producto < 0) xu = xr;
    else xi = xr;


    let c = 0;
    while (!decimales(producto) && c < 100) {

      xr = (xi + xu) / 2;


      n1 = evaluador.evaluarFuncion(funcion, xi);
      producto = n1 * evaluador.evaluarFuncion(funcion, xr);;

      itera.push({
        xi: xi.toFixed(4), xu: xu.toFixed(4), xr: xr.toFixed(4), fi: n1.toFixed(4),
        fxr: n2.toFixed(4), producto: producto.toFixed(4)
      });

      if (producto < 0) xu = xr;
      else xi = xr;
      c++;
    }

    setIteraciones([...itera]);


  }

  const decimales = (n) => {
    if (n < 0) n *= -1;
    if (n > tolerancia) return false;
    return true;

  }

  const pasoUno = () => {
    const ini = evaluador.evaluarFuncion(funcion, x0);
    const ini2 = evaluador.evaluarFuncion(funcion, x1);

    setRespuesta({ f1: ini.toFixed(4), f2: ini2.toFixed(4) });

    if (ini * ini2 < 0) return true;
    return false;
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
              <p className="h5"><b>Valor inicial</b></p>
              <Input type="number" placeholder="x0" value={x0} onChange={e => setX0(e.target.value)} />
            </Col>
            <Col md="4">
              <p className="h5"><b>Valor inicial</b></p>
              <Input type="number" placeholder="x1" value={x1} onChange={e => setX1(e.target.value)} />
            </Col>
            <Col md="4">
              <p className="h5"><b>Tolerancia deseada</b></p>
              <Input type="number" placeholder="Aproximada" value={tolerancia} onChange={e => setTolerancia(e.target.value)} />
            </Col>
          </Row>
          <Row>
            <Col md="4" xl="4" className="ml-auto">
              <Button type="button" color="success" block onClick={generar}>Generar</Button>
            </Col>
          </Row>
          {respuesta.f1 !== '' &&
            <Row className="mt-5">
              <Col md="12">
                <p className="h3"><b>Paso 1:</b></p>
                <p className="h5 m-0">Funcion valuada en x0='{x0}' es igual a: <b>{respuesta.f1}</b></p>
                <p className="h5">Funcion valuada en x1='{x1}' es igual a: <b>{respuesta.f2}</b></p>
                <p className="h5">F(x0)F(x1) = <b>{(respuesta.f1 * respuesta.f2)}</b></p>
              </Col>
            </Row>
          }

          {iteraciones.length > 0 &&
            <Row className="mt-5">
            <Col md="12">
              <p className="h3">Paso 2:</p>
                <table className="table table-sm text-dark">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Xi</th>
                      <th scope="col">Xu</th>
                      <th scope="col">Xr</th>
                      <th scope="col">f(Xi)</th>
                      <th scope="col">f(Xr)</th>
                      <th scope="col">f(Xi)f(Xr)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {iteraciones.map((i, k) => {
                      return (
                        <tr key={k}>
                          <td>{k+1}</td>
                          <td>{i.xi}</td>
                          <td>{i.xu}</td>
                          <td>{i.xr}</td>
                          <td>{i.fi}</td>
                          <td>{i.fxr}</td>
                          <td>{i.producto}</td>

                        </tr>
                      );
                    })}

                  </tbody>
                </table>
              </Col>
            </Row>
          }


        </Col>




      </Row>

    </>
  );
}

export default Form;