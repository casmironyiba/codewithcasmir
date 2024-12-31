
import IUser from './IUser'

export default interface IGetUserByEmail {
  (users: IUser [], username: string): IUser | undefined
}
