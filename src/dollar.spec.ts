import { Dollar } from './dollar'
import { Euro } from './euro'

describe('Money', () => {
  it('should correctly handle dollar multiplication', () => {
    const five = new Dollar(5)
    expect(five.times(2).equals(new Dollar(10))).toBeTruthy()
    expect(five.times(3).equals(new Dollar(15))).toBeTruthy()
  })

  it('should correctly handle euro multiplication', () => {
    const five = new Euro(5)
    expect(five.times(2).equals(new Euro(10))).toBeTruthy()
    expect(five.times(3).equals(new Euro(15))).toBeTruthy()
  })

  it('should correctly handle money equality', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy()
    expect(new Dollar(5).equals(new Dollar(10))).toBeFalsy()
    expect(new Euro(5).equals(new Euro(5))).toBeTruthy()
    expect(new Euro(5).equals(new Euro(10))).toBeFalsy()
    expect(new Euro(5).equals(new Dollar(5))).toBeFalsy()
  })
})
