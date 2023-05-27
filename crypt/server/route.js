const express=require("express")
const router=express.Router()

const Controller=require('./controller.js')

router.post("/register", Controller.createuser)

router.post("/login", Controller.login)

module.exports=router