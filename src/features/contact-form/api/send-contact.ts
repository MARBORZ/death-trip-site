import type { IContactFields } from '@/shared/types/interfaces';

const URL = import.meta.env.MODE === 'production'
  ? `${import.meta.env.VITE_API_URL}/api/contact`
  : `${import.meta.env.VITE_TEST_URL}/api/contact`

export const sendContactEmail = async (data: IContactFields) => {
  const response = await fetch(URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Error');
  }

  return response.json();
};