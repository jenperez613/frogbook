import express from 'express'
import {activateAccount, register, login} from "../controllers/users.js";



const router = express.Router()

router.post('/login', login)
router.post('/register', register)
router.post('/activate', activateAccount)



export default router