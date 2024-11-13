const axios = require('axios');

describe('Star Wars API - Heroes', () => {
  it('should return 404 for heroes route', async () => {
    try {
      await axios.get('https://swapi.dev/api/heroes/');
    } catch (error) {
      expect(error.response.status).toBe(404);
    }
  });
});
