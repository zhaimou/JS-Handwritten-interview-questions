const obj = {
  a: null,
  b: false,
  c: 0,
  d: "",
  e: 1,
  f: true,
  g: "a",
};
function compactObject(val) {
  const data = Array.isArray(val) ? val.filter(Boolean) : val;
  return Object.keys(data).reduce(
    (acc, key) => {
      // acc => obj
      // key => data.keys
      const value = data[key];
      if (value) {
        acc[key] = typeof value === "object" ? compactObject(value) : value;
      }
      return acc;
    },
    Array.isArray(data) ? [] : {}
  );
}

console.log(compactObject(obj));
