class BankAccount {
    #balance;
    constructor(accountHolder, initialbalance){
        this.accountHolder = accountHolder;
        this.#balance = initialbalance;
    }
    deposit(amount){
        if(amount > 0) this.#balance +=amount;
    }
    withdraw(amount){
        if(amount > 0 && amount <=this.#balance) this.#balance -=amount;
    }
    getBalance(){
        return this.#balance;
    }chota
}

const bank = new BankAccount("shri",1000);

bank.deposit(1000);
bank.withdraw(500);

console.log(bank.getBalance());