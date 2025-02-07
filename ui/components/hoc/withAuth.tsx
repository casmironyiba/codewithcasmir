import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";

const withAuth = (WrappedComponent: React.ComponentType) => {
  return (props: any) => {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!loading && !user) {
        router.push("/auth/signin/email");
      }
    }, [user, loading, router]);

    if (loading || !user) {
      return <p>Loading...</p>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
