import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function getCurrentUser() {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user)
      return user
    } else {
      console.log('no current user ')
      return null
      // ...
    }
  });
}
