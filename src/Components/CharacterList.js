import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList(props) {

    const [data, setData] = useState([]);
    console.log("Character Data: ", data);
    useEffect(() => {

        axios.get("http://hp-api.herokuapp.com/api/characters").then(response => {
            setData(response.data);
        });
    }, []);

    return (
        <section className="character-list grid-view">
            <h2 className="grid-view">
                {data.map(character => {
                    return (
                        <CharacterCard
                            key={character.name}
                            name={character.name}
                            house={character.house}
                            species={character.species}
                            image={character.image}
                            gender={character.gender}
                        />
                    );
                })}
            </h2>
        </section>
    )
}