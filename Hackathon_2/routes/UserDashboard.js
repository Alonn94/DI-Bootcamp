import express from 'express';
const router = express.Router();
import { getFullDashboard,SubmitNewRequest, DeleteRequest} from '../controllers/userdash.js';
import { getAllRequests, updateRequestStatus} from '../controllers/admindash.js';
import { login} from '../controllers/logincontroller.js';



router.post('/login',login);
router.get('/1',getFullDashboard);
router.post('/1',SubmitNewRequest)
router.delete('/1',DeleteRequest)


router.get('/admin/requests', getAllRequests); // show all requests
router.put('/admin/requests', updateRequestStatus); // show all requests


export default router;


