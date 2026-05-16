import { useEffect, useState } from "react"

export const useFetch = (url) => {
    const [error, setError] = useState("");
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      async function getData() {
        try {
            const fetchedData = await fetch(url);
            if(!fetchedData.ok){
                throw new Error("Error.")
            }
            const data = await fetchedData.json();
            setData(data)
        }
        catch(error) {
            setError(error);
        }
        finally {
            setLoading(false)
        }
      }
      getData()
    }, [url]);
    
  return {data, error, loading}
}