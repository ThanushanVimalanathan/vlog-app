import express from 'express'
import { addJob, listJobs, removeJob, singleJob, modifyJob } from '../controllers/jobController.js'
import  adminAuth  from '../middleware/adminAuth.js'

const jobRouter = express.Router();

jobRouter.post('/add', addJob);
jobRouter.get('/list', adminAuth, listJobs);
jobRouter.delete('/remove', adminAuth, removeJob);
jobRouter.get('/single', adminAuth, singleJob);
jobRouter.put('/modify', adminAuth, modifyJob);



export default jobRouter;