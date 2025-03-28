import getUserById from '@/actions/getUserById';

export default async function UserPage({ params }: any) {
  const { id } = params;
  const user = await getUserById(id);
  if (!user) {
    return <p>User not found</p>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      {/* Display other user details here */}
    </div>
  );
}
