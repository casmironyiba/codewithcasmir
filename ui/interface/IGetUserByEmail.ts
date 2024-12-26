import IUser from './IUser'

export default interface IGetUserByEmail {
  (users:IUser[],email: string): IUser | undefined
}
// type IGetUserByEmail = (email: string) => Promise<IUser | undefined>;
