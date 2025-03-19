import React from "react";


const TextPill = ({ text }) => {
    return (
        <div className="inline-flex items-center px-4 py-2 border rounded-lg text-white w-fit hover:bg-white hover:text-primary">
            <span>{text}</span>
        </div>
    );
};

export default TextPill