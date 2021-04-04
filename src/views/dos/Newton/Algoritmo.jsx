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
          <img className="" width="100%" src="https://eloradanaochoa.files.wordpress.com/2014/04/newtin-raphson1.jpg" alt=""/>
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


              const validar = () => {
                if (funcion === '' || derivada === '') return false;
                return true;
              }
            
              const generar = () => {
                if (validar()) {
                  iteracionesFn();
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
                    let fix1 = XN1.toFixed(4);
                    let fix2 = iterac[i - 1].xn1.toFixed(4);
                    console.log(fix1,fix2)
                    if (fix1 === fix2) f = true;
                  }
                  i++;
                  Xn = XN1;
                } while (i < reps && !f);
                
                setIteraciones([...iterac]);
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