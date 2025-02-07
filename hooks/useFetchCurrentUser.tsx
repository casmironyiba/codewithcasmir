import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "@/lib/helpers/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

const useFetchCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          // Fetch user document from Firestore
          const userDocRef = doc(db, "users", user.uid);
          const userDoc = await getDoc(userDocRef);

          if (userDoc.exists()) {
            const userData = userDoc.data();
            setCurrentUser({
              uid: user.uid,
              email: user.email,
              ...userData,
            });
            setRole(userData.role || null);
          } else {
            console.error("User document not found");
            setCurrentUser(null);
            setRole(null);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        // User signed out
        setCurrentUser(null);
        setRole(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { currentUser, role, loading };
};

export default useFetchCurrentUser;
