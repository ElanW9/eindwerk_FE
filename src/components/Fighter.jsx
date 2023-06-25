import React, { useState, useEffect } from "react";
import useFetch from "../components/UseFetch";

const Fighter = () => {
  const { get } = useFetch();
  const [fighters, setFighters] = useState([]);

  useEffect(() => {
    get("fighters/3").then((data) => {
      console.log(data);
      setFighters([data]); // Wrap the data in an array
    });
  }, []); // Provide an empty dependency array here

  return (
    <>
      {fighters.map((fighter) => (
        <div className="user" key={fighter.id}>
          <h2>{fighter.username}</h2>
          <h3>{fighter.martialArt}</h3>
          <p>Age: {fighter.age}</p>
          <p>Weight: {fighter.weight}</p>
          <p>Height: {fighter.height}</p>
          <p>Experience: {fighter.experience}</p>
        </div>
      ))}
    </>
  );
};

export default Fighter;
