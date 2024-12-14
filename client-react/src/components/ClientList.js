import React, { useState, useEffect } from 'react';
import ClientService from '../services/ClientService';
import VoitureService from '../services/VoitureService';

function ClientList() {
    const [clients, setClients] = useState([]);
    const [selectedClient, setSelectedClient] = useState(null);
    const [clientVoitures, setClientVoitures] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadClients();
    }, []);

    const loadClients = () => {
        ClientService.getAllClients()
            .then(response => {
                setClients(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError('Error loading clients: ' + error.message);
                setLoading(false);
            });
    };

    const handleClientClick = (client) => {
        setSelectedClient(client);
        VoitureService.getVoituresByClient(client.id)
            .then(response => {
                setClientVoitures(response.data);
            })
            .catch(error => {
                console.error('Error loading voitures:', error);
                setClientVoitures([]);
            });
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div className="alert alert-danger">{error}</div>;

    return (
        <div className="row">
            <div className="col-md-6">
                <h2>Liste des Clients</h2>
                <div className="list-group">
                    {clients.map(client => (
                        <button
                            key={client.id}
                            className={`list-group-item list-group-item-action ${selectedClient?.id === client.id ? 'active' : ''}`}
                            onClick={() => handleClientClick(client)}
                        >
                            {client.nom} (Age: {client.age})
                        </button>
                    ))}
                </div>
            </div>
            <div className="col-md-6">
                {selectedClient && (
                    <div>
                        <h3>Voitures de {selectedClient.nom}</h3>
                        {clientVoitures.length > 0 ? (
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Marque</th>
                                        <th>Modèle</th>
                                        <th>Matricule</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {clientVoitures.map(voiture => (
                                        <tr key={voiture.id}>
                                            <td>{voiture.marque}</td>
                                            <td>{voiture.model}</td>
                                            <td>{voiture.matricule}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <p>Aucune voiture trouvée pour ce client</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ClientList; 