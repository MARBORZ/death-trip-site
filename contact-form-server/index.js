import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'

import router from './routes/contact.js'

const app = express()
const isProd = process.env.NODE_ENV === 'production'

const allowedOrigins = isProd
    ? [
          'https://death-trip-site-server.onrender.com',
          'https://hdufndsk.site',
          'https://www.hdufndsk.site',
      ]
    : [
          'https://death-trip-site-server.onrender.com',
          'https://hdufndsk.site',
          'https://www.hdufndsk.site',
          'http://localhost:5500',
          'http://127.0.0.1:5500',
      ]

app.use(
    cors({
        origin: (origin, callback) => {
            if (!origin) return callback(null, true)
            if (allowedOrigins.includes(origin)) return callback(null, true)
            return callback(new Error('Not allowed by CORS'))
        },
    })
)

app.use(express.json({ limit: '10kb' }))
app.use('/api/contact', router)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
