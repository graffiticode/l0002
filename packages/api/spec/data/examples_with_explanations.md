# Graffiticode Examples with Explanations

Graffiticode is a functional language with OCaml-like syntax. Here are examples demonstrating core language features:

## Basic Declarations

```gc
let x = 42
```
Binds the value `42` to the variable `x`.

## Data Structures

### Lists

```gc
let emptyList = []
let numbers = [1, 2, 3, 4, 5]
let nested = [1, [2, 3], 4]
```
Lists can contain any values including other lists. Access elements using index notation: `numbers[0]` returns `1`.

### Records

```gc
let point = {x: 10, y: 20}
let person = {
  name: "Alice", 
  age: 30, 
  address: {
    street: "123 Main St",
    city: "Anytown"
  }
}
```
Records are key-value structures. Access using dot notation: `person.name` returns `"Alice"`.

## Functions

### Lambda Expressions

```gc
let identity = <x: x>
let add = <a b: a + b>
let double = <x: x + x>
```
Functions are defined using the `<parameters: body>` syntax.

### Function Application

```gc
let sum = add 3 4   // Returns 7
let twice = double 5   // Returns 10
```
Functions are applied by listing arguments after the function name.

## Higher-Order Functions

```gc
let map = <fn arr: <i: fn arr[i]>>
let filter = <pred arr: <i: pred arr[i] ? arr[i] : []>>
let reduce = <fn acc arr: arr[] ? acc : reduce fn fn acc arr[0] arr[1:]>

let doubled = map double [1, 2, 3]   // Returns [2, 4, 6]
let evens = filter <x: x % 2 == 0> [1, 2, 3, 4, 5]   // Returns [2, 4]
let sum = reduce add 0 [1, 2, 3, 4]   // Returns 10
```
Functions that take other functions as arguments or return functions.

## Conditional Logic

```gc
let max = <a b: a > b ? a : b>
let abs = <x: x < 0 ? -x : x>
```
The ternary operator `condition ? trueValue : falseValue` is used for conditionals.

## Recursion

```gc
let factorial = <n: n <= 1 ? 1 : n * factorial n - 1>
let fibonacci = <n: n <= 1 ? n : fibonacci n - 1 + fibonacci n - 2>
```
Functions can call themselves to create recursive algorithms.

## Composition

```gc
let compose = <f g x: f g x>
let addThenDouble = compose double add
let result = addThenDouble 5 7   // double(add(5, 7)) = double(12) = 24
```
Functions can be composed to create new functions.

## Real-World Example: Data Processing

```gc
let products = [
  {id: 1, name: "Laptop", price: 1200, stock: 5},
  {id: 2, name: "Phone", price: 800, stock: 10},
  {id: 3, name: "Tablet", price: 500, stock: 7},
  {id: 4, name: "Headphones", price: 100, stock: 15}
]

let inStock = <item: item.stock > 0>
let applyDiscount = <item discount: {
  id: item.id,
  name: item.name,
  price: item.price * (1 - discount),
  stock: item.stock
}>

let calculateTotal = <items: 
  reduce <item total: total + item.price> 0 items
>

// Filter in-stock items, apply 10% discount, calculate total
let availableItems = filter inStock products
let discountedItems = map <item: applyDiscount item 0.1> availableItems
let total = calculateTotal discountedItems
```
A more complex example showing how to process a collection of products.