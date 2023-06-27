import { useState, useEffect } from "react";

const baseUrl = import.meta.env.VITE_SERVER_URL;
export default function useFetch() {
  const [loading, setLoading] = useState(true);

  function myFetch(url) {
    return fetch(baseUrl + url);
  }

  useEffect(() => {
    setLoading(false); // Reset loading state when component unmounts
    return () => {
      // Cleanup function to cancel any ongoing requests
      setLoading(true);
    };
  }, []);

  function get(url) {
    return new Promise((resolve, reject) => {
      setLoading(true); // Set loading state to true before making the request
      myFetch(url)
        .then((response) => response.json())
        .then((data) => {
          setLoading(false);
          resolve(data);
        })
        .catch((error) => {
          setLoading(false);
          reject(error);
        });
    });
  }

  function post(url, body) {
    return new Promise((resolve, reject) => {
      setLoading(true);
      myFetch(url, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then((response) => {
          setLoading(false);
          resolve(response);
        })
        .catch((error) => {
          setLoading(false);
          reject(error);
        });
    });
  }

  return { get, post, loading };
}
