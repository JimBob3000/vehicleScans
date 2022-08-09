import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const abortController = new AbortController();

        fetch(url, { signal: abortController.signal })
        .then(response => {
            if(!response.ok) {
                throw Error('Could not fetch data from server');
            }
            return response.json();
        })
        .then(data => {
            setData(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err => {
            //Allow this error for abort controller
            if (err.name === 'AbortError') {
                console.log('Fetch aborted');
            }
            setError(err.message);
            setIsPending(false);
        });

        //abort controller - stops error from changing pages to quickly
        //it may still be loading when changing page which throw error
        //associate with fetch to abort
        return () => abortController.abort();
    }, [url]);

    return { data, isPending, error }
}

export default useFetch