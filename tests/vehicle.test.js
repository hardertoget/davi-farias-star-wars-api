const axios = require('axios');

describe('Star Wars API - Vehicles', () => {
  it('should fetch the first vehicle', async () => {
    const response = await axios.get('https://swapi.dev/api/vehicles/4/');
    expect(response.status).toBe(200);
    expect(response.data.name).toBe('Sand Crawler');  
  });

  it('should fetch another vehicle', async () => {
    const response = await axios.get('https://swapi.dev/api/vehicles/6/');
    expect(response.status).toBe(200);
    expect(response.data.name).toBe('T-16 skyhopper');
  });
});
