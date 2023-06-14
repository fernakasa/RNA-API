import { NeuralNetwork } from 'brain.js'

// FUNCION PARA RANDOM ENTRE VALORES
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const nombres = {
  43346450: 'Rojas Mariana de los Milagros',
  43420010: 'Boattini Nicolas Alejandro',
  34093440: 'Sanchez Fernando Gustavo',
  42789536: 'Simoni Stefano Juan',
  42736478: 'Raso Garcia Julian Osvaldo',
  41696249: 'Barboza Ivan Maximiliano',
  41516800: 'Casco Juan Diego',
}

// DATOS DE ALUMNOS
const alumnos = {
  43346450: {
    101: [6, 7, 5, 8, 7],
    501: [10, 10, 8, 8, 9],
    201: [9, 4, 8, 8, 7],
    102: [9, 7, 6, 9, 8],
    401: [8, 6, 6, 8, 8],
    103: [6, 7, 6, 7, 6],
    301: [5, 8, 8, 6, 8],
    104: [8, 9, 10, 9, 9],
    202: [8, 7, 8, 9, 8],
    105: [9, 8, 9, 9, 9],
    106: [9, 8, 8, 9, 8],
    402: [10, 10, 8, 9, 9],
    203: [8, 8, 6, 9, 8],
    107: [8, 9, 9, 8, 8],
    204: [6, 8, 8, 9, 8],
    502: [8, 8, 9, 9, 8],
    503: [8, 8, 9, 9, 8],
    302: [8, 8, 9, 9, 8],
    108: [6, 9, 9, 9, 8],
    303: [9, 8, 9, 8, 8],
    109: [9, 9, 6, 10, 8],
    403: [8, 9, 8, 10, 9],
    110: [7, 8, 8, 9, 8],
    205: [9, 9, 8, 10, 9],
    404: [8, 8, 7, 8, 8],
    405: [6, 9, 8, 8, 8],
    206: [10, 10, 7, 10, 9],
    304: [9, 10, 9, 9, 9],
    504: [9, 9, 8, 9, 9],
    406: [9, 7, 10, 10, 9],
    207: [8, 9, 8, 10, 9],
    505: [10, 9, 10, 9, 9],
    208: [9, 9, 8, 9, 9],
    305: [9, 9, 9, 8, 9],
    209: [9, 9, 10, 10, 9],
    407: [9, 9, 9, 8, 9],
    210: [9, 10, 10, 10, 10],
    306: [7, 8, 8, 10, 8],
    408: [8, 8, 8, 8, 8],
    409: [8, 8, 8, 8, 8],
    410: [8, 8, 8, 8, 8],
    211: [8, 8, 8, 8, 8],
    307: [8, 8, 8, 8, 8],
    506: [8, 8, 8, 8, 8],
    411: [8, 8, 8, 8, 8],
    507: [8, 8, 8, 8, 8],
    308: [8, 8, 8, 8, 8],
  },
  43420010: {
    101: [7, 10, 7, 8, 8],
    501: [8, 9, 9, 7, 8],
    201: [10, 10, 8, 8, 9],
    102: [9, 7, 9, 9, 8],
    401: [8, 8, 7, 8, 8],
    103: [8, 9, 9, 9, 9],
    301: [6, 8, 9, 9, 8],
    104: [9, 10, 10, 9, 9],
    202: [9, 9, 9, 9, 9],
    105: [9, 9, 9, 9, 9],
    106: [6, 9, 8, 9, 8],
    402: [10, 10, 7, 9, 9],
    203: [9, 9, 8, 9, 9],
    107: [8, 9, 9, 8, 8],
    204: [7, 8, 8, 9, 8],
    502: [10, 9, 10, 9, 9],
    503: [9, 9, 9, 9, 9],
    302: [7, 9, 9, 9, 8],
    108: [6, 9, 10, 9, 8],
    303: [10, 9, 9, 9, 9],
    109: [9, 9, 6, 10, 8],
    403: [10, 10, 7, 9, 9],
    110: [7, 9, 8, 8, 8],
    205: [9, 10, 8, 8, 9],
    404: [8, 9, 7, 9, 8],
    405: [8, 9, 9, 8, 8],
    206: [10, 10, 7, 10, 9],
    304: [8, 9, 10, 8, 9],
    504: [9, 8, 8, 8, 8],
    406: [7, 9, 10, 9, 9],
    207: [9, 9, 10, 9, 9],
    505: [9, 8, 9, 10, 9],
    208: [9, 9, 9, 8, 9],
    305: [9, 9, 9, 7, 8],
    209: [9, 9, 10, 9, 9],
    407: [7, 8, 9, 8, 8],
    210: [9, 10, 10, 10, 10],
    306: [8, 8, 8, 10, 8],
    408: [8, 8, 8, 8, 8],
    409: [8, 8, 8, 8, 8],
    410: [8, 8, 8, 8, 8],
    211: [8, 8, 8, 8, 8],
    307: [8, 8, 8, 8, 8],
    506: [8, 8, 8, 8, 8],
    411: [8, 8, 8, 8, 8],
    507: [8, 8, 8, 8, 8],
    308: [8, 8, 8, 8, 8],
  },
  34093440: {
    101: [8, 8, 8, 8, 8],
    501: [6, 6, 6, 6, 6],
    201: [6, 6, 6, 6, 6],
    102: [10, 7, 8, 9, 8],
    401: [9, 8, 7, 9, 8],
    103: [10, 6, 9, 7, 8],
    301: [9, 9, 8, 10, 9],
    104: [8, 8, 8, 8, 8],
    202: [6, 6, 6, 6, 6],
    105: [9, 8, 8, 9, 8],
    106: [9, 10, 8, 9, 9],
    402: [10, 9, 8, 9, 9],
    203: [8, 8, 8, 8, 8],
    107: [8, 9, 9, 8, 8],
    204: [8, 8, 8, 8, 8],
    502: [8, 9, 9, 10, 9],
    503: [10, 9, 8, 9, 9],
    302: [7, 7, 7, 7, 7],
    108: [6, 9, 10, 9, 8],
    303: [8, 9, 9, 8, 8],
    109: [8, 9, 6, 10, 8],
    403: [10, 9, 7, 10, 9],
    110: [7, 8, 8, 9, 8],
    205: [9, 10, 9, 10, 9],
    404: [8, 9, 9, 9, 9],
    405: [7, 9, 8, 8, 8],
    206: [10, 10, 8, 10, 9],
    304: [9, 9, 9, 9, 9],
    504: [9, 8, 9, 9, 9],
    406: [9, 7, 9, 10, 9],
    207: [10, 10, 8, 10, 9],
    505: [9, 10, 9, 10, 9],
    208: [9, 9, 9, 8, 9],
    305: [9, 10, 7, 9, 9],
    209: [9, 9, 10, 10, 9],
    407: [8, 9, 9, 9, 9],
    210: [9, 10, 10, 9, 9],
    306: [9, 9, 9, 9, 9],
    408: [8, 8, 8, 8, 8],
    409: [8, 8, 8, 8, 8],
    410: [8, 8, 8, 8, 8],
    211: [8, 8, 8, 8, 8],
    307: [8, 8, 8, 8, 8],
    506: [8, 8, 8, 8, 8],
    411: [8, 8, 8, 8, 8],
    507: [8, 8, 8, 8, 8],
    308: [8, 8, 8, 8, 8],
  },
  42789536: {
    101: [8, 10, 10, 9, 9],
    501: [8, 9, 9, 9, 9],
    201: [10, 10, 8, 8, 9],
    102: [9, 9, 9, 9, 9],
    401: [6, 10, 8, 8, 8],
    103: [10, 9, 10, 10, 10],
    301: [7, 9, 9, 10, 9],
    104: [6, 6, 6, 6, 6],
    202: [7, 9, 9, 9, 8],
    105: [9, 9, 9, 9, 9],
    106: [9, 8, 6, 9, 8],
    402: [10, 8, 7, 9, 8],
    203: [9, 9, 8, 9, 9],
    107: [8, 9, 9, 8, 8],
    204: [8, 9, 8, 9, 8],
    502: [9, 9, 8, 9, 9],
    503: [10, 10, 9, 9, 9],
    302: [9, 9, 9, 9, 9],
    108: [6, 9, 10, 9, 8],
    303: [9, 9, 9, 9, 9],
    109: [9, 9, 6, 10, 8],
    403: [9, 10, 7, 10, 9],
    110: [7, 8, 8, 9, 8],
    205: [9, 10, 9, 10, 9],
    404: [8, 8, 7, 8, 8],
    405: [8, 9, 8, 8, 8],
    206: [10, 10, 8, 10, 9],
    304: [9, 10, 7, 8, 8],
    504: [9, 9, 8, 9, 9],
    406: [9, 9, 10, 10, 9],
    207: [8, 10, 8, 10, 9],
    505: [9, 9, 10, 10, 9],
    208: [9, 9, 8, 8, 8],
    305: [10, 10, 8, 9, 9],
    209: [9, 9, 10, 10, 9],
    407: [8, 9, 9, 9, 9],
    210: [9, 10, 10, 9, 9],
    306: [9, 9, 9, 10, 9],
    408: [8, 8, 8, 8, 8],
    409: [8, 8, 8, 8, 8],
    410: [8, 8, 8, 8, 8],
    211: [8, 8, 8, 8, 8],
    307: [8, 8, 8, 8, 8],
    506: [8, 8, 8, 8, 8],
    411: [8, 8, 8, 8, 8],
    507: [8, 8, 8, 8, 8],
    308: [8, 8, 8, 8, 8],
  },
  42736478: {
    101: [6, 8, 8, 10, 8],
    501: [7, 7, 10, 7, 8],
    201: [7, 9, 6, 9, 8],
    102: [7, 8, 6, 10, 8],
    401: [8, 8, 6, 10, 8],
    103: [3, 3, 4, 3, 6],
    301: [10, 10, 10, 8, 9],
    104: [8, 6, 6, 9, 8],
    202: [9, 7, 6, 6, 6],
    105: [7, 7, 8, 10, 8],
    106: [8, 8, 8, 10, 8],
    402: [7, 9, 9, 9, 8],
    203: [9, 9, 7, 9, 8],
    107: [8, 8, 9, 9, 8],
    204: [6, 6, 8, 8, 8],
    502: [8, 6, 7, 8, 6],
    503: [6, 7, 4, 8, 7],
    302: [8, 8, 7, 8, 8],
    108: [6, 9, 10, 9, 8],
    303: [8, 8, 8, 9, 8],
    109: [7, 4, 9, 5, 6],
    403: [9, 8, 6, 10, 8],
    110: [8, 6, 8, 9, 8],
    205: [5, 4, 4, 8, 7],
    404: [8, 6, 7, 10, 8],
    405: [10, 8, 7, 8, 8],
    206: [6, 7, 6, 9, 6],
    304: [8, 8, 9, 8, 8],
    504: [10, 9, 10, 8, 9],
    406: [9, 9, 5, 9, 9],
    207: [6, 10, 8, 8, 8],
    505: [9, 9, 9, 9, 9],
    208: [8, 9, 9, 9, 9],
    305: [8, 8, 9, 9, 8],
    209: [9, 9, 9, 10, 9],
    407: [9, 8, 8, 9, 8],
    210: [10, 10, 10, 8, 9],
    306: [7, 8, 8, 10, 8],
    408: [8, 8, 8, 8, 8],
    409: [8, 8, 8, 8, 8],
    410: [8, 8, 8, 8, 8],
    211: [8, 8, 8, 8, 8],
    307: [8, 8, 8, 8, 8],
    506: [8, 8, 8, 8, 8],
    411: [8, 8, 8, 8, 8],
    507: [8, 8, 8, 8, 8],
    308: [8, 8, 8, 8, 8],
  },
  41696249: {
    101: [8, 10, 10, 10, 9],
    501: [8, 8, 8, 8, 8],
    201: [10, 10, 7, 8, 8],
    102: [9, 8, 9, 7, 8],
    401: [6, 6, 6, 6, 6],
    103: [7, 10, 9, 7, 8],
    301: [8, 8, 8, 10, 8],
    104: [9, 9, 9, 9, 9],
    202: [9, 10, 10, 9, 9],
    105: [8, 8, 8, 9, 8],
    106: [7, 6, 8, 9, 7],
    402: [9, 7, 8, 9, 8],
    203: [9, 8, 6, 9, 8],
    107: [9, 9, 7, 8, 8],
    204: [7, 9, 8, 9, 8],
    502: [8, 8, 9, 9, 8],
    503: [7, 6, 6, 9, 6],
    302: [8, 8, 9, 9, 8],
    108: [6, 6, 7, 8, 7],
    303: [8, 9, 9, 9, 9],
    109: [7, 9, 8, 9, 8],
    403: [9, 10, 8, 9, 9],
    110: [7, 9, 7, 8, 8],
    205: [8, 9, 8, 8, 8],
    404: [8, 9, 9, 8, 8],
    405: [9, 9, 9, 8, 9],
    206: [10, 10, 7, 10, 9],
    304: [8, 8, 9, 8, 8],
    504: [9, 8, 8, 8, 8],
    406: [7, 9, 7, 9, 8],
    207: [8, 7, 8, 9, 8],
    505: [9, 8, 8, 10, 9],
    208: [9, 8, 8, 7, 8],
    305: [9, 9, 9, 6, 8],
    209: [9, 9, 10, 9, 9],
    407: [7, 8, 9, 8, 8],
    210: [9, 10, 10, 10, 10],
    306: [7, 7, 9, 9, 8],
    408: [8, 8, 8, 8, 8],
    409: [8, 8, 8, 8, 8],
    410: [8, 8, 8, 8, 8],
    211: [8, 8, 8, 8, 8],
    307: [8, 8, 8, 8, 8],
    506: [8, 8, 8, 8, 8],
    411: [8, 8, 8, 8, 8],
    507: [8, 8, 8, 8, 8],
    308: [8, 8, 8, 8, 8],
  },
  41516800: {
    101: [1, 5, 6, 9, 6],
    501: [9, 7, 8, 8, 8],
    201: [3, 9, 7, 7, 6],
    102: [6, 8, 4, 6, 6],
    401: [6, 8, 6, 8, 10],
    103: [6, 6, 6, 6, 6],
    301: [8, 6, 8, 10, 8],
    104: [7, 7, 9, 9, 8],
    202: [7, 8, 6, 8, 6],
    105: [9, 8, 9, 9, 9],
    106: [7, 9, 8, 9, 8],
    402: [10, 8, 6, 9, 8],
    203: [8, 8, 6, 9, 8],
    107: [8, 8, 9, 8, 8],
    204: [8, 8, 7, 9, 8],
    502: [9, 9, 8, 9, 9],
    503: [8, 8, 8, 8, 8],
    302: [9, 9, 8, 9, 9],
    108: [6, 9, 9, 9, 6],
    303: [9, 9, 8, 8, 9],
    109: [6, 6, 3, 8, 9],
    403: [8, 9, 7, 10, 9],
    110: [7, 8, 7, 9, 8],
    205: [8, 10, 9, 10, 8],
    404: [8, 8, 6, 9, 8],
    405: [8, 9, 7, 8, 8],
    206: [10, 10, 8, 10, 9],
    304: [9, 8, 8, 8, 8],
    504: [9, 9, 8, 9, 9],
    406: [9, 7, 9, 10, 9],
    207: [8, 9, 9, 10, 9],
    505: [10, 9, 10, 9, 9],
    208: [8, 9, 9, 9, 9],
    305: [9, 9, 8, 8, 8],
    209: [9, 9, 10, 10, 9],
    407: [9, 9, 9, 8, 9],
    210: [9, 9, 9, 8, 9],
    306: [7, 8, 9, 10, 8],
    408: [8, 8, 8, 8, 8],
    409: [8, 8, 8, 8, 8],
    410: [8, 8, 8, 8, 8],
    211: [8, 8, 8, 8, 8],
    307: [8, 8, 8, 8, 8],
    506: [8, 8, 8, 8, 8],
    411: [8, 8, 8, 8, 8],
    507: [8, 8, 8, 8, 8],
    308: [8, 8, 8, 8, 8],
  },
}

