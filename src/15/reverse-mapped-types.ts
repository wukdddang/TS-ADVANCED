import { Equal, Expect } from '../../helper'

export function makeEventHandlers(obj: unknown) {
  return obj
}

const obj = makeEventHandlers({
  click: (name) => {
    console.log(name)

    type test = Expect<Equal<typeof name, 'click'>>
  },
  focus: (name) => {
    console.log(name)

    type test = Expect<Equal<typeof name, 'focus'>>
  },
})
