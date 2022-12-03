import { describe, it, expect } from 'vitest';
import { execOnBothParsers } from './helpers/execOnBothParsers';

describe('map', () => {
    it('positive', () => {
        const [arcRes, myRes] = execOnBothParsers((parser) => {
            return parser
                .str('hello')
                .map(value => ({ matchType: 'string', value}))
                .run('hello');
        });

        expect(myRes).toStrictEqual(arcRes);
    })

    it('Not map anything if error', () => {
        const [arcRes, myRes] = execOnBothParsers((parser) => {
            return parser
                .str('hello')
                .map(value => ({ matchType: 'string', value}))
                .run('hell');
        });

        expect(myRes).toStrictEqual(arcRes);
    })
});