// console.log(this);
const kebria = {
    name: 'rj kebria',
    id: 101,
    money: 5000,
    treatDeArrow: () => {
        console.log(this)
    },
    treatDeInside: function () {
        const myArrow = () => console.log(this)
        myArrow()
    },
    treatDe: function (expense) {
        this.money = this.money - expense
        console.log(this)
        return this.money
    }
}
const heroBalam = {
    id: 102,
    money: 6000,
    name: 'hero balam'

}
function add() {
    console.log(this)
}

