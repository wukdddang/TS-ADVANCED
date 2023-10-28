import { Equal, Expect } from '../helper'

type Routes = '/users' | '/users/:id' | '/products' | '/products/:id'

type DynamicRoutes = unknown

type tests = [Expect<Equal<DynamicRoutes, '/users/:id' | '/products/:id'>>]
