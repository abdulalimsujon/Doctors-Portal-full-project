import React from 'react';

const Loading = () => {
    return (
        <button type="button" class="bg-indigo-500 flex justify-center items-center">
            <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">

            </svg>
            Processing...
        </button>
    );
};

export default Loading;