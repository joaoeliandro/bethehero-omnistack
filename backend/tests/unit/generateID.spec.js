const generateIDUtils = require('../../src/utils/generateIDUtils');

describe('Generate Unique ID Hex', () => {
    it('should generate unique ID in Hex', async () => { 
        const id = await generateIDUtils();

        expect(id).toHaveLength(8);
    })
});