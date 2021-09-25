import { Session } from 'express-session'

declare module 'express-session' {
  interface Session {
    userInfo: any
    status: any
  }
}
// declare namespace Express {
//   interface Session {
//     userInfo : {

//     }// 不要用 any.
//   }
// }

// interface IUser {
//   username: string
//   id: number
//   email: string
// }
