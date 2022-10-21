const nums =[1,2,3,4,5,6,7,8];

const part = nums.slice(2,5);
console.log(part);
console.log(nums);

// const removed = nums.splice(2,5);
const removed = nums.splice(2,3, 34,56,76);
console.log(removed);
console.log(nums);

//splice(index-number,how-many-elements-you-want-to-remove, elemnts-you-want-to-inject-in-removed-elements-place )
// splice change the main array too

const together = nums.join(" hi ");
console.log(together);