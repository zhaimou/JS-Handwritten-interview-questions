function reverse(s) {
  let l = -1;
  let r = s.length;
  while (++l < --r) {
    let temp = s[l];
    s[l] = s[r];
    s[r] = temp;
  }
  return s;
}
let s = "zhaimou";
let arr = s.split("");
let reversedArr = reverse(arr);
let res = reversedArr.join("");
console.log(res); // 输出: "ouziama"
