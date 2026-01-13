import express from 'express'
import dotenv from 'dotenv'
import { handleMessage } from './bot'

dotenv.config()

const app = express()
app.use(express.json())

app.post('/webhook', async (req, res) => {
  try {
    await handleMessage(req.body)
    res.sendStatus(200)
  } catch (error) {
    console.error('[server] Error handling webhook', { error: error instanceof Error ? error.message : String(error) })
    res.sendStatus(500)
  }
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`[server] Server running on port ${port}`)
})
