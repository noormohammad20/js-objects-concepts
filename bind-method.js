const kebria = {
    name: 'rj kebria',
    id: 101,
    money: 5000,

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

const normalGolam = {
    id: 103,
    money: 3000,
    name: 'normal golam'

}
kebria.treatDe(100)
kebria.treatDe(500)
const heroTreat = kebria.treatDe.bind(heroBalam)
heroTreat(500)
heroTreat(200)
heroTreat(300)
const golamTreat = kebria.treatDe.bind(normalGolam)
golamTreat(200)