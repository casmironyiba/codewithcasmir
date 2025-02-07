import { getAuth, updateProfile } from "firebase/auth";
import {FC} from "react";

interface Props {
  (
  photoURL:string,
  displayName:string,
  dob:string,
  country:string,
  residentials:string
  ) :void
};

const updateUserProfile:Props = (photoURL,displayName,dob,country,residentials) => {
  const auth: any = getAuth();
  updateProfile(auth.currentUser, {
    displayName,
    photoURL,
    dob,
    country,
    residentials

  }).then(() => {
    // Profile updated!
    console.log('profile updated')
    // ...
  }).catch((error) => {
    // An error occurred
    console.log('An error occured')
    // ...
  });
}

export default updateUserProfile