//!
//!     RNA PARA EL CALCULO DE LAS PONDERACIONES DE LAS MATERIAS
//!

//* DEFINICION DEL RNA
let network = new NeuralNetwork({
  binaryThresh: 0.5,
  inputSize: 4, //cantidad de entradas
  hiddenLayers: [500, 600], //cantidad de neuronas en cada capa oculta
  outputSize: 1, // cantidad de salidas
  activation: 'sigmoid', // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
  learningRate: 0.03, // ratio de aprendizaje
  decayRate: 0.99, //
})

//* DATOS DE ENTRENAMIENTO A MANO EN EXCEL
const networkDataTraining = [
  { input: { n1: 6, n2: 10, n3: 9, n4: 2 }, output: { peso: 0.73 } },
  { input: { n1: 10, n2: 4, n3: 9, n4: 5 }, output: { peso: 0.76 } },
  { input: { n1: 10, n2: 10, n3: 3, n4: 3 }, output: { peso: 0.51 } },
  { input: { n1: 8, n2: 7, n3: 2, n4: 3 }, output: { peso: 0.385 } },
  { input: { n1: 7, n2: 0, n3: 5, n4: 3 }, output: { peso: 0.415 } },
  { input: { n1: 3, n2: 9, n3: 2, n4: 9 }, output: { peso: 0.46 } },
  { input: { n1: 10, n2: 1, n3: 0, n4: 8 }, output: { peso: 0.325 } },
  { input: { n1: 1, n2: 1, n3: 6, n4: 2 }, output: { peso: 0.37 } },
  { input: { n1: 9, n2: 7, n3: 9, n4: 6 }, output: { peso: 0.81 } },
  { input: { n1: 9, n2: 1, n3: 6, n4: 9 }, output: { peso: 0.63 } },
  { input: { n1: 5, n2: 2, n3: 8, n4: 4 }, output: { peso: 0.585 } },
  { input: { n1: 3, n2: 4, n3: 5, n4: 2 }, output: { peso: 0.395 } },
  { input: { n1: 0, n2: 7, n3: 10, n4: 3 }, output: { peso: 0.665 } },
  { input: { n1: 5, n2: 6, n3: 5, n4: 2 }, output: { peso: 0.455 } },
  { input: { n1: 2, n2: 10, n3: 0, n4: 6 }, output: { peso: 0.3 } },
  { input: { n1: 5, n2: 10, n3: 6, n4: 7 }, output: { peso: 0.665 } },
  { input: { n1: 0, n2: 8, n3: 10, n4: 2 }, output: { peso: 0.66 } },
  { input: { n1: 1, n2: 9, n3: 5, n4: 2 }, output: { peso: 0.44 } },
  { input: { n1: 0, n2: 8, n3: 9, n4: 3 }, output: { peso: 0.63 } },
  { input: { n1: 5, n2: 10, n3: 5, n4: 10 }, output: { peso: 0.675 } },
  { input: { n1: 9, n2: 6, n3: 6, n4: 1 }, output: { peso: 0.545 } },
  { input: { n1: 3, n2: 1, n3: 5, n4: 1 }, output: { peso: 0.33 } },
  { input: { n1: 9, n2: 6, n3: 2, n4: 1 }, output: { peso: 0.345 } },
  { input: { n1: 5, n2: 7, n3: 1, n4: 4 }, output: { peso: 0.31 } },
  { input: { n1: 9, n2: 8, n3: 1, n4: 6 }, output: { peso: 0.425 } },
  { input: { n1: 10, n2: 9, n3: 7, n4: 10 }, output: { peso: 0.835 } },
  { input: { n1: 8, n2: 8, n3: 4, n4: 9 }, output: { peso: 0.62 } },
  { input: { n1: 1, n2: 5, n3: 1, n4: 6 }, output: { peso: 0.26 } },
  { input: { n1: 1, n2: 5, n3: 7, n4: 9 }, output: { peso: 0.62 } },
  { input: { n1: 3, n2: 8, n3: 10, n4: 5 }, output: { peso: 0.765 } },
  { input: { n1: 6, n2: 9, n3: 0, n4: 3 }, output: { peso: 0.285 } },
  { input: { n1: 5, n2: 1, n3: 6, n4: 2 }, output: { peso: 0.43 } },
  { input: { n1: 7, n2: 0, n3: 5, n4: 7 }, output: { peso: 0.495 } },
  { input: { n1: 0, n2: 2, n3: 4, n4: 10 }, output: { peso: 0.43 } },
  { input: { n1: 1, n2: 2, n3: 4, n4: 7 }, output: { peso: 0.385 } },
  { input: { n1: 2, n2: 8, n3: 6, n4: 0 }, output: { peso: 0.45 } },
  { input: { n1: 9, n2: 4, n3: 1, n4: 9 }, output: { peso: 0.425 } },
  { input: { n1: 5, n2: 1, n3: 8, n4: 3 }, output: { peso: 0.55 } },
  { input: { n1: 4, n2: 7, n3: 5, n4: 9 }, output: { peso: 0.595 } },
  { input: { n1: 6, n2: 0, n3: 2, n4: 8 }, output: { peso: 0.35 } },
  { input: { n1: 3, n2: 7, n3: 8, n4: 6 }, output: { peso: 0.67 } },
  { input: { n1: 4, n2: 7, n3: 10, n4: 10 }, output: { peso: 0.865 } },
  { input: { n1: 0, n2: 0, n3: 1, n4: 7 }, output: { peso: 0.19 } },
  { input: { n1: 3, n2: 1, n3: 3, n4: 8 }, output: { peso: 0.37 } },
  { input: { n1: 5, n2: 8, n3: 10, n4: 2 }, output: { peso: 0.735 } },
  { input: { n1: 6, n2: 9, n3: 10, n4: 7 }, output: { peso: 0.865 } },
  { input: { n1: 6, n2: 1, n3: 0, n4: 4 }, output: { peso: 0.185 } },
  { input: { n1: 6, n2: 4, n3: 0, n4: 0 }, output: { peso: 0.15 } },
  { input: { n1: 3, n2: 10, n3: 2, n4: 6 }, output: { peso: 0.415 } },
  { input: { n1: 10, n2: 0, n3: 4, n4: 2 }, output: { peso: 0.39 } },
  { input: { n1: 10, n2: 9, n3: 8, n4: 6 }, output: { peso: 0.805 } },
  { input: { n1: 1, n2: 10, n3: 9, n4: 4 }, output: { peso: 0.695 } },
  { input: { n1: 5, n2: 9, n3: 8, n4: 8 }, output: { peso: 0.77 } },
  { input: { n1: 2, n2: 5, n3: 3, n4: 10 }, output: { peso: 0.455 } },
  { input: { n1: 3, n2: 10, n3: 9, n4: 8 }, output: { peso: 0.805 } },
  { input: { n1: 9, n2: 4, n3: 7, n4: 0 }, output: { peso: 0.545 } },
  { input: { n1: 0, n2: 5, n3: 0, n4: 1 }, output: { peso: 0.095 } },
  { input: { n1: 3, n2: 10, n3: 8, n4: 0 }, output: { peso: 0.595 } },
  { input: { n1: 9, n2: 3, n3: 8, n4: 2 }, output: { peso: 0.62 } },
  { input: { n1: 8, n2: 4, n3: 3, n4: 3 }, output: { peso: 0.39 } },
  { input: { n1: 5, n2: 3, n3: 5, n4: 3 }, output: { peso: 0.43 } },
  { input: { n1: 6, n2: 7, n3: 4, n4: 2 }, output: { peso: 0.435 } },
  { input: { n1: 9, n2: 10, n3: 9, n4: 4 }, output: { peso: 0.815 } },
  { input: { n1: 6, n2: 1, n3: 0, n4: 10 }, output: { peso: 0.305 } },
  { input: { n1: 1, n2: 10, n3: 5, n4: 3 }, output: { peso: 0.475 } },
  { input: { n1: 1, n2: 3, n3: 4, n4: 8 }, output: { peso: 0.42 } },
  { input: { n1: 8, n2: 9, n3: 3, n4: 3 }, output: { peso: 0.465 } },
  { input: { n1: 7, n2: 6, n3: 0, n4: 5 }, output: { peso: 0.295 } },
  { input: { n1: 0, n2: 8, n3: 6, n4: 3 }, output: { peso: 0.48 } },
  { input: { n1: 3, n2: 3, n3: 3, n4: 5 }, output: { peso: 0.34 } },
  { input: { n1: 1, n2: 2, n3: 2, n4: 8 }, output: { peso: 0.305 } },
  { input: { n1: 10, n2: 1, n3: 5, n4: 2 }, output: { peso: 0.455 } },
  { input: { n1: 5, n2: 0, n3: 7, n4: 7 }, output: { peso: 0.565 } },
  { input: { n1: 8, n2: 7, n3: 9, n4: 3 }, output: { peso: 0.735 } },
  { input: { n1: 9, n2: 4, n3: 10, n4: 7 }, output: { peso: 0.835 } },
  { input: { n1: 6, n2: 7, n3: 10, n4: 3 }, output: { peso: 0.755 } },
  { input: { n1: 8, n2: 9, n3: 9, n4: 6 }, output: { peso: 0.825 } },
  { input: { n1: 3, n2: 6, n3: 2, n4: 0 }, output: { peso: 0.235 } },
  { input: { n1: 9, n2: 4, n3: 4, n4: 9 }, output: { peso: 0.575 } },
  { input: { n1: 8, n2: 8, n3: 8, n4: 10 }, output: { peso: 0.84 } },
  { input: { n1: 6, n2: 3, n3: 3, n4: 8 }, output: { peso: 0.445 } },
  { input: { n1: 5, n2: 3, n3: 7, n4: 7 }, output: { peso: 0.61 } },
  { input: { n1: 8, n2: 6, n3: 7, n4: 10 }, output: { peso: 0.76 } },
  { input: { n1: 1, n2: 1, n3: 2, n4: 7 }, output: { peso: 0.27 } },
  { input: { n1: 9, n2: 2, n3: 10, n4: 10 }, output: { peso: 0.865 } },
  { input: { n1: 6, n2: 5, n3: 0, n4: 0 }, output: { peso: 0.165 } },
  { input: { n1: 2, n2: 9, n3: 9, n4: 6 }, output: { peso: 0.735 } },
  { input: { n1: 5, n2: 2, n3: 8, n4: 6 }, output: { peso: 0.625 } },
  { input: { n1: 9, n2: 1, n3: 7, n4: 1 }, output: { peso: 0.52 } },
  { input: { n1: 9, n2: 5, n3: 3, n4: 9 }, output: { peso: 0.54 } },
  { input: { n1: 4, n2: 9, n3: 3, n4: 10 }, output: { peso: 0.545 } },
  { input: { n1: 3, n2: 10, n3: 8, n4: 8 }, output: { peso: 0.755 } },
  { input: { n1: 1, n2: 0, n3: 4, n4: 2 }, output: { peso: 0.255 } },
  { input: { n1: 9, n2: 5, n3: 1, n4: 2 }, output: { peso: 0.3 } },
  { input: { n1: 9, n2: 6, n3: 5, n4: 2 }, output: { peso: 0.515 } },
  { input: { n1: 10, n2: 0, n3: 0, n4: 0 }, output: { peso: 0.15 } },
  { input: { n1: 0, n2: 5, n3: 7, n4: 5 }, output: { peso: 0.525 } },
  { input: { n1: 6, n2: 8, n3: 8, n4: 6 }, output: { peso: 0.73 } },
  { input: { n1: 3, n2: 7, n3: 7, n4: 8 }, output: { peso: 0.66 } },
  { input: { n1: 0, n2: 9, n3: 7, n4: 4 }, output: { peso: 0.565 } },
  { input: { n1: 5, n2: 7, n3: 7, n4: 3 }, output: { peso: 0.59 } },
  { input: { n1: 2, n2: 4, n3: 0, n4: 10 }, output: { peso: 0.29 } },
  { input: { n1: 1, n2: 7, n3: 1, n4: 4 }, output: { peso: 0.25 } },
  { input: { n1: 9, n2: 5, n3: 6, n4: 5 }, output: { peso: 0.61 } },
  { input: { n1: 6, n2: 7, n3: 6, n4: 6 }, output: { peso: 0.615 } },
  { input: { n1: 4, n2: 9, n3: 10, n4: 6 }, output: { peso: 0.815 } },
  { input: { n1: 0, n2: 9, n3: 5, n4: 4 }, output: { peso: 0.465 } },
  { input: { n1: 1, n2: 1, n3: 5, n4: 9 }, output: { peso: 0.46 } },
  { input: { n1: 1, n2: 3, n3: 5, n4: 5 }, output: { peso: 0.41 } },
  { input: { n1: 6, n2: 8, n3: 0, n4: 5 }, output: { peso: 0.31 } },
  { input: { n1: 4, n2: 3, n3: 3, n4: 1 }, output: { peso: 0.275 } },
  { input: { n1: 7, n2: 5, n3: 0, n4: 2 }, output: { peso: 0.22 } },
  { input: { n1: 4, n2: 5, n3: 2, n4: 10 }, output: { peso: 0.435 } },
  { input: { n1: 8, n2: 1, n3: 0, n4: 5 }, output: { peso: 0.235 } },
  { input: { n1: 9, n2: 4, n3: 4, n4: 3 }, output: { peso: 0.455 } },
  { input: { n1: 6, n2: 2, n3: 4, n4: 2 }, output: { peso: 0.36 } },
  { input: { n1: 10, n2: 10, n3: 10, n4: 10 }, output: { peso: 1 } },
  { input: { n1: 6, n2: 2, n3: 7, n4: 1 }, output: { peso: 0.49 } },
  { input: { n1: 0, n2: 8, n3: 1, n4: 2 }, output: { peso: 0.21 } },
  { input: { n1: 9, n2: 0, n3: 4, n4: 8 }, output: { peso: 0.495 } },
  { input: { n1: 9, n2: 6, n3: 3, n4: 7 }, output: { peso: 0.515 } },
  { input: { n1: 4, n2: 1, n3: 9, n4: 1 }, output: { peso: 0.545 } },
  { input: { n1: 4, n2: 9, n3: 3, n4: 2 }, output: { peso: 0.385 } },
  { input: { n1: 5, n2: 0, n3: 0, n4: 7 }, output: { peso: 0.215 } },
  { input: { n1: 1, n2: 6, n3: 1, n4: 6 }, output: { peso: 0.275 } },
  { input: { n1: 2, n2: 0, n3: 1, n4: 5 }, output: { peso: 0.18 } },
  { input: { n1: 6, n2: 9, n3: 2, n4: 6 }, output: { peso: 0.445 } },
  { input: { n1: 4, n2: 5, n3: 7, n4: 6 }, output: { peso: 0.605 } },
  { input: { n1: 3, n2: 5, n3: 0, n4: 3 }, output: { peso: 0.18 } },
  { input: { n1: 9, n2: 9, n3: 6, n4: 4 }, output: { peso: 0.65 } },
  { input: { n1: 5, n2: 6, n3: 8, n4: 2 }, output: { peso: 0.605 } },
  { input: { n1: 0, n2: 1, n3: 3, n4: 9 }, output: { peso: 0.345 } },
  { input: { n1: 7, n2: 5, n3: 10, n4: 8 }, output: { peso: 0.84 } },
  { input: { n1: 8, n2: 6, n3: 1, n4: 3 }, output: { peso: 0.32 } },
  { input: { n1: 8, n2: 10, n3: 3, n4: 10 }, output: { peso: 0.62 } },
  { input: { n1: 5, n2: 4, n3: 1, n4: 5 }, output: { peso: 0.285 } },
  { input: { n1: 8, n2: 3, n3: 8, n4: 8 }, output: { peso: 0.725 } },
  { input: { n1: 1, n2: 8, n3: 3, n4: 10 }, output: { peso: 0.485 } },
  { input: { n1: 6, n2: 7, n3: 2, n4: 4 }, output: { peso: 0.375 } },
  { input: { n1: 1, n2: 4, n3: 2, n4: 8 }, output: { peso: 0.335 } },
  { input: { n1: 9, n2: 0, n3: 4, n4: 10 }, output: { peso: 0.535 } },
  { input: { n1: 9, n2: 6, n3: 4, n4: 4 }, output: { peso: 0.505 } },
  { input: { n1: 9, n2: 2, n3: 10, n4: 7 }, output: { peso: 0.805 } },
  { input: { n1: 4, n2: 9, n3: 1, n4: 4 }, output: { peso: 0.325 } },
  { input: { n1: 8, n2: 1, n3: 5, n4: 6 }, output: { peso: 0.505 } },
  { input: { n1: 2, n2: 5, n3: 8, n4: 0 }, output: { peso: 0.505 } },
  { input: { n1: 9, n2: 5, n3: 5, n4: 10 }, output: { peso: 0.66 } },
  { input: { n1: 2, n2: 8, n3: 6, n4: 4 }, output: { peso: 0.53 } },
  { input: { n1: 4, n2: 4, n3: 9, n4: 3 }, output: { peso: 0.63 } },
  { input: { n1: 5, n2: 5, n3: 10, n4: 9 }, output: { peso: 0.83 } },
  { input: { n1: 10, n2: 0, n3: 10, n4: 3 }, output: { peso: 0.71 } },
  { input: { n1: 1, n2: 10, n3: 7, n4: 2 }, output: { peso: 0.555 } },
  { input: { n1: 1, n2: 3, n3: 9, n4: 7 }, output: { peso: 0.65 } },
  { input: { n1: 3, n2: 0, n3: 4, n4: 0 }, output: { peso: 0.245 } },
  { input: { n1: 2, n2: 3, n3: 10, n4: 1 }, output: { peso: 0.595 } },
  { input: { n1: 7, n2: 7, n3: 4, n4: 10 }, output: { peso: 0.61 } },
  { input: { n1: 3, n2: 4, n3: 3, n4: 7 }, output: { peso: 0.395 } },
  { input: { n1: 8, n2: 8, n3: 9, n4: 0 }, output: { peso: 0.69 } },
  { input: { n1: 2, n2: 2, n3: 10, n4: 6 }, output: { peso: 0.68 } },
  { input: { n1: 10, n2: 0, n3: 5, n4: 7 }, output: { peso: 0.54 } },
  { input: { n1: 1, n2: 4, n3: 0, n4: 8 }, output: { peso: 0.235 } },
  { input: { n1: 2, n2: 7, n3: 3, n4: 7 }, output: { peso: 0.425 } },
  { input: { n1: 10, n2: 5, n3: 1, n4: 1 }, output: { peso: 0.295 } },
  { input: { n1: 4, n2: 9, n3: 1, n4: 2 }, output: { peso: 0.285 } },
  { input: { n1: 2, n2: 4, n3: 9, n4: 4 }, output: { peso: 0.62 } },
  { input: { n1: 1, n2: 0, n3: 6, n4: 7 }, output: { peso: 0.455 } },
  { input: { n1: 6, n2: 1, n3: 4, n4: 8 }, output: { peso: 0.465 } },
  { input: { n1: 6, n2: 3, n3: 8, n4: 2 }, output: { peso: 0.575 } },
  { input: { n1: 5, n2: 9, n3: 6, n4: 7 }, output: { peso: 0.65 } },
  { input: { n1: 9, n2: 1, n3: 4, n4: 3 }, output: { peso: 0.41 } },
  { input: { n1: 2, n2: 8, n3: 9, n4: 2 }, output: { peso: 0.64 } },
  { input: { n1: 4, n2: 1, n3: 1, n4: 6 }, output: { peso: 0.245 } },
  { input: { n1: 9, n2: 4, n3: 8, n4: 5 }, output: { peso: 0.695 } },
  { input: { n1: 10, n2: 8, n3: 2, n4: 0 }, output: { peso: 0.37 } },
  { input: { n1: 3, n2: 8, n3: 10, n4: 6 }, output: { peso: 0.785 } },
  { input: { n1: 4, n2: 5, n3: 2, n4: 10 }, output: { peso: 0.435 } },
  { input: { n1: 5, n2: 6, n3: 10, n4: 2 }, output: { peso: 0.705 } },
  { input: { n1: 9, n2: 6, n3: 1, n4: 9 }, output: { peso: 0.455 } },
  { input: { n1: 10, n2: 0, n3: 3, n4: 5 }, output: { peso: 0.4 } },
  { input: { n1: 9, n2: 6, n3: 3, n4: 4 }, output: { peso: 0.455 } },
  { input: { n1: 4, n2: 4, n3: 6, n4: 6 }, output: { peso: 0.54 } },
  { input: { n1: 7, n2: 1, n3: 5, n4: 1 }, output: { peso: 0.39 } },
  { input: { n1: 0, n2: 7, n3: 2, n4: 9 }, output: { peso: 0.385 } },
  { input: { n1: 5, n2: 7, n3: 0, n4: 10 }, output: { peso: 0.38 } },
  { input: { n1: 5, n2: 4, n3: 4, n4: 2 }, output: { peso: 0.375 } },
  { input: { n1: 6, n2: 8, n3: 0, n4: 8 }, output: { peso: 0.37 } },
  { input: { n1: 6, n2: 4, n3: 4, n4: 1 }, output: { peso: 0.37 } },
  { input: { n1: 10, n2: 0, n3: 8, n4: 3 }, output: { peso: 0.61 } },
  { input: { n1: 1, n2: 4, n3: 6, n4: 7 }, output: { peso: 0.515 } },
  { input: { n1: 5, n2: 6, n3: 2, n4: 3 }, output: { peso: 0.325 } },
  { input: { n1: 7, n2: 6, n3: 3, n4: 3 }, output: { peso: 0.405 } },
  { input: { n1: 9, n2: 6, n3: 8, n4: 7 }, output: { peso: 0.765 } },
  { input: { n1: 6, n2: 0, n3: 9, n4: 0 }, output: { peso: 0.54 } },
  { input: { n1: 4, n2: 7, n3: 10, n4: 3 }, output: { peso: 0.725 } },
  { input: { n1: 5, n2: 0, n3: 0, n4: 10 }, output: { peso: 0.275 } },
  { input: { n1: 2, n2: 10, n3: 2, n4: 5 }, output: { peso: 0.38 } },
  { input: { n1: 0, n2: 1, n3: 4, n4: 9 }, output: { peso: 0.395 } },
  { input: { n1: 5, n2: 0, n3: 5, n4: 6 }, output: { peso: 0.445 } },
  { input: { n1: 9, n2: 3, n3: 6, n4: 0 }, output: { peso: 0.48 } },
  { input: { n1: 6, n2: 8, n3: 2, n4: 0 }, output: { peso: 0.31 } },
]

