const axios = require('axios');

describe('Star Wars API - Invalid Routes', () => {
  it('should return 404 for non-existent route', async () => {
    try {
      await axios.get('https://swapi.dev/api/invalidroute/');
    } catch (error) {
      expect(error.response.status).toBe(404);
    }
  });
});
