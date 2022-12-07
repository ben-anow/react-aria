import React from 'react';
import toast from 'react-hot-toast';

function getErrorComponent(e, errorTitle) {
    return (
        <div>
            <b>{`Oops - ${errorTitle}.`}</b>
            {e && (
                <div>
                    <i>{e.message}</i>
                </div>
            )}
        </div>
    );
}

function showSuccessToast(toastMessage) {
    toast.success(toastMessage);
}

function showErrorToast(e, errorTitle) {
    toast.error(getErrorComponent(e, errorTitle));
}

function promiseToastOptions(
    {
        loading,
        successTitle,
        successSubTitle,
        errorTitle,
    },
) {
    return {
        loading,
        success: (
            <div>
                <b>{successTitle}</b>
                {successSubTitle && (
                    <div>
                        <i>{successSubTitle}</i>
                    </div>
                )}
            </div>
        ),
        error: (e) => getErrorComponent(e, errorTitle),
    };
}

export { showSuccessToast, promiseToastOptions, showErrorToast };
