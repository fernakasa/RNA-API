import { getNames, getMetrics } from './../lib/rna.js'

export const getDefault = async (req, res) => {
  res.json({
    'name': 'API - RNA',
    'version': '1.0.0',
    'description':
      'API - RED NEURONAL ARTIFICIAL - UCP',
    'endpoints': {
      //TODO
    }
  })
}

//-----------------
//- NAMES FUNCTION
//-----------------
export const getName = async (req, res) => {
  const id = parseInt(req.params.id)
  console.log(id)
  if (!id) {
    return res
    .status(403)
    .json({ message: 'A id as parameter is required for search' })
  } else {

    const data = await getNames(id)

    return res
      .status(201)
      .json(data)
  }
}

//-----------------
//- METRICS FUNCTION
//-----------------
export const getMetric = async (req, res) => {
  const id = parseInt(req.params.id)
  if (!id) {
    return res
    .status(403)
    .json({ message: 'A id as parameter is required for search' })
  } else {

    if (!await getNames(id)) {
      return res
    .status(403)
    .json({ message: 'El numero ingresado no corresponde a un alumno!' })
    }

    const data = await getMetrics(id)

    return res
      .status(201)
      .json(data)
  }
}