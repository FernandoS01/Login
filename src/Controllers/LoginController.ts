import {Request, Response } from 'express'


export class LoginController{
    public static UserLogin(req:Request,res:Response){
        const { user, password } = req.body;
    }
}