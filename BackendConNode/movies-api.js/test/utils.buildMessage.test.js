const asset = require('assert');
const buildMessage = require('../utils/schemas/buildMessage');

describe('utils - buildMessage', () => {
    describe('When recibes an entity and an action', () => {
        it('Shuold return the respective message', () => {
            const result = buildMessage('movie', 'create');
            const expected = 'movie created';
            asset.strictEqual(result, expected);
        });
    });

    describe('When recives an entity and an action and is a list', () => {
        it('Should return the respective message with the entity in plurarl', () => {
            const result = buildMessage('movie', 'list');
            const expected = 'movie listed';
            asset.strictEqual(result, expected);
        })
    })
})