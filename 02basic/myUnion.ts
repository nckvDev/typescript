let score: number | string = 22

score = 44
score = '55'

type User = {
   name: string
   id: number
}

type Admin = {
   username: string
   id: number
}

let nckv: User | Admin = { name: 'nckv', id: 332 }

nckv = { username: 'nc', id: 323 }

getDBId(3)
getDBId('3')

function getDBId(id: number | string) {
   if (typeof id === 'string') {
      id.toLowerCase()
   }
}

// Array

const data: number[] = [1, 2, 3]
const data2: string[] = ['1', '2', '3']
const data3: (string | number | boolean)[] = ['1', '2', 3, true]
const data4: any[] = ['1', '2', 3, true]

let seatAllotment: 'aisle' | 'middle' | 'window'

seatAllotment = 'aisle'
// seatAllotment = 'crew'

export {}
