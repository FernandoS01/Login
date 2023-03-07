import { Request,Response } from "express";
import { prisma } from './../database/database'

export class UserController {
    public static getUsers(req:Request,res:Response){
        res.send("Hello World")
    }
    public static async addUser(req:Request,res:Response){
      const { name, email,user,password } = req.body
        const newUser = await prisma.user.create({
            data: {
              name: name,
              email: email,
              user: user,
              password: password
            },
          })
          res.status(201).send(()=>{
            alert("usuario criado com sucesso! ")
          })
    }
}