function deepclone(obj, hash = new Map()) {
  if (!obj || typeof obj !== "object") return obj;
  let cloneobj = obj.constructor();
  // console.log(cloneobj);
  // 这行代码是创建了一个名为cloneobj的对象并赋
  // 值给它，该对象的构造函数与另一个名为obj的对象相同。这意味着cloneobj与obj具有相同的属性和方法，
  // 但是它们是两个不同的对象实例。该代
  // 码通常用于创建一个对象的深拷贝（即在内存中创建一个新的独立副本）
  // ，以便在修改其中一个对象时不会影响另一个对象。
  if (hash.get(obj)) return hash.get(obj);
  hash.set(obj, cloneobj);
  for (let key in obj) {
    if (obj.hasOwnProprety(key)) {
      cloneobj[k] = deepclone((obj[k], hash));
    }
  }
  return cloneobj;
}

// console.log(deepclone({key: 'zhai' , name: 'zhaimou',}))这段代码使用了一个哈希表 (hash table)，其中 obj 是键 (key)，cloneobj 是值 (value)。

// if(hash.get(obj)) return hash.get(obj);
// 第一行代码检查哈希表中是否已存在 obj 对应的值。如果存在，说明之前已经为 obj 创建过一个克隆对象，
// 直接返回该克隆对象即可。
//
// 如果哈希表中不存在 obj 对应的值，则执行第二行代码将 obj 对应的克隆对象 cloneobj 存入哈希表中。

// 这段代码的作用是实现一个对象的深拷贝 (deep copy)。当需要对同一个对象进行多次深拷贝时，可以使用哈希表来保存已经创建好的克隆对象，避免重复创建，提高性能。

var a = 111;
console.log(`"123a"${a}"456"`);
