import React, { useState, useEffect } from 'react';
import VoitureService from '../services/VoitureService';

function VoitureList() {
    const [voitures, setVoitures] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadVoitures();
    }, []);

    const loadVoitures = () => {
        VoitureService.getAllVoitures()
            .then(response => {
                setVoitures(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError('Error loading voitures: ' + error.message);
                setLoading(false);
            });
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div className="alert alert-danger">{error}</div>;

    return (
        <div>
            <h2>Liste des Voitures</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Marque</th>
                        <th>Modèle</th>
                        <th>Matricule</th>
                        <th>Client ID</th>
                    </tr>
                </thead>
                <tbody>
                    {voitures.map(voiture => (
                        <tr key={voiture.id}>
                            <td>{voiture.id}</td>
                            <td>{voiture.marque}</td>
                            <td>{voiture.model}</td>
                            <td>{voiture.matricule}</td>
                            <td>{voiture.idclient}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default VoitureList;