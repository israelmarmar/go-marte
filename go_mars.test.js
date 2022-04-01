const { goMars, finalPos } = require('./go_mars');

test('Testar finalPos [1,2,N], LMLMLMLMM', () => {
    const result = finalPos([1,2,'N'],'LMLMLMLMM');
    expect(result).toEqual([ 1, 3, 'N' ]);
})

test('Testar finalPos [3,3,E], MMRMMRMRRM]', () => {
    const result = finalPos([3,3,'E'],'MMRMMRMRRM');
    expect(result).toEqual([ 5, 1, 'E' ]);
})

test('Testar goMars', () => {
    const result = goMars([[5,5],[1,2,'N'],'LMLMLMLMM', [3,3,'E'],'MMRMMRMRRM']);
    expect(result).toEqual([ [ 1, 3, 'N' ], [ 5, 1, 'E' ] ]);
})