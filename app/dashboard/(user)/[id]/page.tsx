
'use client'; // Client-side rendering
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '@/firebaseConfig';
import { onAuthStateChanged, updateProfile, User } from 'firebase/auth';
import { storage } from '@/firebaseConfig'; // Firebase Storage instance
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const DashboardPage = () => {
  const [user, setUser] = useState<User | null>(null);
  const [displayName, setDisplayName] = useState<string>('');
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    // const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      const user = auth.currentUser;
      if (user) {
        setUser(user);
        setDisplayName(user.displayName || '');
      alert(user.email)
      } else {
        router.push('/auth/signin/email'); // Redirect to login if not authenticated
      }
    // });

    // return () => unsubscribe();
  }, [router]);

  const handleProfileUpdate = async () => {
    if (user) {
      setLoading(true);
      try {
        let photoURL = user.photoURL; // Default to existing photoURL if no new photo is uploaded

        // If a new photo is uploaded, upload it to Firebase Storage
        if (photoFile) {
          const storageRef = ref(storage, `profilePhotos/${user.uid}/${photoFile.name}`);
          const uploadTask = uploadBytesResumable(storageRef, photoFile);

          // Wait for upload to complete and get the download URL
          await new Promise<void>((resolve, reject) => {
            uploadTask.on(
              'state_changed',
              () => {}, // Handle progress (optional)
              (error) => reject(error),
              async () => {
                photoURL = await getDownloadURL(uploadTask.snapshot.ref);
                resolve();
              }
            );
          });
        }

        // Update user profile in Firebase Authentication with both displayName and photoURL
        await updateProfile(user, {
          displayName,
          photoURL,
        });

        alert('Profile updated successfully');
      } catch (error) {
        console.error('Error updating profile:', error);
        alert('Failed to update profile');
      } finally {
        setLoading(false);
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPhotoFile(e.target.files[0]);
    }
  };

  if (!user) {
    return <p>Loading...</p>; // Optional loading state
  }

  return (
    <div>
      <h1>Welcome, {user.displayName || user.email}</h1>
      
      {/* Profile update form */}
      <div>
        <h2>Update Profile</h2>
        <label>
          Display Name:
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Upload Profile Photo:
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
        </label>
        <br />
        <button onClick={handleProfileUpdate} disabled={loading}>
          {loading ? 'Updating...' : 'Update Profile'}
        </button>
      </div>
    </div>
  );
};

export default DashboardPage;
