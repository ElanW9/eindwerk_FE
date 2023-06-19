import React, { useState, useEffect } from "react";
import useFetch from "../components/UseFetch";
const Opponents = () => {
  const { get } = useFetch();
  const [fighters, setFighters] = useState();
  useEffect(() => {
    get("fighters/1").then((data) => {
      setFighters(data);
      console.log(data);
    });
  });
  return (
    <>
      <div>
        <h1>test</h1>
      </div>
    </>
  );
};

export default Opponents;
