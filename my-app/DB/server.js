import express from 'express';
import mongoose from 'mongoose'; 
import cors from 'cors';
import chemin from './route.js';

const app = express();
const PORT = 3001;

// Connexion a la base de donnée MongoDB
mongoose.connect("mongodb://127.0.0.1/mydatabase", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Vous êtes connecté à la base de données")
    app.listen(PORT, () => {
      console.log(`Écoute sur le port ${PORT}`)
    })
  })
  .catch((error) => {
    console.error("Erreur de connexion à la base de données :", error)
  })

const corsOptions = {
  origin: "http://localhost:3000"
};
  
app.use(express.json());
app.use(cors(corsOptions))
app.use(chemin)

export default app;
