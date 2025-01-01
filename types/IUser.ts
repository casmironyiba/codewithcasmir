import { Timestamp } from "@firebase/firestore"

export default interface IUser {
  id: string
  name: string
  email: string
  username: string
  registrationDate:string
  coursesEnrolled:any[]
  courseProgress:any
  lastLogin:string
  role:string
  subscriptions:any;
  password: string
  profilePicture:string
  feedback:string
  isVerfied: boolean
  verifyToken: string
  verifyTokenExpiry: string
  createdAt:Timestamp |Date|null;
}
