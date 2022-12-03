import { describe, it, expect } from 'vitest';
import { execOnBothParsers } from './helpers/execOnBothParsers';

describe('many1', () => {
    it('many repeats', () => {
        const [arcRes, myRes] = execOnBothParsers((parser) => {
            return parser.many1(parser.str('abc')).run('abcabcabcabc');
        });

        expect(myRes).toStrictEqual(arcRes);
    });

    it('empty string', () => {
        const [arcRes, myRes] = execOnBothParsers((parser) => {
            return parser.many1(parser.str('abc')).run('');
        });

        expect(myRes).toStrictEqual(arcRes);
    });

    it('no matches', () => {
        const [arcRes, myRes] = execOnBothParsers((parser) => {
            return parser.many1(parser.str('abc')).run('12345');
        });

        expect(myRes).toStrictEqual(arcRes);
    })
});
