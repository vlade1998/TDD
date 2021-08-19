import { Expression } from "./expression"
import { Money } from "./money"
import { Bank } from "./bank"

export class Sum implements Expression {
  augend: Money
  addend: Money

  constructor (augend: Money, addend: Money) {
    this.augend = augend
    this.addend = addend
  }

  reduce (bank: Bank, to: string): Money {
    const amount = this.augend.amount() + this.addend.amount()
    return new Money(amount, to)
  }
}
