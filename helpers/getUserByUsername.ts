
import IGetUserByEmail from '@/ui/interface/IGetUserByEmail'

const getUserByEmail: IGetUserByEmail = (users, email) =>
  users.find((user) => user.email === email)

export default getUserByEmail
