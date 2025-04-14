# L0002, Graffiticode Language Specification

## Overview
Graffiticode is a purely functional, punctuation-light programming language
designed for end-user scripting and task-specific automation. Programs compile
to static data interpreted by an environment-specific runtime.

## Core Principles
- Purely functional semantics
- Fixed arity for all functions
- Prefix notation only (no infix operators)
- Minimal punctuation; whitespace is only used as a token separator
- Commas (in lists and records) and parens (around function applications) are
  redundant but allows for human readability
- Fully inferred static types (no type annotations)
- Lambdas and function applications fully resolved at compile time
- Compiled output is pure data; runtime handles side effects

## Programs
A program is one or more let declarations followed by a single expression
terminated by the `..` token.

```
print "hello, world!"..
```

```
let greeting = "hello"..
let greeted = "world"..
print concat [greeting "," greeted "!"]..
```

## Comments
Line comments begin with `|`. The `|` character and every other character
between it and the end of the current line are ignored.

```
| This is a comment
```
```
let x = 10..  | This is also a comment
```

## Let Declarations
Symbols are defined with expressions that begin with the `let` keyword and end
with the `..` punctuation.

```
let x = 10..
```
```
let plus = <x y: add x y>..
```

## Values
### Numbers
Integers and floats (including negative numbers)

```
42
```
```
-3.14
```

### Strings
Strings can be multiline and include embedded expressions.

```
"hello"
```

Strings can be multiline.

```
'hello,
world!'
```
```
let x = "world"..
`hello, ${x}!`
```

### Booleans

```
true
```
```
false
```

### Null
```
null
```

## Data Structures
### Lists
List are denoted with brackets and space-separated elements (commas are optional).
They are immutable and can be used with pattern matching and destructuring.

```
[1 2 3]
```
```
let [a b c] = [10 20 30]..
```
```
case [10 20 30] of
  []: "empty"
  [x, rest]: add [x hd rest]  | Yields 30
end
```

### Records
Records are denoted with braces and space-separated bindings (commas are optional).
They are immutable and can be used with pattern matching and destructuring.
Keys are strings or identifiers.

```
{
  name: "Alice"
  age: 30
}
```

```
let hash = <{ name age }: concat [name age]>..
hash {name: "Alice" age: 30}
```

```
case {name: "Alice" age: 30} of
  {}: "no name given"
  {name}: "hello, ${name}"
end
```

### Tuples
Denoted as lists but used semantically for fixed-size, heterogeneous values.

```
let pair = [10.2 20.3]..
```

## Functions
### Lambda Functions
Lambdas are defined with angle brackets. The result of calling a function is the
value of final expression. The prefix of the body may be one or more `let`
definitions.

```
<x y: add x y>
```
```
<x y:
  let z = add x y..
  if gt z 0 then "positive" else "not positive"
>
```

### Function Application
Parentheses are required to suspend application, such as when using
functions as values. Parentheses may be used to wrap a complete function
application expression to enhance human readability.

### Currying
All functions support implicit currying. Function application with too few
arguments returns a partially applied function.

```
plus 1 2
```
```
filter (lt 3) [1 2 3 4 5]
```
```
map (double) [1 2 3]
```

### Recursion
Functions are recursive.

```
let factorial = <n: if eq n 1 then 1 else sub mul n factorial n 1>..
factorial 10..  | Yields 3628800
```

## Pattern Matching
Wildcard pattern: `_`. Supports list and record destructuring.

```
case x of
  pattern1: expr1
  pattern2: expr2
end
```

## Control Flow
### Conditional Expressions
Must include both `then` and `else`. Always returns a value.

```
if condition then expr1 else expr2
```

## Built-in Functions
### Print
```
print "hello, world!"..
```
### String Concatenation

```
concat ["one" 2 "three"]  | Yields "one2three"
```

### Arithmetic
`add`, `sub`, `mul`, `div`, `mod`

### Comparison
`eq`, `ne`, `lt`, `le`, `gt`, `ge`

### List Operations
`hd`, `tl`

`isEmpty`

`last`

`take n xs`, `drop n xs`, `nth n xs`

`filter`, `map`, `reduce`

`range start end step`

### Record/List Access
Access to a member of a record or a list is through a string key and
number key, respectively.

```
get {name: "Alice", age: 30} "age"
```
```
set ["foo" "bar"] 2 "baz"  | Yields ["foo" "bar" "baz"]
```

## Dialects
- Dialects define the available built-ins for a given task
- Dialects are determined by the development environment

## Execution Model
- All function applications are fully resolved at compile time
- Compiled output contains no lambdas, only static data
- Runtime may look up external data or perform side effects
- Error handling:
  - Syntax errors: handled by the parser
  - Static errors: handled by the compiler
  - Runtime errors: handled by asserts in the client code

