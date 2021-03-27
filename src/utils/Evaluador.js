class Evaluador {

  constructor(variable) {

    this.variable = variable
    //this.variable = /x/g;;

    this.expreciones = [
      {
        name: "Potencia",
        expr: /pot/g,
        replaceStr: "Math.pow",
        funcion: "x^n",
        comando:"pot(x,n)"
      },
      {
        name: "Cuadrado",
        expr: /cuad/g,
        replaceStr: "Math.sqrt",
        funcion: "sqrt(x)",
        comando:"cuad(x)"
      },
      {
        name: "Valor absoluto",
        expr: /abs/g,
        replaceStr: "Math.abs",
        funcion: "abs(x)",
        comando:"abs(x)"
      },
      {
        name: "Logaritmo",
        expr: /log/g,
        replaceStr: "Math.log",
        funcion: "log(x)",
        comando:"log(x)"
      },
      {
        name: "Logaritmo 10",
        expr: /log10/g,
        replaceStr: "Math.log10",
        funcion: "log10(x)",
        comando:"log10(x)"
      },
     
      {
        name: "Valor de PI",
        expr: /PI/g,
        replaceStr: "Math.PI",
        funcion: "PI",
        comando:"PI"
      },
      {
        name: "Valor de exponente",
        expr: /E/g,
        replaceStr: "Math.E",
        funcion: "E",
        comando:"E"
      },

      {
        name: "Coseno",
        expr: /cos/g,
        replaceStr: "Math.cos",
        funcion: "cos(x)",
        comando:"cos(x)"
      },
      {
        name: "Seno",
        expr: /sen/g,
        replaceStr: "Math.sin",
        funcion: "sin(x)",
        comando:"sen(x)"
        
      },
      {
        name: "Tangente",
        expr: /tan/g,
        replaceStr: "Math.tan",
        funcion: "tan(x)",
        comando:"tan(x)"
      },
      
      {
        name: "Exponencial",
        expr: /exp/g,
        replaceStr: "Math.exp",
        funcion: "exp(x)",
        comando:"exp(x)"
      },
      {
        name: "Arco coseno",
        expr: /acos/g,
        replaceStr: "Math.acos",
        funcion: "arcos(x)",
        comando:"acos(x)"
      },
      {
        name: "Arco cosecante",
        expr: /acoshe/g,
        replaceStr: "Math.acosh",
        funcion: "acoseh(x)",
        comando:"acoshe(x)"
      },
      {
        name: "Arco seno",
        expr: /asen/g,
        replaceStr: "Math.asin",
        funcion: "asin(x)",
        comando:"asen(x)"
      },
      {
        name: "Arco secante",
        expr: /asenh/g,
        replaceStr: "Math.asinh",
        funcion: "asinh(x)",
        comando:"asenh(x)"
      },
      {
        name: "Arco tangente",
        expr: /aten/g,
        replaceStr: "Math.atan",
        funcion: "atan(x)",
        comando:"atan(x)"
      },
      {
        name: "Arco cotangente",
        expr: /atanh/g,
        replaceStr: "Math.atanh",
        funcion: "atanh(x)",
        comando:"atanh(x)"
      },
      
    ];

  }

  

  evaluarFuncion(funcion, valor) {
    funcion = funcion.replace(this.variable, valor);
    
    this.expreciones.forEach(e => {
      funcion = funcion.replace(e.expr, e.replaceStr);
    })

    try {
      return eval(funcion);  
    } catch (error) {
      return 0;
    }
    

  }

  
}

export default Evaluador;