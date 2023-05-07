import { Router } from 'express'
import ExperimentController from '../../controllers/experiment.controller.js'

const experimentRouter = Router()

experimentRouter.post('/', ExperimentController.Create)
experimentRouter.get('/latest', ExperimentController.LatestByProject)
experimentRouter.get('/deploy', ExperimentController.DeployModel)

export default experimentRouter
