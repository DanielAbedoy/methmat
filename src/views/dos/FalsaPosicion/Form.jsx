import React, { useState, useEffect } from 'react';
import { Row, Col, Input, Button } from 'reactstrap';
import Evaluador from '../../../utils/Evaluador';

const Form = ({ state }) => {

  const [funcion, setFuncion] = useState('pot(x,3)-2*pot(x,2)+3*x-8');
  const [x0, setX0] = useState(2.2);
  const [x1, setX1] = useState(2.5);
  const [tolerancia, setTolerancia] = useState(0.0003);
  const [message, setMessage] = useState("");
  const [iteraciones, setIteraciones] = useState([]);
  const expr = /x/g;

  const evaluador = new Evaluador(expr);

  const [respuesta, setRespuesta] = useState({ f1: '', f2: '' });

  const formatter = new Intl.NumberFormat('es-MX', {
    minimumFractionDigits: 4,
    maximumFractionDigits: 4,
  });


  useEffect(() => {

    if ((respuesta.f1 * respuesta.f2) < 0) iteracionesFunc();

  }, [respuesta])

  useEffect(() => {
    if (message !== "") {
      setTimeout(() => {
        alert("Hola")
      }, 5000)
    }
  }, [message])

  const validar = () => {

    if (funcion === '' || tolerancia === 0 || tolerancia === '') return false;
    return true;
  }

  const generar = () => {
    if (validar()) iteracionesFunc();
    else alert("Debes agregar una función o la tolerancia")
  }

  const iteracionesFunc = () => {
    try {
      let itera = [];

      let X1 = x0;
      let X2 = x1;

      let x3 = 0, y3 = 0;
      let xp = x0;
      let y1 = evaluador.evaluarFuncion(funcion, X1);
      let y2 = evaluador.evaluarFuncion(funcion, X2);

      itera.push({ xn: formatter.format(X1), xn1: formatter.format(X2), yn: formatter.format(y1), yn1: formatter.format(y2) });

      for (let i = 0; i <= 20; i++) {
        if ((y2 - y1) == 0) {
          alert("Error: no converge x=NaN")
          return null;
        }

        x3 = ((y2 * X1) - (y1 * X2)) / (y2 - y1);
        if (Math.abs((xp / x3 - 1)) < tolerancia) {
          
          setIteraciones([...itera]);
          return;
        }

        y3 = evaluador.evaluarFuncion(funcion, x3);


        if (y1 * y3 < 0) {
          
          X2 = x3;
          y2 = y3;
        } else {
          
          X1 = x3;
          y1 = y3;
        }
        itera.push({ xn: formatter.format(X1), xn1: formatter.format(X2), yn: formatter.format(y1), yn1: formatter.format(y2) });
        xp = x3;
      }
      setIteraciones([...itera]);


    } catch (error) {
      console.log(error)
      setMessage("")
    }


  }

  const decimales = (n) => {
    if (n < 0) n *= -1;
    if (n > tolerancia) return false;
    return true;

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
                <div className="table-responsive">
                  <table className="table table-sm text-dark">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Xi</th>
                        <th scope="col">Xi+1</th>
                        <th scope="col">yi</th>
                        <th scope="col">yi+1</th>
                      </tr>
                    </thead>
                    <tbody>
                      {iteraciones.map((i, k) => {
                        return (
                          <tr key={k}>
                            <td>{k + 1}</td>
                            <td>{i.xn}</td>
                            <td>{i.xn1}</td>
                            <td>{i.yn}</td>
                            <td>{i.yn1}</td>
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