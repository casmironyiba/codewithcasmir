import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { useRouter, usePathname } from "next/navigation";
import { auth, db } from "@/lib/helpers/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

interface AuthContextType {
  user: User | null;
  role: string | null;
  loading: boolean;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  setRole: React.Dispatch<React.SetStateAction<string | null>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        const token = await currentUser.getIdToken(true);
        document.cookie = `token=${token}; path=/`;

        // Fetch role from Firestore
        const userDocRef = doc(db, 'users', currentUser.uid);
        const userDoc = await getDoc(userDocRef);

        const fetchedRole = userDoc.data()?.role || null;
        setRole(fetchedRole);

        if (pathname === "/auth/signin/email" || pathname === "/auth/signup/email") {
          if (fetchedRole === "admin") {
            router.push("/admin/dashboard");
          } else if (fetchedRole === "instructor") {
            router.push("/instructor/dashboard");
          } else if (fetchedRole === "student") {
            router.push("/student/dashboard");
          }
        }
      } else {
        document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        setRole(null);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  return (
    <AuthContext.Provider value={{ user, role, loading,setUser,setRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

