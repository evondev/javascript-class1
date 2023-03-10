// 1. Convert string to dash string
const str = "I love to learn Javascript";
// expected: "i-love-to-learn-javascript"
// 2. Truncate string to 30 characters with ...
const longStr = `Write a JavaScript function to split a string and convert it into an array of words`;
// expected: Write a JavaScript function to ...
// 3.
const newStr = `javascript is awesome`;
// expected: Javascript is awesome
// 4.
const lastStr = "evondev is awesome";
// expected: awesome is evondev
// 5. Explain these code with your experience with TDZ and hoisting
{
  let teacher = "evondev";
  const teacherLesson = function () {
    console.log(teacher);
    const teacher = "tran anh tuan";
  };
  teacherLesson();
}
