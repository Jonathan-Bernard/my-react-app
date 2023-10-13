import { useState } from "react";

function NavBar({ pokemonList }) {
    const [currentPokemon, setCurrentPokemon] = useState();

    const handlePokemonClick = (pokemon) => {
        setCurrentPokemon(pokemon);
    }

    const pikaPika = () => {
        window.alert("PIKA PIKA !");
    }

    return (
        <div>
            <h1>Liste des Pokémon</h1>

            {currentPokemon && (
                <div>
                    <img src={currentPokemon.imgSrc} alt={currentPokemon.name} />
                    <h2>{currentPokemon.name}</h2>
                </div>
            )}

            <nav>
                <ul>
                    {pokemonList.map((pokemon, pokemonIndex) => (
                        <li key={pokemonIndex}>
                            <button onClick={() => {
                                if (pokemon.name === "pikachu") {
                                    handlePokemonClick(pokemon);
                                    pikaPika();

                                } else {
                                    handlePokemonClick(pokemon);
                                }
                            }}>
                                {pokemon.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;