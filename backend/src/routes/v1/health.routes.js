import express from 'express'

const router = express.Router()

router.get('/',(req,res)=>{
    res.send("server is runing.");
})

export default router