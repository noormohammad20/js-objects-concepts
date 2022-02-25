const first = { a: 1, b: 2 }
const second = { a: 1, b: 2 }
const third = first

if (first === third) {
    // console.log('objects are equal')
}
else {
    // console.log('objects are not equal')
}
console.log(JSON.stringify(first))
console.log(JSON.stringify(second))
const first2 = { a: 1, b: 2 }
const second2 = { b: 2, a: 1 }

if (JSON.stringify(first2) === JSON.stringify(second2)) {
    console.log('object are equal')
}

function compareObjects(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false
    }
    for (const property in obj1) {
        if (obj1[property] !== obj2[property]) {
            return false
        }

    }
    return true
}
const isEqual = compareObjects(first2, second2)
console.log(isEqual)

