import { describe, it, expect } from 'vitest';
import { execOnBothParsers } from './helpers/execOnBothParsers';

describe('str', () => {
    it('positive', () => {
        const [arcRes, myRes] = execOnBothParsers((parser) => {
            const p = parser.str('hello');
            return p.run('hello')
        });

        expect(myRes).toStrictEqual(arcRes);
    })

    it('end of input', () => {
        const [arcRes, myRes] = execOnBothParsers((parser) => {
            const p = parser.str('hello');
            return p.run('he')
        });

        expect(myRes).toStrictEqual(arcRes);
    })

    it('wrong string', () => {
        const [arcRes, myRes] = execOnBothParsers((parser) => {
            const p = parser.str('hello');
            return p.run('qweqweqweqwe')
        });

        expect(myRes).toStrictEqual(arcRes);
    })
})
