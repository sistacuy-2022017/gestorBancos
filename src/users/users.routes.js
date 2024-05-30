import { Router } from "express";
import { check } from "express-validator";
import { createUser } from "./users.controller.js";
const routerUsers = Router();

routerUsers.post('/create',
    [
        check('nameUser', 'The name is required').not().isEmpty(),
        check('nicknameUser', 'The nickname is required').not().isEmpty(),
        check('dpiUser', 'The dpi is required').not().isEmpty(),
    ], 
createUser);


export default routerUsers;