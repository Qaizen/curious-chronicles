import Sub from "./Sub";
import Success from './Success';
import Message from './Message';

import React, { useEffect, useState } from "react";


export default function Medium() {
    let [message, setMessage] = useState('');
    let [success, setSuccess] = useState(false);
    let [sessionId, setSessionId] = useState('');

    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);

        if (query.get('success')) {
            setSuccess(true);
            setSessionId(query.get('session_id'));
        }

        if (query.get('canceled')) {
            setSuccess(false);
            setMessage(
                "Order canceled -- continue to shop around and checkout when you're ready."
            );
        }
    }, [sessionId]);

    if (!success && message === '') {
        return <Sub />;
    } else if (success && sessionId !== '') {
        return <Success sessionId={sessionId} />;
    } else {
        return <Message message={message} />;
    }
}