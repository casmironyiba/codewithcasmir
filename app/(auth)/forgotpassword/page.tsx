import  getData from "@/lib/helpers/getData";
import IUser from "@/types/IUser";
import ForgotpasswordForm from "@/ui/components/forms/forgotpasswordForm/ForgotpasswordForm";

export default async function Page() {
  const users:IUser[] | null = await getData('users');
  console.log(typeof users)

  return (
    <ForgotpasswordForm  />
  );
}


