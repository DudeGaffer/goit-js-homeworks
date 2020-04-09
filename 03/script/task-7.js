'use strict';

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  balance: 0,
  transactions: [],

  createTransaction(amount, type) {
    const newTransaction = {
      id: this.transactions.length + 1,
      amount,
      type,
    };
    return newTransaction;
  },

  deposit(amount) {
    this.balance += amount;
    this.transactions = [
      ...this.transactions,
      this.createTransaction(amount, 'deposit'),
    ];
  },

  withdraw(amount) {
    if (this.balance < amount) {
      console.log('Снятие такой суммы не возможно, недостаточно средств.');
    } else {
      this.balance -= amount;
      this.transactions.push(this.createTransaction(amount, 'withdraw'));
    }
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    for (const detail of this.transactions) {
      if (detail.id === id) {
        return detail;
      }
    }
    return 'id не верен.';
  },

  getTransactionTotal(type) {
    let totalAmount = 0;
    for (const i of this.transactions) {
      if (i.type === type) {
        totalAmount += i.amount;
      }
    }
    return totalAmount;
  },
};

account.deposit(200);
account.deposit(40);
console.log(account.balance);
account.withdraw(3000);
account.deposit(500);
account.withdraw(240);
account.deposit(4000);
account.withdraw(300);

console.log(account.getBalance());

console.log(account.transactions);

console.log(account.getTransactionDetails(4));
console.log(account.getTransactionDetails(41));
console.log(account.getTransactionDetails(2));

console.log(account.getTransactionTotal('deposit'));
console.log(account.getTransactionTotal('withdraw'));
