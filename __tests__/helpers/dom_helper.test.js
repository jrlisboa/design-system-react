import { createNewPortalRoot } from '../../src/helpers/dom_helper';

describe('Helper file to work with DOM elements', () => {
    test('GIVEN a valid id and type THEN receive matching element', async () => {
        const root = {
            id: 'root-id',
            type: 'div',
        };
        const created = createNewPortalRoot(root.id, root.type);
        expect(created.outerHTML).toBe(`<div id="root-id"></div>`);
    })

    test('GIVEN a invalid type THEN throw error', async () => {
        const root = {
            id: 'root-id',
            type: 1,
        };
        expect(() => createNewPortalRoot(root.id, root.type))
            .toThrow('"1" did not match the Name production');
    })

    test('GIVEN a invalid ID THEN throw error', async () => {
        const root = {
            id: null,
            type: 'div',
        };
        expect(() => createNewPortalRoot(root.id, root.type))
            .toThrow('Invalid ID');
    })
})