import { format } from 'date-fns';
import { Timestamp } from 'firebase/firestore';

const formatTimestamp = (timestamp: Timestamp | Date | null|any): string => {
  if (!timestamp) return 'N/A';

  // Check if the input is a Firebase Timestamp and convert it to a Date
  const date = timestamp instanceof Timestamp ? timestamp.toDate() : timestamp;

  // Format the Date using date-fns
  return format(date, 'PPPpp'); // Example: Jan 1, 2023, 12:00 AM
};

export default formatTimestamp;
