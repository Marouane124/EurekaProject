import axios from 'axios';

const API_URL = 'http://localhost:8888/SERVICE-CLIENT';

class ClientService {
    getAllClients() {
        return axios.get(`${API_URL}/clients`);
    }

    getClientById(id) {
        return axios.get(`${API_URL}/clients/${id}`);
    }

    addClient(client) {
        return axios.post(`${API_URL}/clients`, client);
    }
}

export default new ClientService(); 
