import express from 'express'
import dotenv from 'dotenv'
import { handleMessage } from './bot'

dotenv.config()

const app = express()
app.use(express.json())

app.post('/webhook', async (req, res) => {
  await handleMessage(req.body)
  res.sendStatus(200)
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
