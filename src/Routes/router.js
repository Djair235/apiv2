import express, { json } from "express"
import prisma from "../Service/prisma.js"

const router = express.Router()

router.get("/v1/teste", (req, res) => {
    res.status(200).json({message: "API funciondo corretamente!", status: "OK"})
})

router.get("/v1/findall", async (req, res) => {
    try {
        const users = await prisma.usuario.findMany()
        console.log("Usuários encontrados com sucesso!")
        res.json(users)
    } catch (error) {
        console.log(`Falha ao buscar pelos usuários: ${error}`)
        res.json(error)
    }
})

export default router   