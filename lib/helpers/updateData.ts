import getData from './getData';

const updateData = (async (setData:React.Dispatch<React.SetStateAction<any>>) => {
  const fetchUsers = await getData('users')
  setData(fetchUsers)
}) 

export default updateData
