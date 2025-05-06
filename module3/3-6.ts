{
  // :::: 3-6: Getter and setter ::::

  class BankAccount {
    public readonly id: number;
    public name: string;
    // private _balance: number;
    protected _balance: number;

    constructor(id:number, name:string, _balance:number){
      this.id = id;
      this.name = name;
      this._balance = _balance;
    }

    // for adding balance we have used addDeposit() function which have to be called. 
    // public addDeposit(amount : number){
    //   this._balance = this._balance + amount;
    // }

    // set : we can use set where we can use it like a property but it will work as a function
    set deposit(amount:number){
      this._balance = this._balance + amount
    }

    // for getting balance we have used getBalance() function which have to be called. 
    // public getBalance(){
    //   return this._balance;
    // }

    // get : we can use get where we can use it like a property but it will work as a function
    get balance(){
      return this._balance;
    }
  }

  const poorAccount = new BankAccount(123, 'Mithun Savings', 20);


  // poorAccount.addDeposit(300);
  poorAccount.deposit = 500;

  // const myBalance = poorAccount.getBalance();
  const myBalance = poorAccount.balance;
  console.log(myBalance)
  












  // 
} 