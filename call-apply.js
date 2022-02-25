const kebria = {
    name: 'rj kebria',
    id: 101,
    money: 5000,

    treatDe: function (expense, bokshis, tax) {
        this.money = this.money - expense - bokshis - tax
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
//call
// kebria.treatDe.call(heroBalam, 500, 100, 10)
// kebria.treatDe.call(heroBalam, 300, 50, 20)

//apply
kebria.treatDe.apply(heroBalam, [500, 30, 10])
kebria.treatDe.apply(heroBalam, [1000, 300, 100])
kebria.treatDe.apply(normalGolam, [300, 40, 10])
