import { setBinaryElements } from './setBinaryElements'

test('setBinaryElement works', () => {
    expect(setBinaryElements([0, 1])).toEqual([0, 0])
})