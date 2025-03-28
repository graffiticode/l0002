# Graffiticode Language Specification

This document formally specifies the Graffiticode language, a functional programming language with OCaml-like syntax.

**Version:** 1.0.0  
**Status:** Draft  
**Date:** March 26, 2025  

## Introduction

Graffiticode is a functional programming language designed for [primary purpose/applications]. It features a clean, expressive syntax inspired by OCaml and emphasizes immutability, first-class functions, and composability.

### Design Goals

1. Simplicity: Minimal syntax with powerful semantics
2. Expressiveness: Concise code that clearly communicates intent
3. Functional: First-class functions, immutability, and composition
4. Practical: Suitable for real-world programming tasks

## Lexical Structure

### Comments

Line comments begin with `//` and continue to the end of the line:

```
// This is a comment
let x = 42  // This is also a comment
```

### Whitespace

Whitespace (spaces, tabs, newlines) is insignificant except to separate tokens and for indentation in certain constructs.

### Identifiers

Identifiers are used for variable and function names. They must begin with a letter and can contain letters, digits, and underscores.

Syntax:
```
identifier ::= letter (letter | digit | '_')*
```

Examples:
```
x
add
calculate_total
myVar123
```

### Keywords

The following are reserved keywords in Graffiticode:

```
let
case
match
```

### Literals

#### Integer Literals

Syntax:
```
integer ::= digit+
```

Examples:
```
0
42
123456
```

#### String Literals

Strings are enclosed in double quotes.

Syntax:
```
string ::= '"' character* '"'
```

Examples:
```
"hello"
"Graffiticode is awesome!"
"123"
```

#### Boolean Literals

Boolean values are represented using integers where `0` is false and non-zero values (typically `1`) are true.

## Types

Graffiticode uses a dynamic type system. Values have types, but variables and parameters are not explicitly typed.

### Primitive Types

	 **Number**: Represents integer and floating-point numbers
	 **String**: Represents text data
	 **Boolean**: Represented as integers where 0 is false and non-zero is true

### Composite Types

#### Lists

Lists are ordered collections of values that can be of any type.

Syntax:
```
list ::= '[' expression (',' expression)* ']'
       | '[]'  // Empty list
```

Examples:
```
[]
[1, 2, 3]
["hello", "world"]
[1, "two", [3, 4]]
```

#### Records

Records are collections of key-value pairs.

Syntax:
```
record ::= '{' (identifier ':' expression (',' identifier ':' expression)*)? '}'
```

Examples:
```
{}
{x: 10, y: 20}
{name: "Alice", age: 30, active: 1}
```

### Function Types

Function types are not explicitly declared but are inferred from lambda expressions.

## Expressions

### Variables

Variables refer to values bound using `let` declarations.

Examples:
```
x
counter
myFunction
```

### Literals

Literals represent fixed values as described in the Literals section.

### List Indexing

List elements are accessed using zero-based indexing with square brackets.

Syntax:
```
indexing ::= expression '[' expression ']'
```

Examples:
```
numbers[0]
matrix[i][j]
```

### Record Field Access

Record fields are accessed using dot notation.

Syntax:
```
field-access ::= expression '.' identifier
```

Examples:
```
person.name
point.x
```

### Conditional Expressions

Conditional expressions use the ternary operator syntax.

Syntax:
```
conditional ::= expression '?' expression ':' expression
```

Examples:
```
x > 0 ? "positive" : "non-positive"
isEmpty ? [] : list[0]
```

### Function Application

Functions are applied by listing the function followed by its arguments.

Syntax:
```
application ::= expression expression+
```

Examples:
```
add 3 4
map double numbers
```

## Statements

### Let Declarations

Let declarations bind values to identifiers.

Syntax:
```
let-declaration ::= 'let' identifier '=' expression
```

Examples:
```
let x = 42
let greeting = "hello"
let add = <a b: a + b>
```

## Functions

### Lambda Expressions

Lambda expressions define anonymous functions.

Syntax:
```
lambda ::= '<' parameter-list ':' expression '>'
parameter-list ::= identifier*
```

Examples:
```
<x: x + 1>
<a b: a + b>
<f g x: f g x>
```

### Function Parameters

Function parameters are listed without delimiters or type annotations.

Examples:
```
<x: x + x>             // One parameter
<a b: a + b>           // Two parameters
<fn acc arr: ...>      // Three parameters
```

### Recursion

Functions can call themselves directly by name for recursion.

Example:
```
let factorial = <n: n <= 1 ? 1 : n * factorial n - 1>
```

## Higher-Order Functions

Graffiticode supports higher-order functions that can take functions as arguments and return functions as results.

### Common Higher-Order Functions

#### Map

Applies a function to each element of a list.

