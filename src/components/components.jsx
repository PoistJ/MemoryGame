import { useEffect, useState } from "react";

const pokemon = [
  { id: 1, fetchID: "onix" },
  { id: 2, fetchID: "pikachu" },
  { id: 3, fetchID: "jigglypuff" },
  { id: 4, fetchID: "torchic" },
  { id: 5, fetchID: "bulbasaur" },
  { id: 6, fetchID: "charizard" },
  { id: 7, fetchID: "dragonite" },
  { id: 8, fetchID: "piplup" },
  { id: 9, fetchID: "bidoof" },
  { id: 10, fetchID: "excadrill" },
  { id: 11, fetchID: "jynx" },
  { id: 12, fetchID: "diglett" },
];

const options = {
  method: "GET",
};

function Card({ arrIndex, handleClick }) {
  const pokeID = pokemon.find(({ id }) => id === arrIndex).fetchID;
  const [pokeName, setPokeName] = useState("");
  const [imgURL, setImgURL] = useState(null);

  useEffect(() => {
    const getPoke = async (lookupID) => {
      const url = `https://pokeapi.co/api/v2/pokemon/${lookupID}`;
      const response = await fetch(url, options);
      const data = await response.json();
      setPokeName(data.name);
      setImgURL(data.sprites.front_default);
    };
    getPoke(pokeID);
  }, [pokeID]);

  return (
    <div key={arrIndex} className={arrIndex} onClick={handleClick}>
      <img src={imgURL} className={arrIndex} />
      <div className={arrIndex}>
        {pokeName}
      </div>
    </div>
  );
}

export { Card };
