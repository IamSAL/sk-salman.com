import { useEffect, useState } from 'react';

interface BoxCountOptions {
    boxWidth: number;
    boxHeight: number;
    ignoreWidthPercentage: number;
    ignoreHeightPercentage: number;
    gapPercentage: number;
}

const useBoxCount = ({
    boxWidth,
    boxHeight,
    ignoreWidthPercentage,
    ignoreHeightPercentage,
    gapPercentage,
}: BoxCountOptions): number => {
    const [totalBoxes, setTotalBoxes] = useState(0);

    const calculateTotalBoxes = () => {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        const effectiveScreenWidth = screenWidth * (1 - ignoreWidthPercentage / 100);
        const effectiveScreenHeight = screenHeight * (1 - ignoreHeightPercentage / 100);

        const boxesInWidth = Math.floor(effectiveScreenWidth / (boxWidth + gapPercentage / 100));
        const boxesInHeight = Math.floor(effectiveScreenHeight / (boxHeight + gapPercentage / 100));

        const total = boxesInWidth * boxesInHeight;

        setTotalBoxes(total);
    };

    useEffect(() => {
        // Initial calculation
        calculateTotalBoxes();

        // Add event listener for screen resize
        window.addEventListener('resize', calculateTotalBoxes);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', calculateTotalBoxes);
        };
    }, [boxWidth, boxHeight, ignoreWidthPercentage, ignoreHeightPercentage, gapPercentage]);

    return totalBoxes;
};

export default useBoxCount;
