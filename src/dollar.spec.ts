import { Dollar } from './dollar'

describe('Dollar', () => {
  test('should return 10 when 5 dollars is multiplied by 2', () => {
    const five = new Dollar(5)
    var prod: Dollar = five.times(2)
    expect(prod.amount).toEqual(10)
    prod = five.times(3)
    expect(prod.amount).toEqual(15)
  })
})