//* EJECUCION DEL ENTRENAMIENTO
network.train(networkDataTraining)

//!
//!     RNA DE LAS 5 AREAS ACADEMICAS (FORMALES, SOFTWARE, INFORMATICA, GESTION, OTROS)
//!

//*   DATOS DE ENTRENAMIENTO GENERADOS DE FORMA ALEATORIA PARA LAS RNA DE LAS 5 AREAS ACADEMICAS
let network_form_train_data = []
let network_soft_train_data = []
let network_info_train_data = []
let network_gest_train_data = []
let network_otro_train_data = []
for (let index = 0; index < 250; index++) {
  let m1 = network.run({
    n1: randomIntFromInterval(0, 10),
    n2: randomIntFromInterval(0, 10),
    n3: randomIntFromInterval(0, 10),
    n4: randomIntFromInterval(0, 10),
  })
  let m2 = network.run({
    n1: randomIntFromInterval(0, 10),
    n2: randomIntFromInterval(0, 10),
    n3: randomIntFromInterval(0, 10),
    n4: randomIntFromInterval(0, 10),
  })
  let m3 = network.run({
    n1: randomIntFromInterval(0, 10),
    n2: randomIntFromInterval(0, 10),
    n3: randomIntFromInterval(0, 10),
    n4: randomIntFromInterval(0, 10),
  })
  let m4 = network.run({
    n1: randomIntFromInterval(0, 10),
    n2: randomIntFromInterval(0, 10),
    n3: randomIntFromInterval(0, 10),
    n4: randomIntFromInterval(0, 10),
  })
  let m5 = network.run({
    n1: randomIntFromInterval(0, 10),
    n2: randomIntFromInterval(0, 10),
    n3: randomIntFromInterval(0, 10),
    n4: randomIntFromInterval(0, 10),
  })
  let m6 = network.run({
    n1: randomIntFromInterval(0, 10),
    n2: randomIntFromInterval(0, 10),
    n3: randomIntFromInterval(0, 10),
    n4: randomIntFromInterval(0, 10),
  })
  let m7 = network.run({
    n1: randomIntFromInterval(0, 10),
    n2: randomIntFromInterval(0, 10),
    n3: randomIntFromInterval(0, 10),
    n4: randomIntFromInterval(0, 10),
  })
  let m8 = network.run({
    n1: randomIntFromInterval(0, 10),
    n2: randomIntFromInterval(0, 10),
    n3: randomIntFromInterval(0, 10),
    n4: randomIntFromInterval(0, 10),
  })
  let m9 = network.run({
    n1: randomIntFromInterval(0, 10),
    n2: randomIntFromInterval(0, 10),
    n3: randomIntFromInterval(0, 10),
    n4: randomIntFromInterval(0, 10),
  })
  let m10 = network.run({
    n1: randomIntFromInterval(0, 10),
    n2: randomIntFromInterval(0, 10),
    n3: randomIntFromInterval(0, 10),
    n4: randomIntFromInterval(0, 10),
  })
  let m11 = network.run({
    n1: randomIntFromInterval(0, 10),
    n2: randomIntFromInterval(0, 10),
    n3: randomIntFromInterval(0, 10),
    n4: randomIntFromInterval(0, 10),
  })

  m1 = m1.peso > 0.6 ? 1 : 0,
  m2 = m2.peso > 0.6 ? 1 : 0,
  m3 = m3.peso > 0.6 ? 1 : 0,
  m4 = m4.peso > 0.6 ? 1 : 0,
  m5 = m5.peso > 0.6 ? 1 : 0,
  m6 = m6.peso > 0.6 ? 1 : 0,
  m7 = m7.peso > 0.6 ? 1 : 0,
  m8 = m8.peso > 0.6 ? 1 : 0,
  m9 = m9.peso > 0.6 ? 1 : 0,
  m10 = m10.peso > 0.6 ? 1 : 0,
  m11 = m11.peso > 0.6 ? 1 : 0,

  network_form_train_data.push({
    input: {
      m1: m1,
      m2: m2,
      m3: m3,
      m4: m4,
      m5: m5,
      m6: m6,
      m7: m7,
      m8: m8,
      m9: m9,
      m10: m10,
    },
    output: {
      peso:
        m1 * 0.08 +
        m2 * 0.08 +
        m3 * 0.12 +
        m4 * 0.10 +
        m5 * 0.12 +
        m6 * 0.10 +
        m7 * 0.08 +
        m8 * 0.10 +
        m9 * 0.10 +
        m10 * 0.12,
    },
  })

  network_soft_train_data.push({
    input: {
      m1: m1,
      m2: m2,
      m3: m3,
      m4: m4,
      m5: m5,
      m6: m6,
      m7: m7,
      m8: m8,
      m9: m9,
      m10: m10,
      m11: m11,
    },
    output: {
      peso:
        m1 * 0.06 +
        m2 * 0.06 +
        m3 * 0.1 +
        m4 * 0.12 +
        m5 * 0.12 +
        m6 * 0.1 +
        m7 * 0.1 +
        m8 * 0.1 +
        m9 * 0.06 +
        m10 * 0.06 +
        m11 * 0.12,
    },
  })

  network_info_train_data.push({
    input: {
      m1: m1,
      m2: m2,
      m3: m3,
      m4: m4,
      m5: m5,
      m6: m6,
      m7: m7,
      m8: m8,
    },
    output: {
      peso:
        m1 * 0.15 +
        m2 * 0.1 +
        m3 * 0.1 +
        m4 * 0.15 +
        m5 * 0.15 +
        m6 * 0.15 +
        m7 * 0.1 +
        m8 * 0.1,
    },
  })

  network_gest_train_data.push({
    input: {
      m1: m1,
      m2: m2,
      m3: m3,
      m4: m4,
      m5: m5,
      m6: m6,
      m7: m7,
      m8: m8,
      m9: m9,
      m10: m10,
      m11: m11,
    },
    output: {
      peso:
        m1 * 0.08 +
        m2 * 0.08 +
        m3 * 0.08 +
        m4 * 0.08 +
        m5 * 0.08 +
        m6 * 0.08 +
        m7 * 0.08 +
        m8 * 0.1 +
        m9 * 0.1 +
        m10 * 0.12 +
        m10 * 0.12,
    },
  })

  network_otro_train_data.push({
    input: {
      m1: m1,
      m2: m2,
      m3: m3,
      m4: m4,
      m5: m5,
      m6: m6,
      m7: m7,
    },
    output: {
      peso:
        m1 * 0.1 +
        m2 * 0.1 +
        m3 * 0.15 +
        m4 * 0.15 +
        m5 * 0.15 +
        m6 * 0.15 +
        m7 * 0.2,
    },
  })
}

