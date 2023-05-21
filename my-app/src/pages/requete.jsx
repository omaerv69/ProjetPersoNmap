import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import axios from 'axios';

export default function Requete() {
  const [options, setoptions] = useState('');
  const [ip, setip] = useState('');
  const [req, setreq] = useState([]);

  const handlereq = (event) => {
    setreq(event.target.value);
  };

  const handleoptions = (event) => {
    setoptions(event.target.value);
  };

  const handleip = (event) => {
    setip(event.target.value);
  };

  const handleInsert = async () => {
    try {
      const requestData = {
        options: options,
        ip: ip,
        req: req,
      };

      const response = await axios.post('http://localhost:3001/api/model', requestData);
      console.log('Insertion réussie:', response.data);
    } catch (error) {
      console.log('Erreur lors de l\'insertion:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <main style={{ backgroundImage: 'url("https://media.istockphoto.com/id/1273929462/fr/photo/fond-abstrait-de-mouvement-brouill%C3%A9-pourpre-defocused.jpg?s=612x612&w=0&k=20&c=-5uwtyz7A3e0aC0sPKbMW8m7f15blNuPgpMR1esOpXQ=")' }} className="flex min-h-screen flex-col items-center justify-center p-24">
        <div className="flex flex-col items-center">
          <input
            type="text"
            value={req}
            onChange={handlereq}
            placeholder="Entrer une requête..."
            className="border border-gray-300 px-4 py-2 rounded-lg mb-4 text-black"
          />
          <input
            type="text"
            value={ip}
            onChange={handleip}
            placeholder="Entrer une ip..."
            className="border border-gray-300 px-4 py-2 rounded-lg mb-4 text-black"
          />
          <select
            value={options}
            onChange={handleoptions}
            className="border border-gray-300 px-4 py-2 rounded-lg mb-4 text-black"
          >
            <option value="">Sélectionner une option de scan</option>
            <option value="-sS">-sS</option>
            <option value="-sV">-sV</option>
            {/* Ajoutez d'autres options de scan ici */}
          </select>
          <button
            onClick={handleInsert}
            className="bg-purple-500 text-white px-4 py-2 rounded-lg"
          >
            Insert
          </button>
        </div>
      </main>
      <p className="text-gray-600 mt-2 text-right mr-5">
        <i>Created By: @Omaer.v</i>
      </p>
    </div>
  );
}
 