import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import itemRoutes from './routes/items.js'

const PORT = process.env.PORT || 3001
const app = express();

app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

// get and post requests
app.use('/api/upload', itemRoutes)

app.get('/', (req, res) => {
    res.send('Hey, it is working')
})

const mongodb = "mongodb+srv://jacobegood:jacobegood@goodcluster.czb5vne.mongodb.net/documentUploads"

mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, console.log(`Server running on port: ${PORT}`)))
    .catch(err => console.log(err))