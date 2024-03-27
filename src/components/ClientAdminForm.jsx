import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClientAdminForm = () => {
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);
  const [logoUrl, setLogoUrl] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/clients');
      setClients(response.data);
    } catch (error) {
      console.error('Error fetching clients:', error);
    }
  };

  const handleClientSelect = (client) => {
    setSelectedClient(client);
    setLogoUrl(client.logoUrl);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:5000/api/clients/${selectedClient._id}/logo`, { logoUrl });
      setMessage(response.data.message);
      // Update the logo URL in the client object
      setSelectedClient({ ...selectedClient, logoUrl });
    } catch (error) {
      console.error('Error updating client logo:', error);
      setMessage('An error occurred while updating client logo');
    }
  };

  return (
    <div>
      <h2>Update Client Logo</h2>
      <div>
        <h3>Clients:</h3>
        <ul>
          {clients.map(client => (
            <li key={client._id} onClick={() => handleClientSelect(client)}>
              {client.name}
            </li>
          ))}
        </ul>
      </div>
      {selectedClient && (
        <div>
          <h3>Selected Client: {selectedClient.name}</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="logoUrl">Logo URL:</label>
              <input
                type="text"
                id="logoUrl"
                value={logoUrl}
                onChange={(e) => setLogoUrl(e.target.value)}
                required
              />
            </div>
            <button type="submit">Update</button>
          </form>
        </div>
      )}
      {message && <p>{message}</p>}
    </div>
  );
};

export default ClientAdminForm;