//* DEFINICION DE LAS RNAS
let network_form = new NeuralNetwork({
  inputSize: 10, //cantidad de entradas
  hiddenLayers: [3, 9], //cantidad de neuronas en cada capa oculta
  outputSize: 1, // cantidad de salidas
  activation: 'sigmoid', // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
  learningRate: 0.01, // ratio de aprendizaje
  decayRate: 0.99, //
})
let network_soft = new NeuralNetwork({
  inputSize: 11, //cantidad de entradas
  hiddenLayers: [3, 9], //cantidad de neuronas en cada capa oculta
  outputSize: 1, // cantidad de salidas
  activation: 'sigmoid', // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
  learningRate: 0.01, // ratio de aprendizaje
  decayRate: 0.99, //
})
let network_info = new NeuralNetwork({
  inputSize: 8, //cantidad de entradas
  hiddenLayers: [3, 9], //cantidad de neuronas en cada capa oculta
  outputSize: 1, // cantidad de salidas
  activation: 'sigmoid', // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
  learningRate: 0.01, // ratio de aprendizaje
  decayRate: 0.99, //
})
let network_gest = new NeuralNetwork({
  inputSize: 11, //cantidad de entradas
  hiddenLayers: [3, 9], //cantidad de neuronas en cada capa oculta
  outputSize: 1, // cantidad de salidas
  activation: 'sigmoid', // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
  learningRate: 0.01, // ratio de aprendizaje
  decayRate: 0.99, //
})
let network_otro = new NeuralNetwork({
  inputSize: 7, //cantidad de entradas
  hiddenLayers: [3, 9], //cantidad de neuronas en cada capa oculta
  outputSize: 1, // cantidad de salidas
  activation: 'sigmoid', // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
  learningRate: 0.01, // ratio de aprendizaje
  decayRate: 0.99, //
})

