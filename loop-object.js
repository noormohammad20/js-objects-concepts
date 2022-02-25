const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleaned: true
}
/*  
// 3 types loop 
for(let i=0; i<10; i++){}
for(const number of numbers){} //array
for (const property in student){} //object

*/
for (const property in bottle) {
    // console.log(property, bottle[property])
}

const keys = Object.keys(bottle)
// console.log(keys)
for (const prop of keys) {
    // console.log(prop, bottle[prop])
}

//advanced

for (const [key, value] of Object.entries(bottle)) {
    console.log(key, value)
}

//
// const arr = ['color', 'jeans', 'top']
// arr[2]