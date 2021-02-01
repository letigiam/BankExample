
export class Account{
    constructor(private name: string, private surname:string, private money: number = 0){}

    
    //aggiunge soldi
    sendMoney=(howMoney:number, accountSendMoney:Account)=>{
        this.money-=howMoney;
        accountSendMoney.money += howMoney;
    }
    toString(){
        return `${this.name} ${this.surname} ${this.money}€`;
    }
}