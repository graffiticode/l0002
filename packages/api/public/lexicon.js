export const lexicon = {
  "print": {
    "tk": 1,
    "name": "PRINT",
    "cls": "function",
    "arity": 1,
    "type": "<any: record>",
    "description": "Outputs a value to the form."
  },
  "get": {
    "tk": 1,
    "name": "GET",
    "cls": "function",
    "arity": 2,
    "type": "<integer record|list: any>",
    "description": "Retrieves a value from a record or list by key or index."
  },
  "set": {
    "tk": 1,
    "name": "SET",
    "cls": "function",
    "arity": 3,
    "type": "<integer any record|list: record|list>",
    "description": "Returns a new record or list with the specified key or index updated."
  },
  "nth": {
    "tk": 1,
    "name": "NTH",
    "cls": "function",
    "arity": 2,
    "type": "<integer list: any>",
    "description": "Returns the nth element of a list by index."
  },
  "sub": {
    "tk": 1,
    "name": "SUB",
    "cls": "function",
    "arity": 2,
    "type": "<number number: number>",
    "description": "Subtracts the second number from the first."
  },
  "filter": {
    "tk": 1,
    "name": "FILTER",
    "cls": "function",
    "arity": 2,
    "type": "<lambda list: list>",
    "description": "Returns a list of elements that match a predicate."
  },
  "reduce": {
    "tk": 1,
    "name": "REDUCE",
    "cls": "function",
    "arity": 3,
    "type": "<lambda any list: any>",
    "description": "Reduces a list to a single value using a binary function and initial value."
  },
  "map": {
    "tk": 1,
    "name": "MAP",
    "cls": "function",
    "arity": 2,
    "type": "<lambda list: list>",
    "description": "Applies a function to each element in a list and returns a new list."
  },
  "lt": {
    "tk": 1,
    "name": "LT",
    "cls": "function",
    "arity": 2,
    "type": "<number number: boolean>",
    "description": "Returns true if the first value is less than the second."
  },
  "le": {
    "tk": 1,
    "name": "LE",
    "cls": "function",
    "arity": 2,
    "type": "<number number: boolean>",
    "description": "Returns true if the first value is less than or equal to the second."
  },
  "gt": {
    "tk": 1,
    "name": "GT",
    "cls": "function",
    "arity": 2,
    "type": "<number number: boolean>",
    "description": "Returns true if the first value is greater than the second."
  },
  "ge": {
    "tk": 1,
    "name": "GE",
    "cls": "function",
    "arity": 2,
    "type": "<number number: boolean>",
    "description": "Returns true if the first value is greater than or equal to the second."
  },
  "ne": {
    "tk": 1,
    "name": "NE",
    "cls": "function",
    "arity": 2,
    "type": "<number number: boolean>",
    "description": "Returns true if the two values are not equal."
  },
  "len": {
    "tk": 1,
    "name": "LEN",
    "cls": "function",
    "arity": 1,
    "type": "<list|string: integer>",
    "description": "Returns the length of a list or string."
  },
  "concat": {
    "tk": 1,
    "name": "CONCAT",
    "cls": "function",
    "arity": 1,
    "type": "<list: list|string>",
    "description": "Concatenates a list of strings or nested lists."
  },
  "add": {
    "tk": 1,
    "name": "ADD",
    "cls": "function",
    "arity": 2,
    "type": "<number number: number>",
    "description": "Adds two numbers."
  },
  "mul": {
    "tk": 1,
    "name": "MUL",
    "cls": "function",
    "arity": 2,
    "type": "<number number: number>",
    "description": "Multiplies two numbers."
  },
  "pow": {
    "tk": 1,
    "name": "POW",
    "cls": "function",
    "arity": 2,
    "type": "<number number: number>",
    "description": "Raises the first number to the power of the second."
  },
  "apply": {
    "tk": 1,
    "name": "APPLY",
    "cls": "function",
    "arity": 2,
    "type": "<number number: number>",
    "description": "Applies a function to a list of arguments."
  },
  "data": {
    "tk": 1,
    "name": "DATA",
    "cls": "function",
    "arity": 1,
    "type": "<record: record>",
    "description": "Returns the data from the upstream task, or the argument value if no input exists."
  },
  "json": {
    "tk": 1,
    "name": "JSON",
    "cls": "function",
    "arity": 1,
    "type": "<string: any>",
    "description": "Parses a string as JSON."
  },
  "eq": {
    "tk": 1,
    "name": "EQ",
    "cls": "function",
    "arity": 2,
    "type": "<number number: boolean>",
    "description": "Returns true if the two values are equal."
  },
  "mod": {
    "tk": 1,
    "name": "MOD",
    "cls": "function",
    "arity": 2,
    "type": "<number number: integer>",
    "description": "Returns the remainder of dividing the first number by the second."
  },
  "min": {
    "tk": 1,
    "name": "MIN",
    "cls": "function",
    "arity": 2,
    "type": "<number number: number>",
    "description": "Returns the smaller of two values."
  },
  "max": {
    "tk": 1,
    "name": "MAX",
    "cls": "function",
    "arity": 2,
    "type": "<number number: number>",
    "description": "Returns the larger of two values."
  },
  "range": {
    "tk": 1,
    "name": "RANGE",
    "cls": "function",
    "arity": 3,
    "type": "<number number number: list>",
    "description": "Generates a list of numbers from start to end using a step."
  },
  "not": {
    "tk": 1,
    "name": "NOT",
    "cls": "function",
    "arity": 1,
    "type": "<boolean: boolean>",
    "description": "Returns the logical negation of a boolean value."
  },
  "equiv": {
    "tk": 1,
    "name": "EQUIV",
    "cls": "function",
    "arity": 2,
    "type": "<any any: boolean>",
    "description": "Returns true if the two values are semantically equivalent."
  },
  "or": {
    "tk": 1,
    "name": "OR",
    "cls": "function",
    "arity": 2,
    "type": "<boolean boolean: boolean>",
    "description": "Returns true if at least one of the two values is true."
  },
  "and": {
    "tk": 1,
    "name": "AND",
    "cls": "function",
    "arity": 2,
    "type": "<boolean boolean: boolean>",
    "description": "Returns true if both values are true."
  },
  "hd": {
    "tk": 1,
    "name": "HD",
    "cls": "function",
    "arity": 1,
    "type": "<list: any>",
    "description": "Returns the first element of a list."
  },
  "tl": {
    "tk": 1,
    "name": "TL",
    "cls": "function",
    "arity": 1,
    "type": "<list: list>",
    "description": "Returns the list without its first element."
  },
  "cons": {
    "tk": 1,
    "name": "CONS",
    "cls": "function",
    "length": 2,
    "arity": 2,
    "type": "<any list: list>",
    "description": "Prepends an element to the front of a list."
  },
  "append": {
    "tk": 1,
    "name": "APPEND",
    "cls": "function",
    "arity": 2,
    "type": "<any list: list>",
    "description": "Appends an element to the end of a list."
  },
  "log": {
    "tk": 1,
    "name": "LOG",
    "cls": "function",
    "arity": 1,
    "type": "<any: any>",
    "description": "Logs the value to the console and returns the value (identity function)."
  },
  "hello": {
    "tk": 1,
    "name": "HELLO",
    "cls": "function",
    "length": 1,
    "arity": 1
  },
  "image": {
    "tk": 1,
    "name": "IMAGE",
    "cls": "function",
    "length": 1,
    "arity": 1
  },
  "theme": {
    "tk": 1,
    "name": "THEME",
    "cls": "function",
    "length": 2,
    "arity": 2
  }
}
