

function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }) {

    const handleOnclickPlus = () => {
        if (pokemonIndex < pokemonList.length - 1) {
            setPokemonIndex(pokemonIndex + 1);
        }
    }

    const handleOnclickLess = () => {
        if (pokemonIndex > 0) {
            setPokemonIndex(pokemonIndex - 1);
        }
    }

    return (
        <nav>
            {pokemonIndex > 0 && <button onClick={handleOnclickLess}>Précédent</button>}
            {pokemonIndex < pokemonList.length - 1 && <button onClick={handleOnclickPlus}>Suivant</button>}
        </nav>
    );



}







export default NavBar;