import { Equal, Expect } from '../helper'

export const Color = {
  Red: 'red',
  Green: 'green',
  Blue: 'blue',
} as const

enum ColorEnum {
  Red,
  Green,
  Blue,
}

type Red = (typeof Color)['Red']
type Green = (typeof Color)['Green']
type Blue = (typeof Color)['Blue']

type tests = [Expect<Equal<Red, 'red'>>, Expect<Equal<Green, 'green'>>, Expect<Equal<Blue, 'blue'>>]
