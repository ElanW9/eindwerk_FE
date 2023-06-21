import React, { useState, useEffect } from "react";
import useFetch from "../components/UseFetch";
const Opponents = () => {
  const { get } = useFetch();
  const [fighters, setFighters] = useState();
  // useEffect(() => {
  //   get("fighters/1").then((data) => {
  //     setFighters(data);
  //     console.log(data);
  //   });
  // });
  return (
    <>
      <div className="user">
        <h2>Username</h2>
        <h3>Martial Art</h3>
        <p>age</p>
        <p>weight</p>
        <p>height</p>
        <p>experience</p>
      </div>
    </>
  );
};

export default Opponents;
