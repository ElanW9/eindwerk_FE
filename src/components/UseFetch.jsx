import { useState, useEffect } from "react";

const baseUrl = import.meta.env.VITE_SERVER_URL;
export default function useFetch() {
  const [loading, setLoading] = useState(true);

  function myFetch(url) {
    return fetch(baseUrl + url);
  }

  useEffect(() => {
    setLoading(false);
    return () => {
      setLoading(true);
    };
  }, []);

  function get(url) {
    return new Promise((resolve, reject) => {
      setLoading(true);
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

  function put(url, body) {
    return new Promise((resolve, reject) => {
      myFetch(url, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then((response) => {
          if (!response || (response.status >= 400 && response.status <= 500)) {
            setLoading(false);
            return reject(response);
          }
          setLoading(false);
          resolve(response);
        })
        .catch((error) => {
          setLoading(false);
          reject(error);
        });
    });
  }

  return { get, post, put, loading };
}
