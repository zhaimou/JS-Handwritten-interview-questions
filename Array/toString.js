const number = 12345.6789;
console.log(number.toLocaleString()); // 根据环境输出：12,345.679 或 12.345,679
console.log(number.toString()); //12345.6789

const date = new Date();
console.log(date.toLocaleString()); // 根据环境输出：1/13/2024, 2:25:46 PM 或 2024/1/13 下午2:25:46
console.log(date.toString()); //Sun Jan 14 2024 00:15:24 GMT+0800 (中国标准时间)
const currency = 12345.67;
console.log(
  currency.toLocaleString("en-US", { style: "currency", currency: "USD" })
); // 输出：$12,345.67

console.log(currency.toString()); //12345.67
const percent = 0.75;
console.log(percent.toLocaleString("en-US", { style: "percent" })); // 输出：75%
console.log(percent.toString()); // 输出：0.75
