/* ============================================================
   CALCULADORA CON HISTORIAL DE OPERACIONES
   Módulo 3: Fundamentos de programación en JavaScript
   ============================================================ */

let historial = [];


function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  // Validación: no se puede dividir por cero
  if (b === 0) {
    return null;
  }
  return a / b;
}

// ------------------------------------------------------------
// LECCIÓN 2: Condicionales — decide qué función llamar
// según la operación elegida por el usuario .
// ------------------------------------------------------------

function ejecutarOperacion(operacion, a, b) {
  let resultado;

  switch (operacion) {
    case "1": // Suma
      resultado = sumar(a, b);
      break;
    case "2": // Resta
      resultado = restar(a, b);
      break;
    case "3": // Multiplicación
      resultado = multiplicar(a, b);
      break;
    case "4": // División
      resultado = dividir(a, b);
      break;
    default:
      resultado = null;
  }

  return resultado;
}

// ------------------------------------------------------------
// LECCIÓN 5: Objetos — crea un objeto con propiedades para
// representar UNA operación del historial.
// ------------------------------------------------------------

function crearRegistroHistorial(nombreOperacion, a, b, resultado) {
  return {
    operacion: nombreOperacion,
    numero1: a,
    numero2: b,
    resultado: resultado,
    fecha: new Date().toLocaleString()
  };
}

// Traduce el código de operación ("1","2","3","4") a un nombre legible
function nombreDeOperacion(codigo) {
  switch (codigo) {
    case "1":
      return "Suma";
    case "2":
      return "Resta";
    case "3":
      return "Multiplicación";
    case "4":
      return "División";
    default:
      return "Desconocida";
  }
}

// ------------------------------------------------------------
// LECCIÓN 3: Arreglos y ciclos 
// ------------------------------------------------------------

function mostrarHistorial() {
  if (historial.length === 0) {
    console.log("El historial está vacío. Aún no se han realizado operaciones.");
    return;
  }

  console.log("=== HISTORIAL DE OPERACIONES ===");
  historial.forEach(function (registro, indice) {
    console.log(
      (indice + 1) + ". " + registro.operacion + ": " +
      registro.numero1 + " y " + registro.numero2 +
      " = " + registro.resultado +
      " (" + registro.fecha + ")"
    );
  });
}

// ------------------------------------------------------------
// LECCIÓN 3: Función que FILTRA elementos del arreglo según una condición
// ------------------------------------------------------------

function filtrarHistorialPorOperacion(nombreOperacion) {
  
  let resultadosFiltrados = [];
  for (let i = 0; i < historial.length; i++) {
    if (historial[i].operacion === nombreOperacion) {
      resultadosFiltrados.push(historial[i]);
    }
  }
  return resultadosFiltrados;
}

// ------------------------------------------------------------
// LECCIÓN 2: Validación de entradas del usuario
// ------------------------------------------------------------

function pedirNumero(mensaje) {
  let entrada = prompt(mensaje);
  let numero = parseFloat(entrada);

  // Validación: reintenta si no es un número válido
  while (isNaN(numero)) {
    entrada = prompt("Eso no es un número válido. " + mensaje);
    numero = parseFloat(entrada);
  }

  return numero;
}

// ------------------------------------------------------------
// LECCIÓN 1: Uso de prompt() y alert() para interacción con el usuario
// Función principal que ejecuta un ciclo de la calculadora
// ------------------------------------------------------------

function realizarCalculo() {
  let menu =
    "CALCULADORA CON HISTORIAL\n\n" +
    "Elige una operación:\n" +
    "1. Sumar\n" +
    "2. Restar\n" +
    "3. Multiplicar\n" +
    "4. Dividir\n\n" +
    "Escribe el número de la opción:";

  let opcion = prompt(menu);

  // Validación: solo se aceptan las opciones 1 a 4
  if (["1", "2", "3", "4"].indexOf(opcion) === -1) {
    alert("Opción inválida. Debes elegir un número del 1 al 4.");
    return;
  }

  let numero1 = pedirNumero("Ingresa el primer número:");
  let numero2 = pedirNumero("Ingresa el segundo número:");

  let resultado = ejecutarOperacion(opcion, numero1, numero2);
  let nombreOp = nombreDeOperacion(opcion);

  // Validación: división por cero
  if (resultado === null) {
    alert("Error: no se puede dividir por cero.");
    console.log("Intento de división por cero con " + numero1 + " / " + numero2);
    return;
  }

  // Guarda el resultado en el historial (arreglo de objetos)
  let registro = crearRegistroHistorial(nombreOp, numero1, numero2, resultado);
  historial.push(registro);

  alert(
    "Resultado:\n" +
    numero1 + " " + simboloDeOperacion(opcion) + " " + numero2 +
    " = " + resultado
  );

  console.log(nombreOp + ": " + numero1 + ", " + numero2 + " = " + resultado);
}

function simboloDeOperacion(codigo) {
  switch (codigo) {
    case "1": return "+";
    case "2": return "-";
    case "3": return "×";
    case "4": return "÷";
    default: return "?";
  }
}

// ------------------------------------------------------------
// LECCIÓN 5: map() — genera un resumen de solo los resultados numéricos
// (requisito explícito: "recorrerlo con map() o forEach()")
// ------------------------------------------------------------

function obtenerSoloResultados() {
  return historial.map(function (registro) {
    return registro.resultado;
  });
}

// ------------------------------------------------------------
// PROGRAMA PRINCIPAL
// ------------------------------------------------------------

function iniciarCalculadora() {
  console.log("Bienvenido a la Calculadora con Historial.");
  let continuar = true;

  while (continuar) {
    realizarCalculo();

    let respuesta = confirm("¿Quieres realizar otra operación?");
    continuar = respuesta;
  }

  console.log("\n--- Sesión finalizada ---");
  mostrarHistorial();

  console.log("\nSolo los resultados numéricos (usando map()):");
  console.log(obtenerSoloResultados());
}

// Inicia el programa
iniciarCalculadora();