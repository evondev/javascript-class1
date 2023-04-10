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
- `typeof` NaN is `number`
- Boolean: `true` or `false`
- Falsy values: false, 0, "", '', ``, null, undefined, NaN
- typeof null is `object`
- value: `null`
- Null is an assignment value
- use null to assign an “empty” or “unknown” value to a variable.
- typeof undefined is `undefined`
- A variable that has not been assigned a value
  is `undefined`.
- _Number Methods_
- _Operations_
- Arithmetic Operators: + - \* / () % ++ --
- Comparison Operators: > < >= <= ==(loose equality: doesn’t compare the data types) vs ===(strict equality) -> Boolean
- Logical Operators: && || !
- Assignment Operators: = += -= \*= /=
- _If else_
- _Switch case_
- _Ternary operator_
- `_type coercion_`: is the process of converting value from one type to another
- explicit, implicit
- string(+), boolean(|| && !), number conversion(+ - \* / % > < <= >= | & ^ ~ ==)

# Functions

- intro
- declaration
- name
- parameters vs arguments
- normal function vs arrow function
- callback -> callback hell
- return keyword
- declaration vs expression
- hoisting
- scope
- execution context 🤯
- call stack
- calling context: global or local execution context 🤯
- using local context
- using global context
- function return function
- closure 🤯
- Whenever you declare a new function and assign it to a variable, you store the function definition, as well as a closure. The closure contains all the variables that are in scope at the time of creation of the function. It is analogous to a `backpack`.

# Array

- declaration
- index, length, random, undefined
- Reference types don't hold values, they are a pointer to the value in memory.
- array methods: map, forEach, sort, push, pop, shift, unshift, reduce, find, findIndex, some, every, concat, filter, reverse, slice, splice, join, at, fill, findLastIndex, flat, includes, lastIndexOf, from, toString, isArray,
- Spread operator
- Destructuring
- Clone array shallow, deep
- BTVN

# Looooooooop

- Ôn lại kiến thức
- Thực hành vài bài tập
- for
- for of
- while
- do while
- break
- continue

# Object

- Declaration
- Access, adding, update properties
- Dot notation vs square bracket notation
- Method
- Methods: keys, values, entries, freeze, hasOwnProperty, assign, create
- clone: shallow, deep
- Destructuring
- Optional chaining
- Rest parameter
- for in
- Function constructor
- `This` keyword

# DOM

- querySelector, querySelectorAll, getElementsByClassName, getGelementsByTagName, getElementById
- get, set, remove, has attribute
- textContent, innerText, innerHTML
- add, remove, toggle class, className, classList
- createElement, appendChild
- cloneNode
- hasChildNodes
- insertAdjacentText, insertAdjacentElement, insertAdjacentHTML, insertBefore
- Traversing
- offset (border)
- client (non-border)
- window
- scroll
- getBoundingClientRect
- NodeList vs HTMLCollection
- parentNode vs parentElement
- title, head
- replaceChild

# Click

- Open Modal
- Tab
- Password toggle
- Accordion
- Dropdown
- Pagination
- Slider
- CRUD Todo List

# Form

- Form validation
- Autocomplete search
- Get form values
- OTP

## window document

- Progressbar
- Add attribute to link

## Mouse

- Animate bg
- Tooltip

## Others

- setTimeout
- setInterval
- Date
- Intersection Observer

# Asynchronous

- Callback hell
- Promise: all, allSettled, race,
- Asynchronous
- API
- Cors
- fetch
- axios
- status code
- try-catch-finally

# Thực hành API

# Tricky concepts

- _this_
- _prototype_
- _recursion_
- _call stack_
- _event loop_
- call, apply, bind
- Map
- Set
- Generator function
- Class
- Regex

# Interview
