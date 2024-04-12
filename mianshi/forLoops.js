
const files = ["foo.txt  ", " .bar ", "baz.foo", "   "]

// function forLoop() {
//     const result = [];
//     for (file of files) {
//         const fileName = file.trim()
//         if (fileName) {
//             const filePath = `~/cool_app/${fileName}`
//             result.push(filePath)
//         }
//     }
//     console.log(result)
//     return result
// }
// forLoop()

function reduceway() {
    const filePaths = files.reduce((result, file) => {
        const fileName = file.trim()
        if (fileName) {
            const filePath = `~/cool_app/${fileName}`
            result.push(filePath)
        }
        return result
    }, [])
}
reduceway()


function chain() {
    const filePaths = files.map((f) => f.trim())
        .filter(Boolean)
        .map(fileName => `~/cool_app/${fileName}`)
    console.log(filePaths)
}

// for of   reduce   链式编程