import express from "express"
import cors from "cors"
import postRoutes from './routes/postRoutes.js'
import sessionsRoutes from './routes/sessionsRoutes.js'
import { logger } from "logger-express"

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())
app.use(logger())
app.use("/api/v1", postRoutes)
app.use("/api/v1", sessionsRoutes)
app.listen(PORT, console.log(`Servidor activo en http://localhost:${PORT}`))