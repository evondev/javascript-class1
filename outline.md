# Buổi 1

- Giới thiệu khóa học
- Mục tiêu của khóa học
- Ưu đãi của khóa học
- Tham khảo MDN ⭐️
- Cài đặt extensions
- Thiết lập dự án
- \_Variables
- _Naming convention_: unique, should not be JS keyword, first character must be a letter, underscore or dollar sign
- _const_, _let_: uninitialized
- _var_: undefined
- _scope_: global, local, block
- _temporal dead zone_: is the area of a `block` where a variable is inaccessible until the moment the computer completely `initializes` it with a value. `ReferenceError`
- _hoisting_: refers to JavaScript giving higher precedence to the declaration of variables, classes, and functions during a program’s execution, makes the computer process declarations before any other code.
- Ví dụ
- Data types
- Primitive: Number, String, Boolean, Null, Undefined - “primitive” because their values can contain only a single thing
- Non-Primitive: Object, Array, RegExp
- Comment
- Single line
- Multi line
- String
- single quote, double quote, backticks, special characters
- String Methods
  -> variable, hoisting, temporal dead zone, naming convention, string

# Logic & Control Flow

- Giải bài tập buổi 1
- Ôn lại kiến thức buổi 1
- _Number_
- int: 5
- float(decimal): 9.5
- NaN: Not a Number
- typeof NaN is `number`
- Boolean: `true` or `false`
- typeof null is `object`
- value: `null`
- Null is an assignment value
- use null to assign an “empty” or “unknown” value to a variable.
- typeof undefined is `undefined`
- A variable that has not been assigned a value
  is `undefined`.
- _Operations_
- Arithmetic Operators: + - \* / () % ++ --
- Comparison Operators: > < >= <= ==(loose equality: doesn’t compare the data types) vs ===(strict equality) -> Boolean
- Logical Operators: && || !
- Assignment Operators: = += -= \*= /=
- _Number Methods_
- Falsy values: false, 0, "", '', ``, null, undefined, NaN
- _If else_
- _Switch case_
- _Ternary operator_
- `_type coercion_`: is the process of converting value from one type to another
- explicit, implicit
- string(+), boolean(|| && !), number conversion(+ - \* / % > < <= >= | & ^ ~ ==)

# Functions

- name
- parameters vs arguments
- normal vs arrow
- callback
- return keyword
- execution context
- `closure`
- hoisting
- declaration vs expression
- callback hell

# Array

- _Array_
- Destructuring
- Optional chaining
- Rest parameter

# Loop

# Object

- _Object_
- Destructuring
- Optional chaining
- Rest parameter

# Value & Reference

# DOM

- DOM
- Events
- Intersection Observer

# Class, New, This

# Asynchronous

- Callback hell
- Promise
- Asynchronous
- API
- Cors
- fetch & axios

# Other

- Date
- Regex
- Map
- Set
- Generator function

# Tricky concepts

- _this_
- _prototype_
- _call, apply, bind_
- _recursion_
- _execution context_
- _call stack_
- _event loop_
- _type coercion_
- NaN vs Number.isNaN
- When a function returns a function, that is when the concept of closures becomes more relevant. The returned function has access to variables that are not in the global scope, but they solely exist in its closure.
- Whenever you declare a new function and assign it to a variable, you store the function definition, as well as a closure. The closure contains all the variables that are in scope at the time of creation of the function. It is analogous to a `backpack`. A function definition comes with a little backpack. And in its pack it stores all the variables that were in scope at the time that the function definition was created.
