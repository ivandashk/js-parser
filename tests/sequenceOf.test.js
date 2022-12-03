import { describe, it, expect } from 'vitest';
import { execOnBothParsers } from './helpers/execOnBothParsers';

describe('sequenceOf', () => {
    it('positive', () => {
        const [arcRes, myRes] = execOnBothParsers((parser) => {
            return parser.sequenceOf([
                parser.str('hello'),
                parser.str('world'),
            ]).run('helloworld');
        });

        expect(myRes).toStrictEqual(arcRes);
    })

    it('Error in first', () => {
        const [arcRes, myRes] = execOnBothParsers((parser) => {
            const p = parser.sequenceOf([
                parser.str('hello!'),
                parser.str('world'),
            ]);
            return p.run('helloworld')
        });

        expect(myRes).toStrictEqual(arcRes);
    })

    it('Sequence of sequence', () => {
        const [arcRes, myRes] = execOnBothParsers((parser) => {
            const p = parser.sequenceOf([
                parser.sequenceOf([
                    parser.str('hello'),
                    parser.str('world'),
                ]),
                parser.sequenceOf([
                    parser.str('hello'),
                    parser.str('world'),
                ]),
            ]);
            return p.run('helloworldhelloworld')
        });

        expect(myRes).toStrictEqual(arcRes);
    })
})