import { Equal, Expect } from '../helper'

type ObjectOfKeys = unknown

type tests = [
  Expect<
    Equal<
      ObjectOfKeys,
      {
        userId: string
        userName: string
        postId: string
        postName: string
        commentId: string
        commentName: string
      }
    >
  >,
]
