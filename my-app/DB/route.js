import model from './model.js';
import  express  from 'express';
import {spawn} from 'child_process';
const chemin = express()

chemin.get('/api/model', async (req, res) => {
  try {
    const models = await model.find();
    res.json(models);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la recuperation dobjets' });
  }
});

chemin.get('/api/model/:id', async (req, res) => {
  try {
    const foundModel = await model.findById(req.params.id);
    if (foundModel) {
      res.json(foundModel);
    } else {
      res.status(404).json({ error: 'Objet non trouvé' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération de l\'objet' });
  }
});

chemin.post('/api/model', (requete, res) => {
  const { options, req, ip } = requete.body;

  const arg = [options, req, ip];
  const process = spawn("nmap", arg);
  let result = "";
  process.stdout.on("data", (data) => {
    result += data.toString();
  });
  process.on("close", (code) => {
    if (code === 0) {
      const newrequete = new model({
        options: options,
        output: result,
        ip: ip,
        req: req,
        date: Date.now()
      });
      newrequete.save()
        .then(() => {
          res.send('Données enregistrées avec succès');
        })
        .catch((error) => {
          console.log("Erreur lors de l'enregistrement des données:", error);
          res.status(500).send("Erreur lors de l'enregistrement des données");
        });
    }
  });
});

chemin.delete('/api/model/:id', async (req, res) => {
  try {
    const deletedModel = await model.findByIdAndDelete(req.params.id);
    if (deletedModel) {
      res.json(deletedModel);
    } else {
      res.status(404).json({ error: 'Objet non trouvé' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la suppression de l\'objet' });
  }
});

export default chemin