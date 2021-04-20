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
                pasoUno()
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