import { describe, it, expect } from 'vitest';
import { execOnBothParsers } from './helpers/execOnBothParsers';

describe('digits', () => {
    it('positive', () => {
        const [arcRes, myRes] = execOnBothParsers((parser) => {
            return parser.digits.run('123123');
        });

        expect(myRes).toStrictEqual(arcRes);
    })

    it('whitespace', () => {
        const [arcRes, myRes] = execOnBothParsers((parser) => {
            return parser.digits.run(' ');
        });

        expect(myRes).toStrictEqual(arcRes);
    })

    it('no input', () => {
        const [arcRes, myRes] = execOnBothParsers((parser) => {
            return parser.digits.run(' ');
        });

        expect(myRes).toStrictEqual(arcRes);
    })

    it('doesnt match lettes', () => {
        const [arcRes, myRes] = execOnBothParsers((parser) => {
            return parser.digits.run('qweqweqe');
        });

        expect(myRes).toStrictEqual(arcRes);
    })
})
