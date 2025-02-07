import  getData from "@/lib/helpers/getData";
import IUser from "@/types/IUser";
import SigninByEmailForm from "@/ui/components/forms/signinByEmailForm/SigninByEmailForm";

export default async function Page() {
  const users:IUser[] | null = await getData('users');
  console.log(typeof users)

  return (
    <SigninByEmailForm users={users} />
  );
}
