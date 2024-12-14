import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VoitureService from '../services/VoitureService';

function AddVoiture() {
    const navigate = useNavigate();
    const [voiture, setVoiture] = useState({
        marque: '',
        model: '',
        matricule: '',
    });
    const [clientId, setClientId] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        VoitureService.addVoiture(clientId, voiture)
            .then(() => {
                navigate('/');
            })
            .catch(error => {
                console.error('Error adding voiture:', error);
                alert('Error adding voiture');
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setVoiture(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div>
            <h2>Ajouter une Voiture</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Client ID:</label>
                    <input
                        type="number"
                        className="form-control"
                        value={clientId}
                        onChange={(e) => setClientId(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Marque:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="marque"
                        value={voiture.marque}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Modèle:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="model"
                        value={voiture.model}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Matricule:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="matricule"
                        value={voiture.matricule}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Ajouter</button>
            </form>
        </div>
    );
}

export default AddVoiture;