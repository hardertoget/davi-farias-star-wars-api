const axios = require('axios');

describe('Star Wars API - Starships', () => {
  it('should fetch the second starship', async () => {
    const response = await axios.get('https://swapi.dev/api/starships/3/');
    expect(response.status).toBe(200);
    expect(response.data.name).toBe('Death Star');
  });
});

