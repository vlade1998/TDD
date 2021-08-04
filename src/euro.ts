export class Euro {
  private readonly amount:number
  constructor (amount: number) {
    this.amount = amount
  }

  times (multiplier: number): Euro {
    return new Euro(this.amount * multiplier)
  }

  equals (other: Euro): boolean {
    return this.amount === other.amount
  }
}