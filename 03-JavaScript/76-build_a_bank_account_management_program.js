class BankAccount {

    constructor(balance = 0, transactions = []) {
        this.balance = balance;
        this.transactions = transactions; // transaction obj { type: "deposit" OR "withdraw", amount: number}
    }

    deposit(dollars) {
        if (typeof dollars !== "number" && !(dollars instanceof Number)) {
            return "Input is not a number";
        }
        if (dollars > 0) {
            this.transactions.push({ type: "deposit", amount: dollars });
            this.balance += dollars;
            return `Successfully deposited $${dollars}. New balance: $${this.balance}`;
        } else {
            return "Deposit amount must be greater than zero.";
        }
    }

    withdraw(dollars) {
        if (typeof dollars !== "number" && !(dollars instanceof Number)) {
            return "Input is not a number";
        }
        if (dollars > this.balance || dollars <= 0) {
            return "Insufficient balance or invalid amount.";
        } else {
            this.balance -= dollars;
            this.transactions.push({ type: "withdraw", amount: dollars });
            return `Successfully withdrew $${dollars}. New balance: $${this.balance}`;
        }
    }

    checkBalance() {
        return `Current balance: $${this.balance}`;
    }

    listAllDeposits() {
        let returnString = "Deposits: ";
        const arr = this.transactions.filter((transaction) => transaction.type === "deposit")
            .map((transaction) => `${transaction.amount}`);
        returnString += arr.join(",");
        return returnString;
    }

    listAllWithdrawals() {
        let returnString = "Withdrawals: ";
        const arr = this.transactions.filter((transaction) => transaction.type === "withdraw")
            .map((transaction) => `${transaction.amount}`);
        returnString += arr.join(",");
        return returnString;
    }

}

const myAccount = new BankAccount();
myAccount.deposit(100);
console.log(myAccount.checkBalance());
myAccount.deposit(200);
console.log(myAccount.checkBalance());
myAccount.deposit(700);
console.log(myAccount.checkBalance());
myAccount.withdraw(150);
console.log(myAccount.checkBalance());
myAccount.withdraw(225);
console.log(myAccount.checkBalance());

console.log(myAccount.listAllDeposits());
console.log(myAccount.listAllWithdrawals());