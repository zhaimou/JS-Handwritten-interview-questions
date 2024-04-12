//  JS 编程技巧 通过给定的选择器来获取对象中的值
const obj = {
    selector: { to: { val: "val to select" } },
    user: { name: "xiaohong" },
    target: [1, 2, { a: "test" }],
}

function get(from, ...selectors) {

    const r = selectors.map((selector) => {
        return selector
            //  重点 把target[0] 用正则转换成target.0,
            // 这样就能按.继续切分
            .replace(/\[(\w+)\]/g, ".$1")
            .split(".")
            .reduce((prev, cur) => {
                // prev ==> obj
                // cur ==> selector
                return prev && prev[cur]
            }, from)
    })

    console.log(r)
}


get(obj, "selector.to.val", "user.name")