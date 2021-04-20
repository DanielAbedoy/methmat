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
          <img className="" width="100%" src="https://metodosjl.files.wordpress.com/2017/03/gauss-seidel.png?w=356" alt=""/>
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
              
                
              
                evaluarFuncionMasVariables(funcion, variables, valores) {
    
                  for (let i = variables.length -1 ; i >=0; i--) funcion = funcion.replace(variables[i], valores[i].r);
                  this.expreciones.forEach(e => funcion = funcion.replace(e.expr, e.replaceStr));
                  try {
                    return eval(funcion);  
                  } catch (error) {
                    console.log(error)
                    return 0;
                  }
                  
                }
              
                
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