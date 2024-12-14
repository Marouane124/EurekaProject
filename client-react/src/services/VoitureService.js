import axios from 'axios';

const API_URL = 'http://localhost:8888/SERVICE-VOITURE';

class VoitureService {
    getAllVoitures() {
        return axios.get(`${API_URL}/voitures`);
    }

    getVoituresByClient(clientId) {
        return axios.get(`${API_URL}/voitures/client/${clientId}`);
    }

    addVoiture(clientId, voiture) {
        return axios.post(`${API_URL}/voitures/${clientId}`, voiture);
    }
}

export default new VoitureService();