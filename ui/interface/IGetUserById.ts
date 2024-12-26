import IUser from './IUser'

export default interface IGetUserById {
  (users: IUser[], id: string): IUser | undefined
}
