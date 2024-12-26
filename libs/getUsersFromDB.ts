import { UserType } from '@/ui/components/userTypes/UserTypes'; 

const getUsersFromDB = async (): Promise<UserType[]> => {
  try {
    const response = await fetch('/api/users');
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    const data = await response.json();
    return data as UserType[];
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error; // Propagate the error for handling in the component
  }
};
export default getUsersFromDB
