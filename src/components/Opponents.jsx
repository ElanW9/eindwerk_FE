import React, { useState, useEffect } from "react";
import useFetch from "../components/UseFetch";

const Opponents = () => {
  const { get } = useFetch();
  const [fighter, setFighter] = useState(null);
  const [image, setImage] = useState(null);
  const [martialArt, setMartialArt] = useState([]);

  useEffect(() => {
    const getRandomId = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const minId = 1;
    const maxId = 10;

    const randomId = getRandomId(minId, maxId);

    get(`fighters/${randomId}`).then((fighterData) => {
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

          <p>Age: {fighter.age}</p>
          <p>Weight: {fighter.weight}</p>
          <p>Height: {fighter.height}</p>
          <p className="fighterexp">Experience: {fighter.experience}</p>
        </div>
      )}
    </>
  );
};

export default Opponents;
