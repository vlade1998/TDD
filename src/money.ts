import { Expression } from './expression'
import { Sum } from './sum'
import { Bank } from './bank'

export class Money implements Expression {
    private readonly _amount:number
    private readonly _currency: string

    constructor (amount: number, currency: string) {
      this._amount = amount
      this._currency = currency
    }

    static dollar (amount: number): Money {
      return new Money(amount, 'USD')
    }

    static euro (amount: number): Money {
      return new Money(amount, 'EUR')
    }

    equals (other: Money): boolean {
      if (this._currency !== other._currency) {
        return false
      }
      return this._amount === other.amount()
    }

    times (multiplier: number): Money {
      return new Money(this._amount * multiplier, this._currency)
    }

    plus (addend: Money): Expression {
      return new Sum(this, addend)
    }

    reduce (bank: Bank, to: string): Money {
      const rate = bank.rate(this._currency, to)
      return new Money(this._amount / rate, to)
    }

    currency (): string {
      return this._currency
    }

    amount (): number {
      return this._amount
    }
}
