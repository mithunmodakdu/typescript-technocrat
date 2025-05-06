{
  // :::: 3-5: Access modifiers ::::

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

    public addDeposit(amount : number){
      this._balance = this._balance + amount;
    }
    public getBalance(){
      return this._balance;
    }
  }

  const poorAccount = new BankAccount(123, 'Mithun Savings', 20);
  
  // we can change the value
  // poorAccount.id = 205;
  // poorAccount.name = 'jjjjjjj';
  // poorAccount.balance = 0;
 
  //  if we use readoly we can not change the value. we can use readonly in case of id beacause it is fixed. But we should not use readlony in case of balance because it may increase or decrease. 
  // if we use private keyword instead of public keyword if will solve the problem. According to convention of using private we should use underscore
  // Property 'balance' is private and only accessible within class 'BankAccount'. we can use function to add or change balance within class 'BankAccount'

  // if we create child class, we will not get _balance as we have used private. To get  the _balance property we can use protected keyword

  class StudentAccount extends BankAccount{
    test(){
      this._balance
    }
  }

  poorAccount.addDeposit(100);
  const myBalance = poorAccount.getBalance();
  console.log(myBalance)
  












  // 
}