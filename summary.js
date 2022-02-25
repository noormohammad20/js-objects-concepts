const pen = {
    brand: 'econo',
    price: 10,
    writePoem: function (food) {
        console.log(food)
    }
}

const keys = Object.keys(pen)
const values = Object.values(pen)

for (const key in pen) {
    console.log(pen[key])
}
const a = { a=1 }
const b = { b=1 }
const c = a
if (a === b) {

}

//optional
const aBinded = pen.writePoem.bind(a)
aBinded()

//this
const obj = { a: 1, b: 7, c: 3, length: 2 }
console.log(Object.keys(obj).length)