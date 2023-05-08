// 1. this
{
  function myName() {
    console.log(this);
  }
  myName();
  const student = {
    name: "evondev",
    sayHi() {
      console.log(`My name is ${this.name}`);
    },
  };
  student.sayHi();
  const button = document.querySelector("button");
  button &&
    button.addEventListener("click", function () {
      console.log(this);
    });
}
// 2. call, apply, bind
{
  const book = {
    bookName: "Harry Potter",
    author: "J. K. Rowling",
    showBookInformation(number, school) {
      console.log(
        `The book ${this.bookName} belong to ${this.author}. And this ${this.bookName} book has ${number} chapter. All students study at ${school}`
      );
    },
  };
  function showBookInformation(number, school) {
    console.log(
      `The book ${this.bookName} belong to ${this.author}. And this ${this.bookName} book has ${number} chapter. All students study at ${school}`
    );
  }
  showBookInformation.call(book, 7, "Howwards");
  showBookInformation.apply(book, [7, "Howwards"]);

  const numbers = [1, 3, 4, 5, 6, 7, 8];
  const min = Math.min.call(null, ...numbers);
  const max = Math.max.apply(null, numbers);
  console.log("min:", min);
  console.log("max:", max);

  const bookInfo = book.showBookInformation.bind({});
  bookInfo(7, "Howwards");

  function logMessage(type, level, message) {
    return `${type} - ${level}: ${message}`;
  }
  const logErrorToday = logMessage.bind(null, "Error", "Today");
  console.log("logErrorToday:", logErrorToday("System Error"));
}
// 3. Regex
{
  function isValidEmail(email) {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (regex.test(email)) return true;
    return false;
  }
  console.log(isValidEmail("evondev@gmail.com"));
  const content = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste a nulla fugiat similique optio, minus, magni consequuntur sed dolor quas tempore quam, praesentium facilis doloem neque excepturi pariatur quae provident.`;
  const newContent = content.replace(/dolor?/gim, "evondev");
  console.log("newContent:", newContent);
}
// 4. class
{
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    get personName() {
      return this.name;
    }
    set personName(name) {
      this.name = name;
    }
    information() {
      return `Hello my name is ${this.name}`;
    }
  }
  class Student extends Person {
    constructor(name) {
      super(name);
      this.name = name;
    }
    greeting() {
      console.log(super.information());
      console.log("Hello from Student");
    }
  }

  const john = new Person("John", 30);
  console.log(john.personName);
  john.personName = "Evondev";
  console.log(john.personName);

  const evondev = new Student("Do Duong");
  evondev.greeting();
}
// 5. Recursion
{
  // 5.1 Countdown: 5 -> 5,4,3,2,1
  function countdown(n) {
    let count = n - 1;
    if (count <= 0) return;
    console.log(count);
    countdown(count);
  }
  console.log(countdown(11));
  // 5.2 Factorial -> 3! -> 3*2*1
  function factorial(number) {
    if (number === 0) {
      return 1;
    }
    return number * factorial(number - 1);
  }
  console.log(factorial(5));
  // 5.3 Flatten array -> [[1,2],[3,4]] -> [1,2,3,4]
  function flattenArray(arr) {
    return arr.reduce((a, b) => {
      return a.concat(Array.isArray(b) ? flattenArray(b) : b);
    }, []);
  }
  console.log(
    flattenArray([
      [1, 2],
      [3, 4],
    ])
  );
}
