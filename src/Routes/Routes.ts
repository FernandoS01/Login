import Express,{Request,Response}  from "express";
import { UserController } from "../Controllers/UserController";
import { LoginController } from "../Controllers/LoginController";

const routes = Express.Router()

routes.get('/',UserController.getUsers)
routes.post('/',UserController.addUser)

routes.post('/login',LoginController.UserLogin)

export { routes }