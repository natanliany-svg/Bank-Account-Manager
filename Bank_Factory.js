
// import rl from readline - sync


// const details =  function structure()
// {
//   const the_details =
//   {
//     id : Number,
//     fullName: "",
//     accountType : "Regular" || "Premium" || "Student",
//     balance: Number,
//     isActive : true
//   }
//   return the_details


// }

export function create_account(type , initial_balance)
{
  let balance = initial_balance

  let is_active = true

  return {
    deposit(amount)
    {
      if (!is_active)
      {
        console.log("חשבון סגור")
        return
      }
      if (amount > 0) balance += amount
    },
    withdraw(amount)
    {
      if (!is_active)
      {
        console.log("חשבון סגור")
        return
      }
      if (amount > 0 && amount < balance)
      {
        balance -= amount
      }
      else
      {
        console.log("לא נשארה יתרה")
      }
    },
    get_balance() { return balance },
    get_type() { return type },
    close_account() { return is_active = false },

    get_is_active() {return is_active}
  }
}


export function create_customer(name, id, account_type, initial_balance)
{
  return {
    name,
    id,
    account : create_account(account_type, initial_balance)
  }
}


























