import { useState } from 'react'
import type { SubmitEventHandler } from 'react';
import type { IContactFields } from '@/shared/types/interfaces';
import { sendContactEmail } from '../api/send-contact';

export const useContactForm = () => {
    const [status, setStatus] = useState('idle');

    const handleSubmit: SubmitEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        setStatus('loading')

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData) as unknown as IContactFields;

        try {
            await sendContactEmail(data);
            setStatus('success')
            setTimeout(() => setStatus('idle'), 3000)
            e.currentTarget.reset();
        } catch (err) {
            setStatus('error')
            console.error(err instanceof Error ? err.message : 'Error');
        }
    };

    return { handleSubmit, status };
};