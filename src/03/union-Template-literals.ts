import { Equal, Expect } from '../helper'

type Top = 't-shirt' | 'shirts' | 'jacket'

type Bottom = 'jeans' | 'skirt' | 'slacks'

type Outfit = unknown

type tests = [
  Expect<
    Equal<
      Outfit,
      | 't-shirt with jeans'
      | 't-shirt with skirt'
      | 't-shirt with slacks'
      | 'shirts with jeans'
      | 'shirts with skirt'
      | 'shirts with slacks'
      | 'jacket with jeans'
      | 'jacket with skirt'
      | 'jacket with slacks'
    >
  >,
]
