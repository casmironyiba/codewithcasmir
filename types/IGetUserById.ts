import IUser from './IUser'

export default interface IGetUserById {
  (users: IUser[] | undefined, id: string): IUser | undefined
}
