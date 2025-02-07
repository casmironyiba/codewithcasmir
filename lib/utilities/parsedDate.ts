import { format } from 'date-fns';
import { Timestamp } from '@firebase/firestore';

export default function formatFirestoreDate(timeStamp: Timestamp | Date | null): string {
  if (!timeStamp) return 'N/A'; // Handle null cases

  const date = timeStamp instanceof Timestamp ? timeStamp.toDate() : timeStamp;

  return format(date, 'MMMM do, yyyy'); // Example: "February 5th, 2025"
}
