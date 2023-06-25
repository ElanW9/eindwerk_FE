import React, { useState, useEffect } from "react";
import useFetch from "../components/UseFetch";

const Opponents = () => {
  const { get } = useFetch();
  const [fighter, setFighter] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    get("fighters/2").then((fighterData) => {
      setFighter(fighterData);
      if (fighterData && fighterData.images_id) {
        get(`images/${fighterData.images_id}`).then((imageData) => {
          setImage(imageData);
        });
      }
    });
  }, []); // Provide an empty dependency array here

  return (
    <>
      {fighter && (
        <div className="user" key={fighter.id}>
          <h2>{fighter.username}</h2>
          <h3>{fighter.martialArt}</h3>
          <p>Age: {fighter.age}</p>
          <p>Weight: {fighter.weight}</p>
          <p>Height: {fighter.height}</p>
          <p>Experience: {fighter.experience}</p>
          {image && <img src={image.url} alt="Fighter" />}
          {/* Render the image if available */}
        </div>
      )}
    </>
  );
};

export default Opponents;
