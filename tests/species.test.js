const axios = require('axios');

describe('Star Wars API - Species', () => {
  it('should fetch the first species', async () => {
    const response = await axios.get('https://swapi.dev/api/species/1/');
    expect(response.status).toBe(200);
    expect(response.data.name).toBe('Human');
  });

  it('should fetch another species', async () => {
    const response = await axios.get('https://swapi.dev/api/species/2/');
    expect(response.status).toBe(200);
    expect(response.data.name).toBe('Droid');
  });
});
