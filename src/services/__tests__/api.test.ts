const axios = require('axios');
const { getArtists } = require('../api');

jest.mock('axios');

describe('getArtists', () => {
    it('should return artists on successful API call', async () => {
        const artists = [{ name: 'Artist 1' }, { name: 'Artist 2' }];
        axios.get.mockResolvedValue({ data: artists });

        const result = await getArtists();
        expect(result).toEqual(artists);
    });

    it('should throw an error when API call fails', async () => {
        axios.get.mockRejectedValue(new Error('500 - Internal Server Error'));

        await expect(getArtists()).rejects.toThrow('Error: 500 - Internal Server Error');
    });
});