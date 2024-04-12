function debounce(fn,wait){
  let timer = null
  console.log(arguments)
  return () => {
  timer = setTimeout(() => {
    console.log(arguments)
        fn.apply(this, arguments)
     },wait);
  }

}
const fn1 = () => {
  console.log("fn1被成功执行")
}

console.log(debounce(fn1,3000))