//* ENTRENAMIENTO DE LAS RNAS
network_form.train(network_form_train_data)
network_soft.train(network_soft_train_data)
network_info.train(network_info_train_data)
network_gest.train(network_gest_train_data)
network_otro.train(network_otro_train_data)

//!
//!     LOG DE SUCCESSFULL
//!
console.log('All Brains Done!')




//!
//!     FUNCION PARA OBTENER EL NOMBRE DEL ALUMNO MEDIANTE EL DNI
//!
export const getNames = async (alumno = 34093440) => {
  return nombres[alumno]
}




//!
//!     FUNCION PARA GENERAR LA INFORMACION MEDIANTE EL USO DE LAS REDES NEURONALES
//!

export const getMetrics = async (alumno = 34093440) => {
  const target = Object.keys(alumnos[alumno])

  // Ciencias Formales
  let formValues = []
  target
    .filter((key) => key.startsWith(1, 0))
    .forEach((mat) => {
      const n1 = alumnos[alumno][mat][0]
      const n2 = alumnos[alumno][mat][1]
      const n3 = alumnos[alumno][mat][2]
      const n4 = alumnos[alumno][mat][3]
      formValues.push(network.run({ n1, n2, n3, n4 }).peso)
    })
  // Software
  let softValues = []
  target
    .filter((key) => key.startsWith(2, 0))
    .forEach((mat) => {
      const n1 = alumnos[alumno][mat][0]
      const n2 = alumnos[alumno][mat][1]
      const n3 = alumnos[alumno][mat][2]
      const n4 = alumnos[alumno][mat][3]
      softValues.push(network.run({ n1, n2, n3, n4 }).peso)
    })
  // Informatica
  let infoValues = []
  target
    .filter((key) => key.startsWith(3, 0))
    .forEach((mat) => {
      const n1 = alumnos[alumno][mat][0]
      const n2 = alumnos[alumno][mat][1]
      const n3 = alumnos[alumno][mat][2]
      const n4 = alumnos[alumno][mat][3]
      infoValues.push(network.run({ n1, n2, n3, n4 }).peso)
    })
  // Gestion
  let gestValues = []
  target
    .filter((key) => key.startsWith(4, 0))
    .forEach((mat) => {
      const n1 = alumnos[alumno][mat][0]
      const n2 = alumnos[alumno][mat][1]
      const n3 = alumnos[alumno][mat][2]
      const n4 = alumnos[alumno][mat][3]
      gestValues.push(network.run({ n1, n2, n3, n4 }).peso)
    })
  // Otros
  let otroValues = []
  target
    .filter((key) => key.startsWith(5, 0))
    .forEach((mat) => {
      const n1 = alumnos[alumno][mat][0]
      const n2 = alumnos[alumno][mat][1]
      const n3 = alumnos[alumno][mat][2]
      const n4 = alumnos[alumno][mat][3]
      otroValues.push(network.run({ n1, n2, n3, n4 }).peso)
    })

  const form = network_form.run({
    m1: formValues[0],
    m2: formValues[1],
    m3: formValues[2],
    m4: formValues[3],
    m5: formValues[4],
    m6: formValues[5],
    m7: formValues[6],
    m8: formValues[7],
    m9: formValues[8],
    m10: formValues[9],
  })
  const soft = network_soft.run({
    m1: softValues[0],
    m2: softValues[1],
    m3: softValues[2],
    m4: softValues[3],
    m5: softValues[4],
    m6: softValues[5],
    m7: softValues[6],
    m8: softValues[7],
    m9: softValues[8],
    m10: softValues[9],
    m11: softValues[10],
  })
  const info = network_info.run({
    m1: infoValues[0],
    m2: infoValues[1],
    m3: infoValues[2],
    m4: infoValues[3],
    m5: infoValues[4],
    m6: infoValues[5],
    m7: infoValues[6],
    m8: infoValues[7],
  })
  const gest = network_gest.run({
    m1: gestValues[0],
    m2: gestValues[1],
    m3: gestValues[2],
    m4: gestValues[3],
    m5: gestValues[4],
    m6: gestValues[5],
    m7: gestValues[6],
    m8: gestValues[7],
    m9: gestValues[8],
    m10: gestValues[9],
    m11: gestValues[10],
  })
  const otro = network_otro.run({
    m1: otroValues[0],
    m2: otroValues[1],
    m3: otroValues[2],
    m4: otroValues[3],
    m5: otroValues[4],
    m6: otroValues[5],
    m7: otroValues[6],
  })

  /*
  console.log(alumno)
  console.log(form)
  console.log(soft)
  console.log(info)
  console.log(gest)
  console.log(otro)
  */

  const result = {
    alumno: nombres[alumno],
    form: form.peso *1.85,
    soft: soft.peso *1.85,
    info: info.peso *1.85,
    gest: gest.peso *1.85,
    otro: otro.peso *1.85,
  }

  return result
}
