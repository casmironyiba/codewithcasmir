import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/firebaseConfig'
import  IUser  from '@/ui/interface/IUser'

const getUsers = async (): Promise<IUser[]> => {
  try {
    const usersCollectionRef = collection(db, 'users')
    const usersSnapshot = await getDocs(usersCollectionRef)

    // const users: IUser[] = usersSnapshot.docs.map((doc) => {
    //   const data = doc.data()
    //   return {
    //     id: doc.id,
    //     name: data.name || '', // Fallback values if necessary
    //     email: data.email || '',
    //     username: data.username || '',
    //     role: data.role || '',
    //   } as IUser
    // })
    const users: IUser[] = usersSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as IUser[]

    return users
  } catch (error) {
    console.error('Error fetching users from Firestore:', error)
    throw error
  }
}
export default getUsers;
