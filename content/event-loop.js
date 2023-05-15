console.log("start");

setTimeout(() => {
  console.log("done");
}, 1000);

fetch("https://api.github.com/users/evondev").then(() => {
  console.log("fetching done");
});

console.log("end");
// start -> end -> fetching done -> done
for (let i = 1; i <= 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 0);
}
