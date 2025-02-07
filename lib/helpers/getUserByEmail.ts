import IGetUserByEmail from '@/ui/interface/IGetUserByEmail'
import getUsers from './getUsers'

const getUserByEmail: IGetUserByEmail = (users, email) => users.find((user) => user.email === email)

export default getUserByEmail
