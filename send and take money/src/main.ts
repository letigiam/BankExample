import {Account} from './Account';

const account = new Account("Gino", "Strada", 10000);
const account1 = new Account("Tizio", "Inventato", 45000);
const account2 = new Account("Mario", "Biondi");

console.log("Total Balance Before Transaction:")
console.log(account.toString());
console.log(account1.toString());
console.log(account2.toString());
console.log("Total Balance After Transaction:")
account2.sendMoney(350);
account1.takeMoney(700);
console.log(account.toString());
console.log(account1.toString());
console.log(account2.toString());