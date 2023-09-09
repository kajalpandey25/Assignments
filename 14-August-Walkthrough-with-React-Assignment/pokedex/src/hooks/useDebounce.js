// Define a custom hook named useDebounce
function useDebounce(cb, delay = 2000) {
    let timerId; // Declare a variable to store the timer ID

    // Return a new function that will be used for debouncing
    return (...args) => {
        clearTimeout(timerId); // Clear any existing timer
        timerId = setTimeout(() => {
            cb(...args); // Call the provided callback after the specified delay
        }, delay);
    };
}

// Export the useDebounce custom hook
export default useDebounce;