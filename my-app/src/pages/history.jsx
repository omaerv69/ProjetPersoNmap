import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import axios from 'axios';

export default function History() {
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/model')
      .then((response) => {
        setHistoryData(response.data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des données');
      });
  }, []);

  const deleteItem = (id) => {
    axios.delete(`http://localhost:3001/api/model/${id}`)
      .then((response) => {
        setHistoryData(historyData.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.error('Erreur lors de la suppression de l\'objet');
      });
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="history-container">
          <div className="text-3xl text-purple-400">
            <h2>Historique :</h2>
          </div>
          <div className="table-container">
            {historyData.length === 0 ? (
              <p>Aucune donnée d'historique disponible.</p>
            ) : (
              <table className="history-table">
                <thead>
                  <tr>
                    <th className="header-cell">Requête</th>
                    <th className="header-cell">IP</th>
                    <th className="header-cell">Options</th>
                    <th className="header-cell">Date et Heure</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {historyData.map((item) => (
                    <tr key={item._id}>
                      <td>{item.req}</td>
                      <td>{item.ip}</td>
                      <td>{item.options}</td>
                      <td>{item.date}</td>
                      <td>
                        <button
                          className="bg-purple-500 text-white px-4 py-2 rounded-lg"
                          onClick={() => deleteItem(item._id)}
                        >
                          Supprimer
                        </button>
                      </td>
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

        .history-container {
          text-align: center;
          margin-bottom: 32px;
        }

        .table-container {
          margin-top: 16px;
        }

        .history-table {
          border-collapse: collapse;
          width: 100%;
        }

        .history-table th,
        .history-table td {
          border: 1px solid #ddd;
          padding: 8px;
        }

        .header-cell {
          background-color: #6c63ff;
          color: #fff;
        }

        .history-table button {
          background-color: #6c63ff;
          color: #fff;
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
