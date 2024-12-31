import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/libs/firebaseConfig'
import  IUser  from '@/types/IUser'

const getUsers = async (): Promise<IUser[]> => {
  try {
    const usersCollectionRef = collection(db, 'users')
    const usersSnapshot = await getDocs(usersCollectionRef)

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
