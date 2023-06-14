import { Router } from 'express'
import { getDefault, getName, getMetric } from '../controllers/controllers.js'

const router = Router()

router.all('/', (req, res) => {
  res.redirect('/api/')
})

router.get('/api/', getDefault)
router.get('/api/alumno/metricas/:id', getMetric)
router.get('/api/alumno/nombre/:id', getName)

router.all('*', (req, res) => {
  res.redirect('/api/')
})

export default router