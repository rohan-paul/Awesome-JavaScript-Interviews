/*
In TypeScript 4.0 beta you could try variadic types.

This will let us decrease the number of overloads when declaring types for functions with variadic number of arguments

Typescript give types to higher-order functions that take a variable number of parameters.

Functions like this include concat, apply, curry, compose and almost any decorator that wraps a function.

https://github.com/microsoft/TypeScript/pull/39094

A variadic elemement is a spread element of the form ...T, where T is a generic type constrained to any array or tuple type (specifically, any type that is assignable to readonly any[]). Intuitively, a variadic element ...T is a placeholder that is replaced with one or more elements through generic type instantiation. Instantiation of a tuple type with a variadic element ...T depends on the type argument provided for T

https://github.com/microsoft/TypeScript/issues/5453


 */

type Foo<T extends unknown[]> = [string, ...T, number]

type T1 = Foo<[boolean]> // [string, boolean, number]
type T2 = Foo<[number, number]> // [string, number, number, number]
type T3 = Foo<[]> // [string, number]

function concat<T extends unknown[], U extends unknown[]>(
  t: [...T],
  u: [...U]
): [...T, ...U] {
  return [...t, ...u]
}

const t1 = concat([1, 2], ["hello"]) // [ number, number, string]
const t2 = concat([true], t1) // [boolean, number, number, string]
