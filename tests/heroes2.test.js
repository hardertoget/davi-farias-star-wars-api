const axios = require('axios');

describe('Star Wars API - People', () => {
  it('should fetch the first person', async () => {
    const response = await axios.get('https://swapi.dev/api/people/1/');
    expect(response.status).toBe(200);
    expect(response.data.name).toBe('Luke Skywalker');
  });
});
