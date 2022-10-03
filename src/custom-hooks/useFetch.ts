import React, { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(url) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    function goFetch() {
        setLoading(true)
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((err) => {
            setError(err)
        }).finally(() => {
            setLoading(false)
        })
    }
    useEffect(() => {
        goFetch()
    }, [url])
    const refetch = () => {
        goFetch()
    }

    return {data, loading, error, refetch}
}