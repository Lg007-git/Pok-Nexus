import React from "react";
import CardComponent from "./Cardcomponent"; // Ensure proper capitalization

function Pokeinfo({ data }) {
  return (
    <>
      {!data ? (
       <div className="emptydata"></div>
      ) : (
        <>
          <h1>{data.name}</h1>
          <CardComponent image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} color1="#54a29e" color2="#a79d66">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
              alt=""
            />
          </CardComponent>
          <div className="abilities">
            {data.abilities.map((poke) => {
              return (
                <div className="group" key={poke.ability.name}>
                  <h2>{poke.ability.name}</h2>
                </div>
              );
            })}
          </div>
          <div className="base-stat">
            {data.stats.map((poke) => {
              return (
                <div key={poke.stat.name}>
                  <h3>
                    {poke.stat.name}: {poke.base_stat}
                  </h3>
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}

export default Pokeinfo;
