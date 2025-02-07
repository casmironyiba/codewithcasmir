import formatFirestoreDate from '@/lib/utilities/formatFirestoreDate';

export default function Date({ createdAt }: { createdAt: any }) {
  return <p>Created At: {formatFirestoreDate(createdAt)}</p>;
}
