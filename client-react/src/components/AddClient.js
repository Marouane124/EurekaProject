import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ClientService from '../services/ClientService';

function AddClient() {
    const navigate = useNavigate();
    const [client, setClient] = useState({
        nom: '',
        age: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        ClientService.addClient(client)
            .then(() => {
                navigate('/clients');
            })
            .catch(error => {
                console.error('Error adding client:', error);
                alert('Error adding client');
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setClient(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div>
            <h2>Ajouter un Client</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Nom:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="nom"
                        value={client.nom}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Age:</label>
                    <input
                        type="number"
                        className="form-control"
                        name="age"
                        value={client.age}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Ajouter</button>
            </form>
        </div>
    );
}

export default AddClient; 