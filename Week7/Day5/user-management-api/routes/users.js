import express from "express";
const router = express.Router();
import { ListofUsers, GetUserByID,UpdateUser} from '../controllers/usercontroller.js';
import { register, login} from '../controllers/logincontroller.js';


// Get /tasks (all the tasks)
router.get("/users", ListofUsers);
router.get("/users/:id",GetUserByID);
router.put("/users/:id",UpdateUser);

router.post("/register",register);
router.post("/login",login);



export default router;


