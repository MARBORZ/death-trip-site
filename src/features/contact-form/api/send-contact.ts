import type { ContactFields } from '@/shared/types/contact-field';

const URL = 'https://jsonplaceholder.typicode.com/posts/1'

export const sendContactEmail = async (data: ContactFields) => {
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