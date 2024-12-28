import React, { FC, useEffect, useState } from 'react'
import styles from './userCredentials.module.scss'
import IUser from '@/ui/interface/IUser'
import Select from '@/ui/components/select/Select';
import formatTimestamp from '../FormatTimeStamps';
import CountrySelect from '../countrySelect/CountrySelect';
import countries from '../countries/countries';
import getCurrentUser from '@/helpers/getCurrentUser';
import updateUserProfile from '@/helpers/updateUserProfile';
import Image from 'next/image'
interface Props {
  user: IUser | undefined;
};


// import styles from './profileImage.module.scss'
import { ImageSharp } from '@mui/icons-material';
import { auth } from '@/firebaseConfig';
import { onAuthStateChanged, updateProfile, User } from 'firebase/auth';


const UserCredentials: FC<Props> = () => {
  const [dob, setDob] = useState<Date | any>(undefined)
  const [country, setCountry] = useState<string>('')
  const [residentials, setResidentials] = useState<string>('')
  const [userImg, setUserImg] = useState<any>({});
  const [user, setUser] = useState<any>();
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  // const [photoURL, setPhotoURL] = useState<any>('');
  const options = [
    { value: 'admin', label: 'admin' },
    { value: 'instructor', label: 'instructor' },
    { value: 'student', label: 'student' }
  ]
  console.log(userImg)
  console.log(user)

  // const handleSubmit = () => {
  //   updateUserProfile(photoURL, user?.username, dob, country, residentials)
  // }
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const storageRef = firebase.storage().ref();
      const fileRef = storageRef.child(`profile_pictures/${file.name}`);

      setLoading(true);

      try {
        // Upload the image to Firebase Storage
        const snapshot = await fileRef.put(file);
        const downloadURL = await snapshot.ref.getDownloadURL();

        // Update Firebase Authentication with the new photoURL
        if (user) {
          await user.updateProfile({
            photoURL: downloadURL,
          });

          // Set the URL to display the image
          setImageUrl(downloadURL);
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      } finally {
        setLoading(false);
      }
    }
  };
  useEffect(() => {
    const currentUser = getCurrentUser();
    console.log(currentUser)
    setUser(currentUser)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.section1}>
        <h3>Edit Profile</h3>
      </div>

      <form className={styles.form}>
        <div className={styles.layout1}>
          <div>
            {user ? (
              <>
                <img
                  src={user.photoURL || "/default-avatar.png"}
                  alt="Profile"
                  width={100}
                  height={100}
                  style={{ borderRadius: "50%" }}
                />
                <p>{user.displayName || "No Name"}</p>
              </>
            ) : (
              <p>You need to be logged in to update your profile.</p>
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            disabled={loading}
          />
          {loading && <p>Uploading...</p>}
          {imageUrl && (
            <div>
              <h3>New Profile Picture:</h3>
              <img
                src={imageUrl}
                alt="Updated Profile"
                width={100}
                height={100}
                style={{ borderRadius: "50%" }}
              />
            </div>
          )}
        </div>
        <div className={styles.layer2}>
          <div className={styles.nameWrapper}>
            <label htmlFor="name">Name:</label>
            <input type="text" className={styles.name} value={user?.name} />
          </div>

          <div className={styles.usernameWrapper}>
            <label htmlFor="name">Username:</label>
            <input type="text" className={styles.username} value={user?.username} />
          </div>
        </div>

        <div className={styles.layer3}>
          <div className={styles.emailWrapper}>
            <label htmlFor="name">Email:</label>
            <input type="text" className={styles.email} value={user?.email} />
          </div>
        </div>
        <div className={styles.layer4}>
          <div className={styles.roleWrapper}>
            <label htmlFor="role">Role:</label>
            <Select options={options} className={styles.role} value={user?.role} />
          </div>
          <div className={styles.regDateWrapper}>
            <label htmlFor="regDate">Registration Date:</label>
            <input type="text" className={styles.regDate} value={formatTimestamp(user?.createdAt)} />
          </div>
        </div>
        <div className={styles.layer5}>
          <div className={styles.dobWrapper}>
            <label htmlFor="dob">Date of birth:</label>
            <input type='date' className={styles.dob} onChange={(e) => setDob(e.target.value)} value={dob} />
          </div>
        </div>

        <div className={styles.layer6}>
          <div className={styles.countryWrapper}>
            <label htmlFor="country">Country:</label>
            <CountrySelect className={styles.country} countries={countries} onChange={(e) => setCountry(e.target.value)} value={country} />
          </div>
        </div>

        <div className={styles.layer7}>
          <div className={styles.residentialWrapper}>
            <label htmlFor="residentials">Residential Address:</label>
            <textarea className={styles.residentials} onChange={(e) => setResidentials(e.target.value)} value={residentials} />
          </div>
        </div>
        <div className={styles.layer8}>
          <button className={styles.button}>Update profile</button>
        </div>

      </form >
    </div >
  )
}

export default UserCredentials 
