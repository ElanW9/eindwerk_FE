import { useState } from "react";

// const defaultOptions = {
//   credentials: "include",
// };
const baseUrl = import.meta.env.VITE_SERVER_URL;
export default function useFetch() {
  const [loading, setLoading] = useState(true);

  function myFetch(url) {
    //, options
    //add defautl options
    // if (!options) options = {};
    // options.credentials = options?.credentials || defaultOptions.credentials;
    return fetch(baseUrl + url); //,options toevoegen bij authenticatie
  }

  function get(url) {
    return new Promise((resolve, reject) => {
      myFetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (!data) {
            setLoading(false);
            return reject(data);
          }
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
      myFetch(url, {
        method: "post",
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
  return { get, post, loading };
}
