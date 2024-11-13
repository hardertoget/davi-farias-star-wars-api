const axios = require('axios');

describe('Star Wars API - Films', () => {
  it('should fetch the first film', async () => {
    const response = await axios.get('https://swapi.dev/api/films/1/');
    expect(response.status).toBe(200);
    expect(response.data.title).toBe('A New Hope');
  });
});
