import IGetUserById from '@/types/IGetUserById'

const getUserById: IGetUserById = async (users, id) => users.find((user: any) => user.id === id)

export default getUserById;
