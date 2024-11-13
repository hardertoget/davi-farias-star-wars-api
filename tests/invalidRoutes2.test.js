const axios = require('axios');

describe('Star Wars API - Invalid Routes', () => {
  it('should return 404 for unknown route', async () => {
    try {
      await axios.get('https://swapi.dev/api/unknownRoute/');
    } catch (error) {
      expect(error.response.status).toBe(404);
    }
  });
});
