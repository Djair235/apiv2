import express from "express"

const router = express.Router()

router.get("/v1/teste", (req, res) => {
    res.status(200).json({message: "API funciondo corretamente!", status: "OK"})
})


export default router