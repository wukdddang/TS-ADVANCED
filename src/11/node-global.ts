import { expect, it } from 'vitest'
import { Equal, Expect } from '../helper'

process.env.MY_ENV_VAR = 'Hello, world!'

it('Should be declared as a string', () => {
  expect(process.env.MY_ENV_VAR).toEqual('Hello, world!')
})

it('Should NOT have undefined in the type', () => {
  const myVar = process.env.MY_ENV_VAR
  type tests = [Expect<Equal<typeof myVar, string>>]
})
