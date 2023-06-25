import React, { useState, useEffect } from "react";
import useFetch from "../components/UseFetch";

const Opponents = () => {
  const { get } = useFetch();
  const [fighter, setFighter] = useState(null);
  const [image, setImage] = useState(null);
  const [martialArt, setMartialArt] = useState(null);

  useEffect(() => {
    get("fighters/2").then((fighterData) => {
      setFighter(fighterData);
      if (fighterData && fighterData.images_id) {
        get(`images/${fighterData.images_id}`).then((imageData) => {
          setImage(imageData);
        });
      }
      if (fighterData && fighterData.martial_arts_id) {
        get(`martial_arts/${fighterData.martial_arts_id}`).then(
          (martialArtData) => {
            console.log(martialArtData);
            setMartialArt(martialArtData);
          }
        );
      }
    });
  }, []);

  return (
    <>
      {fighter && (
        <div className="user" key={fighter.id}>
          {image && <img src={image.url} alt="Fighter" className="userIMG" />}
          <h2>{fighter.username}</h2>
          {martialArt && <h3>{martialArt.name}</h3>}
          {/* Render the martial art if available */}
          <p>Age: {fighter.age}</p>
          <p>Weight: {fighter.weight}</p>
          <p>Height: {fighter.height}</p>
          <p>Experience: {fighter.experience}</p>
        </div>
      )}
    </>
  );
};

export default Opponents;
