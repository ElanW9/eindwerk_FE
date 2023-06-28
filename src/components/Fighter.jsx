import React, { useState, useEffect } from "react";
import useFetch from "../components/UseFetch";

const Fighter = () => {
  const { get } = useFetch();
  const [fighter, setFighter] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    get("fighters/3").then((fighterData) => {
      setFighter(fighterData);
      if (fighterData && fighterData.images_id) {
        get(`images/${fighterData.images_id}`).then((imageData) => {
          setImage(imageData);
        });
      }
    });
  }, []);
  return (
    <>
      {fighter && (
        <div className="user" key={fighter.id}>
          {image && <img src={image.url} alt="Fighter" className="userIMG" />}
          <h2>{fighter.username}</h2>
          <h3>{fighter.martialArt}</h3>
          <p>Age: {fighter.age}</p>
          <p>Weight: {fighter.weight}</p>
          <p>Height: {fighter.height}</p>
          <p className="fighterexp">Experience: {fighter.experience}</p>
        </div>
      )}
    </>
  );
};

export default Fighter;
