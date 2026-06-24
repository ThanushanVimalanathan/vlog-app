import express from 'express'
import { addJob, listJobs, removeJob, singleJob, modifyJob } from '../controllers/jobController.js'


const jobRouter = express.Router();

jobRouter.post('/add', addJob);
jobRouter.get('/list', listJobs);
jobRouter.delete('/remove', removeJob);
jobRouter.put('/modify', modifyJob);



export default jobRouter;