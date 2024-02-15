import React, { useState } from 'react';

interface SeeMoreProps {
    text: string;
    words?: number;
}

const SeeMore: React.FC<SeeMoreProps> = ({ text, words = 3 }) => {
    const [showAll, setShowAll] = useState(false);

    const toggleLines = () => {
        setShowAll((prev) => !prev);
    };

    const renderText = () => {
        if (showAll) {
            return (
                <p className="mb-4">
                    {text}
                    <span className="text-blue-500 cursor-pointer" onClick={toggleLines}>
                        {` See Less`}
                    </span>
                </p>
            );
        } else {
            const truncatedText = text.split(' ').slice(0, words).join(' ');
            return (
                <p className="mb-4">
                    {truncatedText}
                    {text.split(' ').length > words && ( // Display "See More" only if text is truncated
                        <span className="text-blue-500 cursor-pointer" onClick={toggleLines}>
                            {` ... See More`}
                        </span>
                    )}
                </p>
            );
        }
    };

    return <div>{renderText()}</div>;
};

export default SeeMore;
