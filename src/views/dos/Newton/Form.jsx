import React, { useState, useEffect } from 'react';
import { Row, Col, Input, Button } from 'reactstrap';
import Evaluador from '../../../utils/Evaluador';


const Form = ({ state }) => {

  const [funcion, setFuncion] = useState('pot(x,3)+3*pot(x,2)+12*x+8');
  const [derivada, setDerivada] = useState('3*x*(x+2)+12');
  const [x0, setX0] = useState(0);
  const [reps, setReps] = useState(0);
  const [tolerancia, setTolerancia] = useState(0);
  const [iteraciones, setIteraciones] = useState([]);
  const expr = /x/g;

  const evaluador = new Evaluador(expr);

  const validar = () => {
    if (funcion === '' || derivada === '' || reps <= 0) return false;
    return true;
  }

  const [respuesta, setRespuesta] = useState({ f1: '', f2: '' });

  const formatter = new Intl.NumberFormat('es-MX', {
    minimumFractionDigits: 4,      
    maximumFractionDigits: 4,
 });

  const generar = () => {
    try {
      if (validar()) {
        iteracionesFn();
      }  
    } catch (error) {
      console.log(error)
      alert("Algo salio mal")
    }
    
  }

  const iteracionesFn = () => {
    let i = 0;
    let f = false;
    let Xn = x0*1;
    let iterac = [];
    do {
      let funcionEval = evaluador.evaluarFuncion(funcion, Xn )*1;
      let derivadaEval = evaluador.evaluarFuncion(derivada, Xn)*1;
      let XN1 = Xn - (funcionEval / derivadaEval);

      iterac.push({xn:Xn, fxn: funcionEval, fpxn: derivadaEval, xn1:XN1});
      if (i > 0) {
        let fix1 = formatter.format(XN1);
        let fix2 = formatter.format(iterac[i - 1].xn1);
        console.log(fix1,fix2)
        if (fix1 === fix2) f = true;
      }
      i++;
      Xn = XN1;
    } while (i < reps && !f );
    
    setIteraciones([...iterac]);
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
            <Col md="12" className="mt-3">
              <p className="h5"><b>Derivada</b></p>
              <Input type="text" placeholder="Escribe la derivada" value={derivada} onChange={e => setDerivada(e.target.value)} />
            </Col>
          </Row>
          <Row className="my-4">
            <Col md="4">
              <p className="h5"><b>Valor inicial</b></p>
              <Input type="number" placeholder="x0" value={x0} onChange={e => setX0(e.target.value)} />
            </Col>
            <Col md="4">
              <p className="h5"><b>Num. repeticiones</b></p>
              <Input type="number" placeholder="máximo numero de repeticiones" value={reps} onChange={e => setReps(e.target.value)} />
            </Col>
           {/*  <Col md="4">
              <p className="h5"><b>Tolerancia deseada</b></p>
              <Input type="number" placeholder="Aproximada" value={tolerancia} onChange={e => setTolerancia(e.target.value)} />
            </Col> */}
          </Row>
          <Row>
            <Col md="4" xl="4" className="ml-auto">
              <Button type="button" color="success" block onClick={generar}>Generar</Button>
            </Col>
          </Row>
         
          {iteraciones.length > 0 &&
            <Row className="mt-5">
            <Col md="12">
              <p className="h3">Iteraciones:</p>
              <div className="table-responsive">
                <table className="table table-sm text-dark">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Xn</th>
                      <th scope="col">F(Xn)</th>
                      <th scope="col">F´(Xn)</th>
                      <th scope="col">Xn+1</th>
                    </tr>
                  </thead>
                  <tbody>
                    {iteraciones.map((i, k) => {
                      return (
                        <tr key={k}>
                          <td>{k+1}</td>
                          <td>{i.xn.toFixed(4)}</td>
                          <td>{i.fxn.toFixed(4)}</td>
                          <td>{i.fpxn.toFixed(4)}</td>
                          <td>{i.xn1.toFixed(4)}</td>
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