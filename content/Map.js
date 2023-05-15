// hash table
const map = new Map();
const keyArr = [1, 2, 3];
map.set(keyArr, "evondev");
map.set("age", 30);
console.log(map.get(keyArr));
console.log(map.has("age"));
console.log(map.delete(keyArr));
console.log("map:", map);
console.log(map.size);
// const obj = {
//   name: "evondev",
//   [1,2,3]: "abc",
// };
// console.log("obj:", obj);
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// const twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     const first = nums[i];
//     for (let j = i + 1; j < nums.length; j++) {
//       const second = nums[j];
//       if (first + second === target) {
//         console.log(i, j);
//         return [i, j];
//       }
//     }
//   }
// };
const twoSum = function (nums, target) {
  const hash_table = new Map();
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    const needed_value = target - element;
    if (hash_table.has(needed_value)) {
      const foundIndex = hash_table.get(needed_value);
      return [foundIndex, index];
    } else {
      hash_table.set(element, index);
    }
  }
};
// {2: 0; 7: 1; 11: 2}
console.log(twoSum([2, 7, 11, 15], 18));
// 18 - 2 = 16
// 18 - 7 = 11
// 18 - 11 = 7
// 18 - 15 = 3
