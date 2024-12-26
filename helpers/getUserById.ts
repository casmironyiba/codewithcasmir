import IGetUserById from '@/ui/interface/IGetUserById'

const getUserById: IGetUserById = (users, id) => users.find((user) => user.id === id)

export default getUserById
