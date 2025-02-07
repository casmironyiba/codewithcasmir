import { format } from 'date-fns';
import { Timestamp } from '@firebase/firestore';

export default function formatFirestoreDate(timeStamp?: Timestamp | Date | string | null): string {
  if (!timeStamp) return 'N/A';

  let date: Date;

  if (timeStamp instanceof Timestamp) {
    date = timeStamp.toDate();
  } else if (typeof timeStamp === 'string') {
    date = new Date(timeStamp); // For ISO string support
  } else {
    date = timeStamp;
  }

  return format(date, 'MMMM do, yyyy'); // Example: "February 5th, 2025"
}
