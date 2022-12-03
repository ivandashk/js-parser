import { describe, it, expect } from 'vitest';
import { execOnBothParsers } from './helpers/execOnBothParsers';

describe('errorMap', () => {
    it('working mapping', () => {
        const [arcRes, myRes] = execOnBothParsers((parser) => {
            return parser
                .str('hello')
                .errorMap(({ error, index }) => `Old message was: [${error}] @ index ${index}`)
                .run('hell');
        });

        expect(myRes).toStrictEqual(arcRes);
    })

    it('no error -> no mapping', () => {
        const [arcRes, myRes] = execOnBothParsers((parser) => {
            return parser
                .str('hello')
                .errorMap(({ error, index }) => `Old message was: [${error}] @ index ${index}`)
                .run('hello');
        });

        expect(myRes).toStrictEqual(arcRes);
    })
});