import {collection, getDocs} from "firebase/firestore"
import {db} from "./firebaseConfig"

export default async function getData(url: string) {
  try {

    const usersCollection = collection(db, 'users')
    const usersSnapshot = await getDocs(usersCollection)

    const users = usersSnapshot.docs.map((doc)=>({
      id:doc.id,
      ...doc.data()
    }));
    return  users

  } catch (error) {
    console.log(error)
  }
};
