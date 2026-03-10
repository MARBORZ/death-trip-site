import { useState } from 'react'
import type { SubmitEventHandler } from 'react';
import type { ContactFields } from '@/shared/types/contact-field';
import { sendContactEmail } from '../api/send-contact';

export const useContactForm = () => {
    const [status, setStatus] = useState('idle');

    const handleSubmit: SubmitEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        setStatus('loading')

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData) as unknown as ContactFields;

        try {
            await sendContactEmail(data);
            setStatus('success')
            alert('Success!');
            e.currentTarget.reset();
        } catch (err) {
            setStatus('error')
            alert(err instanceof Error ? err.message : 'Error');
        }
    };

    return { handleSubmit, status };
};