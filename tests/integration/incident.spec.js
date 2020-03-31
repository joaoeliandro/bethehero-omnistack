const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('Incident', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create a new Incident', async () => {
        const ong_id = await request(app)
            .post('/ongs')
            .send({
                nome: "ONG TESTE",
                email: "teste@gmail.com",
                whatsapp: "84991000000",
                cidade: "Natal",
                uf: "RN"
            });

        expect(ong_id.body).toHaveProperty('id');

        expect(ong_id.body.id).toHaveLength(8);

        const response = await request(app)
            .post('/incidents')
            .set('Authorization', ong_id.body.id)
            .send({
                titulo: "Caso teste",
                descricao: "Caso teste. Ajude-o, seja um herói!",
                valor: 120
            });

        expect(response.body).toHaveProperty('id');

        expect(response.body.id).toHaveLength(8);
    });
});