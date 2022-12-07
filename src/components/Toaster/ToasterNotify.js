import * as React from 'react';
import { Toaster } from 'react-hot-toast';

const toastOptions = {
    success: {
        iconTheme: {
            primary: 'lightgreen',
        },
    },
    error: {
        iconTheme: {
            primary: 'pink',
        },
    },
};

export default function ToasterNotify() {
    return (
        <div>
            <Toaster
                reverseOrder={false}
                position="top-center"
                toastOptions={toastOptions}
            />
        </div>
    );
}
