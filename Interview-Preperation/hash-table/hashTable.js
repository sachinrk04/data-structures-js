function hashStringToInt(s, tableSize) {
    let hash = 17;

    for (let i = 0; i < s.length; i++) {
        hash = (13 * hash * s.charCodeAt(i)) % tableSize
    }

    return hash;
}

console.log('ben'.charCodeAt(0))

class HashTable {
    table = new Array(100);

    setItem = (key, value) => {
        const idx = hashStringToInt(key, this.table.length);
        this.table[idx] = value;
    };

    getItem = key => {
        const idx = hashStringToInt(key, this.table.length)
        return this.table[idx]
    };
}

const myTable = new HashTable();
myTable.setItem("firstName", "bob");
myTable.getItem("firstName");
myTable.setItem("lastName", "tim");
// console.log(myTable);