import React, { useEffect, useState } from 'react'
import Card from './Card'
import Pokeinfo from "./Pokeinfo"
import axios from 'axios';

function Main() {
    const [pokeData,setPokeData]=useState([]);
    const [loading,setLoading] =useState(true);
    const [url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon/");
    const [nexturl,setNextUrl]=useState();
    const [prevUrl,setPrevUrl] =useState();
    const [pokedex,setPokedex]=useState();
    const pokeFun =async() => {
        setLoading(true);
        const res=await axios.get(url);
        // console.log(res);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results);
        setLoading(false);
    }
    const getPokemon = async (res) => {
        const pokemonData = await Promise.all(res.map(async (item) => {
            const result = await axios.get(item.url);
            return result.data;
        }));
        setPokeData(pokemonData.sort((a, b) => a.id > b.id ? 1 : -1));
    };

    useEffect(() => {
        pokeFun();
    },[url])


    return (
    <>
        <div className="container">
            <div className="left-container">
                    <Card  pokemon={pokeData} loading={loading} infoPokemon={poke=>setPokedex(poke)}/>
                    <div className="btn-group">
                        <button onClick={() => {
                            setUrl(prevUrl);
                        }}> Previous</button>
                        <button onClick={() =>{
                            setUrl(nexturl);
                        }}>Next</button>
                    </div>
            </div>
            <div className="right-container">                
                <Pokeinfo data={pokedex} />
            </div>
        </div>
    </>
  )
}

export default Main