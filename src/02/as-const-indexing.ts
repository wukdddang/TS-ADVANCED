import { Equal, Expect } from '../helper'

export const Color = {
  Red: 'red',
  Green: 'green',
  Blue: 'blue',
} as const

type RedGreenBlueValue = unknown

type tests = [Expect<Equal<RedGreenBlueValue, 'red' | 'blue' | 'green'>>]
