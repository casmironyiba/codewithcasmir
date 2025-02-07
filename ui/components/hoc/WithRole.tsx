import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const withRole = (allowedRoles: string[]) => (Component: React.FC) => {
  return () => {
    const { user, role, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!loading && (!user || !allowedRoles.includes(role!))) {
        router.push("/unauthorized");
      }
    }, [user, role, loading]);

    if (loading || !user || !allowedRoles.includes(role!)) {
      return <p>Loading...</p>;
    }

    return <Component />;
  };
};
