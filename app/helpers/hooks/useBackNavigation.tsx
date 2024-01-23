import { useEffect } from "react";

const useBackNavigation = (callback: () => void) => {
    useEffect(() => {
        const handleBackNavigation = (event: PopStateEvent) => {
            event.preventDefault();
            callback();
        };

        // Add the event listener for popstate
        window.addEventListener('popstate', handleBackNavigation);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('popstate', handleBackNavigation);
        };
    }, [callback]);
};

export default useBackNavigation;