import React, { useState, useEffect } from 'react';
import { Row, Col, Input, Button } from 'reactstrap';
import Evaluador from '../../../utils/Evaluador';

const Form = ({ state }) => {

  const [num_ecuaciones, setNumEcuaciones] = useState(3);
  const [inputs, setInputs] = useState({
    0: { value: "(20.2+0.9*x,,+0.3*x,,,)/25" },
    1: { value: "(18.9+3.7*x,-0.1*x,,,)/7.3" },
    3: { value: "(56.4+0.7*x,+0.1*x,,)/8.2" },
  });

  const [x0, setX0] = useState(1);
  const [tolerancia, setTolerancia] = useState(0.00001);
  const [iteraciones, setIteraciones] = useState([]);
  const expr = /x/g;

  const evaluador = new Evaluador(expr);


  const formatter = new Intl.NumberFormat('es-MX', {
    minimumFractionDigits: 4,
    maximumFractionDigits: 4,
  });


  useEffect(() => {
    const inArr = {};
    for (let i = 0; i < num_ecuaciones; i++) inArr[i] = { value: "" }
  }, [num_ecuaciones])

  const setValueInput = (key, value) => {
    const arr = { ...inputs };
    arr[key].value = value;
    setInputs({ ...arr });
  }

  const generar = () => {
    try {
      let vars = generarVars();

      let vals = [];
      let copia = [];
      for (let i = 0; i < num_ecuaciones; i++) vals.push({ r: x0, xn: i });

      let arrVals = [];
      let I = 0;
      do {

        for (let i = 0; i < num_ecuaciones; i++) {
          if (I > 1) {
            let v = vals[i];
            if (v.e <= tolerancia) break;
          }
          const R = formatter.format(evaluador.evaluarFuncionMasVariables(inputs[i].value, vars, vals));
          let e = 0;
          if (I > 0) e = encontrarError(vals[i].r, R * 1);
          copia.push({ r: R * 1, e: e, xn: i });
        }
        arrVals.push(copia);
        vals = copia.slice();
        copia = [];
        I++;

      } while (vals.length > 0);

      console.log(arrVals);
      setIteraciones(arrVals);
    } catch (e) {
      alert("Algo sali mal", e)
    }

  }

  const encontrarError = (valAnterior, valActual) => {
    return formatter.format(Math.abs(1 - (valAnterior / valActual))) * 1;
  }

  const generarVars = () => {
    let vars = [];
    Object.keys(inputs).forEach((e, k) => {
      let indice = "";
      for (let i = k; i >= 0; i--) indice += ",";
      vars.push("x" + indice);
    })
    return vars;
  }




  return (
    <>

      <Row>
        <Col md="12" xl="8" className="mx-auto">

          <Row>

            <Col md="4">
              <p className="h5"><b>Número de ecuaciones</b></p>
              <Input type="number" placeholder="x0" value={num_ecuaciones} onChange={e => setNumEcuaciones(e.target.value)} />
            </Col>

          </Row>

          {num_ecuaciones !== 0 &&
            <Row style={{ maxHeight: "500px", overflow: "auto" }}>

              {Object.keys(inputs).map((i, k) => {
                return (
                  <Col md="7" className="mx-auto my-2" key={k}>
                    {/* <p className="h5"><b>Valor inicial</b></p> */}
                    <Input type="text" placeholder={`Ecuacion despejada en X${(k + 1)}`}
                      value={inputs[k].value} onChange={e => setValueInput(k, e.target.value)}
                    />
                  </Col>
                );
              })}

            </Row>
          }

          <Row className="my-4">
            <Col md="4">
              <p className="h5"><b>Valor inicial</b></p>
              <Input type="number" placeholder="x0" value={x0} onChange={e => setX0(e.target.value)} />
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

        </Col>


      </Row>

      {iteraciones.length > 0 &&
        <Row className="mt-5">
          <Col md="12">
            <p className="h3">Tabla</p>
            <div className="table-responsive">
              <table className="table table-sm text-dark">
                <thead>
                  <tr>
                    <th scope="col">Iteracion#</th>
                    {iteraciones.map((i, k) => {
                      if (k + 1 > num_ecuaciones) return null;
                      return <th scope="col" key={k}>X{(k + 1)}</th>
                    })}
                  </tr>
                </thead>
                <tbody>
                  {iteraciones.map((i, k) => {
                    return (
                      <tr key={k}>
                        <td>{k + 1}</td>
                        {i.map((r, j) => {
                          if (r.xn === j) return <td key={j}>{r.r}</td>;
                          else return <td key={j}>-</td>
                        })}
                      </tr>
                    );
                  })}


                </tbody>
              </table>
            </div>
          </Col>
        </Row>
      }


    </>
  );
}

export default Form;