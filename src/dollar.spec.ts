import { Dollar } from './dollar'

describe('Dollar', () => {
  it('should return 10 when 5 dollars is multiplied by 2', () => {
    const five = new Dollar(5)
    let prod: Dollar = five.times(2)
    expect(prod.amount).toEqual(10)
    prod = five.times(3)
    expect(prod.amount).toEqual(15)
  })

  it('should return true when dollars of the same value are compared', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy()
    expect(new Dollar(5).equals(new Dollar(10))).toBeFalsy()
  })
})
