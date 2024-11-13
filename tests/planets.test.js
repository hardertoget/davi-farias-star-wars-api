const axios = require('axios');

describe('Star Wars API - Planets', () => {
  it('should fetch the first planet', async () => {
    const response = await axios.get('https://swapi.dev/api/planets/1/');
    expect(response.status).toBe(200);
    expect(response.data.name).toBe('Tatooine');
  });
});
