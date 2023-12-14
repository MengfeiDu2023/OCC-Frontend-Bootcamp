// console.log("I am connected"); //Just to test if it is connected
//Create a Class
//Encapsulation

class BankAccount {
    constructor(accountNumber,balance){
        this.accountNumber = accountNumber;
        this.balance=balance;//placing an initial value
    }//once used, not using it any more

    deposit(amount){
        this.balance += amount;
    }

    withdraw(amount){//can use the same name
        if(amount <= this.balance){
            this.balance -= amount;
        }
    }

    getAccountInfo(){
        return `Account number: ${this.accountNumber},Balance: ${this.balance}`;
    }
}

const MyAccount = new BankAccount("123456789",1000);
MyAccount.deposit(500);
MyAccount.withdraw(200);
console.log(MyAccount.getAccountInfo());

const ninaAccount = new BankAccount("987654321",1000000);
MyAccount.deposit(500);
MyAccount.withdraw(200);
console.log(MyAccount.getAccountInfo());

