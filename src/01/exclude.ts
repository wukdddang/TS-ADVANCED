import { Equal, Expect } from '../../helper'

export type Event =
  | {
      type: 'click'
      event: MouseEvent
    }
  | {
      type: 'focus'
      event: FocusEvent
    }
  | {
      type: 'keydown'
      event: KeyboardEvent
    }

type NonKeyDownEvents = Exclude<Event, unknown>

type tests = [
  Expect<
    Equal<
      NonKeyDownEvents,
      { type: 'click'; event: MouseEvent } | { type: 'focus'; event: FocusEvent }
    >
  >,
]
