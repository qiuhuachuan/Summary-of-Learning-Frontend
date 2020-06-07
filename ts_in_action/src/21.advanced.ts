// 条件类型
// T extends U ? X : Y

type TypeName<T> = T extends string
  ? 'string'
  : T extends number
  ? 'number'
  : T extends boolean
  ? 'boolean'
  : T extends undefined
  ? 'undefined'
  : T extends Function
  ? 'Function'
  : 'object'
type T1 = TypeName<string>
type T2 = TypeName<string[]>

// (A | B) extends U ? X : Y
// (A extends U ? X : Y) | (B extends U ? X : Y)
type T3 = TypeName<string | string[]>

type Diff<T, U> = T extends U ? never : T
type T4 = Diff<'a' | 'b' | 'c', 'a' | 'e'>
// Diff<'a', 'a' | 'e'> Diff<'b', 'a' | 'e'> | Diff<'c', 'a' | 'e'>
// never | 'b' | 'c'
// 'b' | 'c'

type NotNull<T> = Diff<T, undefined | null>
type T5 = NotNull<string | number | undefined | null>

// Exclude<T, U>
// NonNullable<T>
type t0 = 'a' | 'b' | 'c'
type t1 = 'a' | 'e'
type T6 = Exclude<t0, t1>
type T7 = NonNullable<string | number | undefined | null>

// Extract<T, U>
type T8 = Extract<'a' | 'b' | 'c', 'a' | 'e'>

// ReturnType<T>
type T9 = ReturnType<() => string>
