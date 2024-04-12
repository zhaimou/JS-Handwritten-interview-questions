const data = [
    {
        id: 1,
        pid: 0,
        text: 'zhaimouzhenshuai',
        path: '/login'
    },
    {
        id: 2,
        pid: 3,
        text: 'zhaimouzhenshuai',
        path: '/login'
    }, {
        id: 3,
        pid: 4,
        text: 'zhaimouzhenshuai',
        path: '/login'
    }, {
        id: 4,
        pid: 0,
        text: 'zhaimouzhenshuai',
        path: '/login'
    }, {
        id: 5,
        pid: 3,
        text: 'zhaimouzhenshuai',
        path: '/login'
    }, {
        id: 6,
        pid: 2,
        text: 'zhaimouzhenshuai',
        path: '/login'
    }, {
        id: 7,
        pid: 4,
        text: 'zhaimouzhenshuai',
        path: '/login'
    },
]
// 由简到难 
// 逐步思想
// 先完成顶级与子级的任务
function fromTreeData(data) {
    // 先把顶级与子级分离出来
    let parents = data.filter(p => p.pid === 0)
    let children = data.filter(c => c.pid !== 0)
    // console.log(parents, children)
    dataToTree(parents, children)
    function dataToTree(parents, children) {
        parents.map((p) => {
            children.map((c, i) => {
                // 递归解决
                if (c.pid === p.id) {
                    const _children = JSON.parse(JSON.stringify(children))
                    // 不要直接操作children数组 使用深拷贝 
                    // 删子级为父母级的数据 
                    _children.splice(i, 1)
                    // 递归解决
                    dataToTree([c], _children)
                    if (p.children) {
                        p.children.push(c)
                    } else {
                        p.children = [c]
                    }
                }

            })
        })
    }
}
fromTreeData(data)
