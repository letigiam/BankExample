
export class Account{
    constructor(private name: string, private surname:string, private money: number = 0){}

    //prende soldi
    takeMoney(howMany:number) {this.money -= howMany;}
    //aggiunge soldi
    sendMoney=(howMoney:number)=>{this.money+=howMoney;}
    toString(){
        return `${this.name} ${this.surname} ${this.money}€`;
    }
}
