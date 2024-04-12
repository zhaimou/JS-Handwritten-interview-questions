const url = `https://juejin.cn/post/7221048707239444540?searchId=202403080845529B31397BAAA60BED336A`;
const url1 = `https://search.bilibili.com/all?vt=59221047&keyword=a`;
const url2 = `https://search.bilibili.com/all?keyword=%E8%BF%99%E6%98%AF%E4%B8%AD%E6%96%87`;
function getUrl(url) {
  const decodeUrl = decodeURIComponent(url);
  const index = url.indexOf("?");
  let Url = decodeUrl.slice(index + 1);
  const obj = {};
  Url.split("&").map((item) => {
    let key = item.split("=")[0];
    let value = item.split("=")[1];
    obj[key] = value;
    // return res1;
  });
  return obj;
}

console.log(getUrl(url));
console.log(getUrl(url1));
console.log(getUrl(url2));
// { searchId: '202403080845529B31397BAAA60BED336A' }
// { vt: '59221047', keyword: 'a' }
// { keyword: '这是中文' }
