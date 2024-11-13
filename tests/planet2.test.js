const axios = require('axios');

describe('Star Wars API - Planets', () => {
  it('should fetch the second planet', async () => {
    const response = await axios.get('https://swapi.dev/api/planets/2/');
    expect(response.status).toBe(200);
    expect(response.data.name).toBe('Alderaan');
  });
});

