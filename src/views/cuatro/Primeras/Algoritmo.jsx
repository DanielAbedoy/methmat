import React, { useState, useEffect } from 'react';
import { Row, Col, Input, Button } from 'reactstrap';

const Algoritmo = ({state}) => {
  
  const codigo = "";

  return (
    
    <Row>
        <Col md="12" xl="10" className="mx-auto">

          <Row>
            <Col md="12">
              <p className="h3"><b>Pasos a seguir</b></p>
          </Col>
          <Col className="mx-auto" md="9">
          <img className="" width="100%" src="http://estadistica-dma.ulpgc.es/FCC/imagenes/diagrama_Biseccion.svg" alt=""/>
          </Col>
        </Row>

        <Row className="mt-3">
            <Col md="12">
            <p className="h3"><b>Código</b></p>
            
            <Row >
              
              <pre style={{ width: "100%", maxHeight: "1000px" }}><code>{`
              Por: Abedoy Silva José Daniel

              class Evaluador {

                constructor(variable) {
              
                  this.variable = variable;
                  //this.variable = /x/g;;
              
                  this.expreciones = [
                    {
                      name: "pot",
                      expr: /pot/g,
                      replaceStr: "Math.pow"
                    },
                    {
                      name: "cos",
                      expr: /cos/g,
                      replaceStr: "Math.cos"
                    },
                    {
                      name: "sen",
                      expr: /sen/g,
                      replaceStr: "Math.sin"
                    },
                    {
                      name: "tan",
                      expr: /tan/g,
                      replaceStr: "Math.tan"
                    },
                  ];
              
                }
              
                
              
                evaluarFuncion(funcion, valor) {
              
                  funcion = funcion.replace(this.variable, valor);
                  
                  this.expreciones.forEach(e => {
                    funcion = funcion.replace(e.expr, e.replaceStr);
                  })
              
                  return eval(funcion);
              
                }
              
                
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
            
            
              `}
                </code></pre>
            </Row>
              
            </Col>
        </Row>
      </Col>
    </Row>

  );

}

export default Algoritmo;