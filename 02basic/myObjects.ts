// const User = {
//    name: 'nckv',
//    email: 'nckv@dev.com',
//    isActive: true,
// }

// function createUser({ name: string, isPaid: boolean }) {}

// let newUser = { name: 'nckv', isPaid: false, email: 'h@h.com' }

// createUser(newUser)

// function createCourse(): { name: string; price: number } {
//    return { name: 'reactjs', price: 259 }
// }

// Type Aliases

// type User = {
//    name: string
//    email: string
//    isActive: boolean
// }

// type Mystring = string

// function createUser(user: User): User {
//    return { name: '', email: '', isActive: true }
// }

// createUser({ name: '', email: '', isActive: true })

type User = {
   readonly _id: string
   name: string
   email: string
   isActive: boolean
   credcardDetails?: number
}

function createUser(u: User) {}

let myUser: User = {
   _id: '12345',
   name: 'h',
   email: 'h@h.com',
   isActive: false,
}

type cardNumber = {
   cardnumber: string
}

type cardDate = {
   carddate: string
}

type cardDetails = cardNumber &
   cardDate & {
      cvv: number
   }

myUser.email = 'h@gmail.com'
// myUser._id = "123"

export {}