Example:
```
let map = <fn arr: <i: fn arr[i]>>
```

#### Filter

Selects elements from a list that satisfy a predicate.

Example:
```
let filter = <pred arr: <i: pred arr[i] ? arr[i] : []>>
```

#### Reduce

Combines elements of a list into a single value.

Example:
```
let reduce = <fn acc arr: arr[] ? acc : reduce fn fn acc arr[0] arr[1:]>
```

## Operators

### Arithmetic Operators

	 `+`: Addition
	 `-`: Subtraction
	 `*`: Multiplication
	 `/`: Division
	 `%`: Modulo

### Comparison Operators

	 `==`: Equal to
	 `!=`: Not equal to
	 `<`: Less than
	 `>`: Greater than
	 `<=`: Less than or equal to
	 `>=`: Greater than or equal to

### Logical Operators

	 `&&`: Logical AND
	 `||`: Logical OR
	 `!`: Logical NOT

## Execution Model

### Evaluation Strategy

Graffiticode uses eager (strict) evaluation for expressions.

### Scope Rules

Graffiticode uses lexical scoping for variables. Variables are visible within the scope they are defined and any nested scopes.

### First-Class Functions

Functions are first-class values in Graffiticode. They can be:
	 Assigned to variables
	 Passed as arguments to other functions
	 Returned as results from functions
	 Stored in data structures

## Examples

### Basic Examples

```
// Variable declarations
let x = 42
let greeting = "hello"

// Lists
let numbers = [1, 2, 3, 4, 5]
let mixed = [1, "two", [3, 4]]

// Records
let point = {x: 10, y: 20}
let person = {name: "Alice", age: 30}

// Functions
let identity = <x: x>
let add = <a b: a + b>
let double = <x: x + x>

// Function application
let result = add 3 4
let doubled = double 21
```

### Advanced Examples

```
// Higher-order functions
let map = <fn arr: <i: fn arr[i]>>
let filter = <pred arr: <i: pred arr[i] ? arr[i] : []>>
let reduce = <fn acc arr: arr[] ? acc : reduce fn fn acc arr[0] arr[1:]>

// Function composition
let compose = <f g x: f g x>
let addThenDouble = compose double add
let result = addThenDouble 5 7  // double(add(5, 7)) = double(12) = 24

// Recursive functions
let factorial = <n: n <= 1 ? 1 : n * factorial n - 1>
```

### Real-World Example: Data Processing

```
let products = [
  {id: 1, name: "Laptop", price: 1200, stock: 5},
  {id: 2, name: "Phone", price: 800, stock: 10},
  {id: 3, name: "Tablet", price: 500, stock: 0},
  {id: 4, name: "Headphones", price: 100, stock: 15}
]

// Filter in-stock items
let inStock = <item: item.stock > 0>
let availableItems = filter inStock products

// Apply 10% discount to each item
let applyDiscount = <item discount: {
  id: item.id,
  name: item.name,
  price: item.price * (1 - discount),
  stock: item.stock
}>
let discountedItems = map <item: applyDiscount item 0.1> availableItems

// Calculate total price
let calculateTotal = <items: 
  reduce <item total: total + item.price> 0 items
>
let total = calculateTotal discountedItems
```

## Formal Grammar

The following is a formal grammar for Graffiticode in modified BNF notation:

```
Program ::= Statement+ ".."

Statement ::= LetDefinition | Lambda | List | Record | Identifier

LetDefinition ::= "let" Identifier "=" Expression ".."

Lambda ::= "<" Identifier* ":" Expression ">"

List ::= "[" (Expression ("," Expression)*)? "]"

Record ::= "{" (Identifier ":" Expression ("," Identifier ":" Expression)*)? "}"

Expression ::= Lambda | List | Record | Identifier | Number | String
             | Expression "[" Expression "]"             // List indexing
             | Expression "." Identifier                 // Record field access
             | Expression "?" Expression ":" Expression  // Conditional
             | Expression Expression+                    // Function application
             | Expression BinaryOperator Expression      // Binary operation

Identifier ::= [a-zA-Z][a-zA-Z0-9_]*

Number ::= [0-9]+

String ::= "\"" .* "\""

BinaryOperator ::= "+" | "-" | "*" | "/" | "%" | "==" | "!=" | "<" | ">" | "<=" | ">=" | "&&" | "||"
```

## Future Considerations

The following features are being considered for future versions of the language:

1. **Pattern Matching**: A more comprehensive pattern matching system
2. **Type Annotations**: Optional type annotations for variables and functions
3. **Modules**: A module system for organizing code
4. **Error Handling**: Structured error handling mechanisms

---

This specification is subject to change as the language evolves. Please refer to the latest version for the most up-to-date information.