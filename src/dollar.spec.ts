import { Dollar } from './dollar'

describe('Dollar', () => {
  test('should return 10 when 5 dollars is multiplied by 2', () => {
    const five = new Dollar(5)
    five.times(2)
    expect(five.amount).toEqual(10)
  })
})
