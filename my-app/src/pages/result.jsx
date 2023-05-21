import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import axios from 'axios';

export default function Result() {
  const [resultData, setResultData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/model')
      .then((response) => {
        setResultData(response.data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des données');
      });
  }, []);

  return (
    <main>
      <div>
      <Navbar />
      <div className="container">
        <div className="result-container">
          <div className="text-3xl text-purple-400">
            <h2>Résultat :</h2>
          </div>
          <div className="table-container">
            {resultData.length === 0 ? (
              <p>Aucun résultat disponible.</p>
            ) : (
              <table className="result-table">
                <thead>
                  <tr>
                    <th className="header-cell">Output</th>
                  </tr>
                </thead>
                <tbody>
                  {resultData.map((item) => (
                    <tr key={item.id}>
                      <td>{item.output}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        .result-container {
          text-align: center;
          margin-bottom: 32px;
        }

        .table-container {
          margin-top: 16px;
        }

        .result-table {
          border-collapse: collapse;
          width: 100%;
          margin: 0 auto; /* Ajout de cette ligne pour centrer le tableau */
        }

        .result-table th,
        .result-table td {
          border: 1px solid #ddd;
          padding: 8px;
        }

        .header-cell {
          background-color: #6c63ff;
          color: #fff;
        }
      `}</style>
      <p className="text-gray-600 mt-2 text-right mr-5">
        <i>Created By: @Omaer.v</i>
      </p>
      </div>
      
    </main>
  );
}
