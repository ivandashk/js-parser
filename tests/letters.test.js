import { describe, it, expect } from 'vitest';
import { execOnBothParsers } from './helpers/execOnBothParsers';

describe('letters', () => {
    it('positive', () => {
        const [arcRes, myRes] = execOnBothParsers((parser) => {
            return parser.letters.run('hello world');
        });

        expect(myRes).toStrictEqual(arcRes);
    })

    it('whitespace', () => {
        const [arcRes, myRes] = execOnBothParsers((parser) => {
            return parser.letters.run(' ');
        });

        expect(myRes).toStrictEqual(arcRes);
    })

    it('no input', () => {
        const [arcRes, myRes] = execOnBothParsers((parser) => {
            return parser.letters.run(' ');
        });

        expect(myRes).toStrictEqual(arcRes);
    })

    it('doesnt match digits', () => {
        const [arcRes, myRes] = execOnBothParsers((parser) => {
            return parser.letters.run('123');
        });

        expect(myRes).toStrictEqual(arcRes);
    })
})
