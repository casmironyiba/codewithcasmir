'use client';

import { useRouter } from 'next/navigation';

export default function GoBackButton() {
  const router = useRouter();

  return (
    <button onClick={() => router.back()} style={{ padding: '10px', background: 'inherit', color: '#fff', border: 'none', borderRadius: '5px' }}>
      Go Back
    </button>
  );
}
