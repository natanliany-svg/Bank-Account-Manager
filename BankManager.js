import { create_customer } from './Bank_Factory.js';
`
קובץ לביצוע פעולות עסקיות (ניהול הלקוחות)
`

const customers = []


export const bank_manager = 
{
  add_customer(name, id, type, balance)
  {
    const customer = create_customer(name, id, type, balance)
    customers.push(customer)
    return customer 
  },
  get_next_id()
  {
    if (customers.length === 0) return 100
    const ids = customers.map(c => parse_int(c.id)).filter(id => !isNaN(id))
    
  }
}




















// const email = questionEMail("what is your email")
// console.log(email)


