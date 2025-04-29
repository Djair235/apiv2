import express from "express"
import cors from "cors"
import router from "../src/Routes/router.js"


const app = express()
app.use(cors())
app.use(router)

function startServer() {
    try {
        app.listen(1803, () => {
            console.log("Servidor rodando na porta 1803")
        }) 
    } catch (error) {
        console.log(error)
    }
}

startServer()