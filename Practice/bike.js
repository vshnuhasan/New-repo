class Bike{
    constructor(Cname , year){
        this.Cname = Cname
        this.year = year
    }
    get age(){
        let date = new Date()
        return `My ${this.Cname}'s age is ${date.getFullYear() - this.year}`
    }
    color(colour){
        return `my ${this.Cname}'s color is ${colour} `
    }
}
module.exports = Bike
