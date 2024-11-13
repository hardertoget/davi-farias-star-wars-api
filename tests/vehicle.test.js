const axios = require('axios');

describe('Star Wars API - Vehicles', () => {
  it('should fetch the first vehicle', async () => {
    const response = await axios.get('https://swapi.dev/api/vehicles/4/');
    expect(response.status).toBe(200);
    expect(response.data.name).toBe('Speeder bike');
  });
});
