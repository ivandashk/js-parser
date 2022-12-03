import { describe, it, expect } from 'vitest';
import { execOnBothParsers } from './helpers/execOnBothParsers';

describe('choice', () => {
    it('positive', () => {
        const [arcRes, myRes] = execOnBothParsers((parser) => {
            return parser.choice([
                parser.digits,
                parser.letters,
            ]).run('123ads');
        });
        console.log(arcRes);

        expect(myRes).toStrictEqual(arcRes);
    })

    it('wrong first chars', () => {
        const [arcRes, myRes] = execOnBothParsers((parser) => {
            return parser.choice([
                parser.digits,
                parser.letters,
            ]).run('---123');
        });
        console.log(arcRes);

        expect(myRes).toStrictEqual(arcRes);
    })
})