const student = {
    name: 'rj kebria',
    id: 101,
    money: 5000,
    major: 'mathematics',
    isRich: false,
    subjects: ['english', 'economics', 'math 101', 'calculus'],
    bestFriend: {
        name: 'kundu',
        major: 'mathematics'
    },
    takeExam: function () {
        console.log(this.name, 'taking exam')
    },
    treatDe: function (expense, bokshis) {
        this.money = this.money - expense - bokshis
        return this.money
    }
}
student.takeExam()
const remaining1 = student.treatDe(900, 100)
const remaining2 = student.treatDe(500, 50)
console.log(remaining2)