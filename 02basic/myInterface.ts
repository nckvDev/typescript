interface User {
   readonly dbId: number
   email: string
   userId: number
   googleID?: string
   //    startTrail: () => string
   startTrail(): string
   getCoupon(couponname: string, value: number): number
}

interface User {
   githubToken: string
}

interface Admin extends User {
   role: 'admin' | 'ta' | 'learner'
}

const nckv: Admin = {
   dbId: 22,
   role: 'admin',
   githubToken: 'github',
   email: 'nckv@dev.com',
   userId: 2323,
   startTrail: () => {
      return 'trail started'
   },
   getCoupon: (name: 'nckv12', off: 2) => {
      return 12
   },
}
nckv.email = 'h@h.com'
// nckv.dbId = 11
