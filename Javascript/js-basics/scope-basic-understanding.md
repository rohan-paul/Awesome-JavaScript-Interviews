**"scope"** as the set of rules that govern how the _Engine_ can look up a variable by its identifier name and find it, either in the current Scope, or in any of the Nested Scopes it's contained within.

## Lex-time

The first traditional phase of a standard language compiler is called lexing (aka, tokenizing). The lexing process examines a string of source code characters and assigns semantic meaning to the tokens as a result of some stateful parsing.

It is this concept which provides the foundation to understand what lexical scope is and where the name comes from.

To define it somewhat circularly, lexical scope is scope that is defined at lexing time. In other words, lexical scope is based on where variables and blocks of scope are authored, by me, at write time, and thus is (mostly) set in stone by the time the lexer processes my code.

It is considered best practice to treat lexical scope as, in fact, lexical-only, and thus entirely author-time in nature.

Let's consider this block of code:

```js
foo = a => {
  let b = a * 2

  bar = c => {
    console.log(a, b, c)
  }

  bar(b * 3)
}

foo(2) // => 2 4 12
```

There are three nested scopes inherent in this code example. It may be helpful to think about these scopes as bubbles inside of each other.

Bubble 1 encompasses the global scope, and has just one identifier in it: foo.

Bubble 2 encompasses the scope of foo, which includes the three identifiers: a, bar and b.

Bubble 3 encompasses the scope of bar, and it includes just one identifier: c.

Scope bubbles are defined by where the blocks of scope are written, which one is nested inside the other, etc. For our understanding just assume, that each function creates a new bubble of scope.

The bubble for bar is entirely contained within the bubble for foo, because (and only because) that's where we chose to define the function bar.

Notice that these nested bubbles are strictly nested. We're not talking about Venn diagrams where the bubbles can cross boundaries. In other words, no bubble for some function can simultaneously exist (partially) inside two other outer scope bubbles, just as no function can partially be inside each of two parent functions.

### Look-ups

The structure and relative placement of these scope bubbles fully explains to the _Engine_ all the places it needs to look to find an identifier.

In the above code snippet, the _Engine_ executes the `console.log(..)` statement and goes looking for the three referenced variables `a`, `b`, and `c`. It first starts with the innermost scope bubble, the scope of the `bar(..)` function. It won't find `a` there, so it goes up one level, out to the next nearest scope bubble, the scope of `foo(..)`. It finds `a` there, and so it uses that `a`. Same thing for `b`. But `c`, it does find inside of `bar(..)`.

Had there been a `c` both inside of `bar(..)` and inside of `foo(..)`, the `console.log(..)` statement would have found and used the one in `bar(..)`, never getting to the one in `foo(..)`.

**Scope look-up stops once it finds the first match**. The same identifier name can be specified at multiple layers of nested scope, which is called "shadowing" (the inner identifier "shadows" the outer identifier). Regardless of shadowing, scope look-up always starts at the innermost scope being executed at the time, and works its way outward/upward until the first match, and stops.

**Note:** Global variables are also automatically properties of the global object (`window` in browsers, `global` in node env), so it _is_ possible to reference a global variable not directly by its lexical name, but instead indirectly as a property reference of the global object.

```js
window.a
```

This technique gives access to a global variable which would otherwise be inaccessible due to it being shadowed. However, non-global shadowed variables cannot be accessed.

No matter _where_ a function is invoked from, or even _how_ it is invoked, its lexical scope is **only** defined by where the function was declared.

The lexical scope look-up process _only_ applies to first-class identifiers, such as the `a`, `b`, and `c`. If you had a reference to `foo.bar.baz` in a piece of code, the lexical scope look-up would apply to finding the `foo` identifier, but once it locates that variable, object property-access rules take over to resolve the `bar` and `baz` properties, respectively.
