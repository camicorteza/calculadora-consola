# Calculadora con Historial de Operaciones 

Aplicación de consola desarrollada en JavaScript puro, para el proyecto del
**Módulo 3: Fundamentos de programación en JavaScript**.

## Descripción

Es una calculadora interactiva que se ejecuta directamente en la consola del
navegador. Permite realizar operaciones matemáticas básicas (suma, resta,
multiplicación y división), guarda cada operación en un historial, y permite
consultar ese historial al finalizar la sesión.

## Cómo ejecutarla

1. Abre cualquier página web en tu navegador (Chrome, Firefox, Safari).
2. Abre las herramientas de desarrollador:
   - **Mac:** `Cmd + Option + I`
   - **Windows/Linux:** `F12` o `Ctrl + Shift + I`
3. Ve a la pestaña **Console**.
4. Abre el archivo `calculadora.js` de este repositorio, copia todo su
   contenido, y pégalo en la consola.
5. Presiona `Enter`.
6. Sigue las ventanas emergentes (`prompt`/`alert`/`confirm`) que van
   apareciendo para interactuar con la calculadora.

## Funcionalidades

- **Menú interactivo** vía `prompt()`: el usuario elige una operación
  (suma, resta, multiplicación o división).
- **Validación de entradas**: si el usuario ingresa algo que no es un
  número, se le vuelve a pedir hasta que ingrese un valor válido.
- **Validación de división por cero**: muestra un mensaje de error sin
  detener el programa.
- **Historial de operaciones**: cada cálculo se guarda como un objeto
  (`{ operacion, numero1, numero2, resultado, fecha }`) dentro de un
  arreglo.
- **Ciclo de uso repetido**: al terminar una operación, se pregunta si
  el usuario quiere realizar otra (`confirm()`), permitiendo múltiples
  cálculos en una misma sesión.
- **Resumen final**: al salir, se imprime en consola todo el historial
  ordenado, y un resumen de solo los resultados numéricos usando `map()`.

## Estructura del código

| Función | Propósito | Lección relacionada |
|---|---|---|
| `sumar`, `restar`, `multiplicar`, `dividir` | Operaciones matemáticas puras | Lección 4: Funciones |
| `ejecutarOperacion` | Decide qué función llamar según la opción elegida | Lección 2: Condicionales |
| `crearRegistroHistorial` | Crea un objeto con los datos de una operación | Lección 5: Objetos |
| `mostrarHistorial` | Recorre el historial con `forEach()` | Lección 3 y 5 |
| `filtrarHistorialPorOperacion` | Filtra el historial con un `for` clásico | Lección 3: Arreglos y ciclos |
| `pedirNumero` | Valida que la entrada del usuario sea un número (usa `while`) | Lección 2 |
| `obtenerSoloResultados` | Extrae solo los resultados usando `map()` | Lección 5: Objetos |
| `iniciarCalculadora` | Programa principal, controla el ciclo con `while` | Lección 3 |

## Ejemplo de uso

```
Bienvenido a la Calculadora con Historial.

[Aparece un prompt con el menú]
1. Sumar
2. Restar
3. Multiplicar
4. Dividir

> Usuario elige "1"
> Ingresa el primer número: 10
> Ingresa el segundo número: 5

[Alert] Resultado: 10 + 5 = 15

[Confirm] ¿Quieres realizar otra operación? → Sí/No
```

Al finalizar la sesión, la consola muestra:

```
=== HISTORIAL DE OPERACIONES ===
1. Suma: 10 y 5 = 15 (fecha y hora)
...

Solo los resultados numéricos (usando map()):
[15, ...]
```

## Tecnologías

- JavaScript (ES6): `let`, `const`, funciones, arreglos, objetos,
  `for`, `while`, `switch`, `map()`, `forEach()`.
- Interacción con el usuario vía `prompt()`, `alert()`, `confirm()`.

## Autor

Camila Cortés