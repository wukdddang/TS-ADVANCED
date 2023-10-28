import { Equal, Expect } from '../helper'

const rgb = ['red', 'green', 'blue'] as const

type RedAndBlue = unknown
type RGB = unknown

type tests = [
  Expect<Equal<RedAndBlue, 'red' | 'green'>>,
  Expect<Equal<RGB, 'red' | 'green' | 'blue'>>,
]
