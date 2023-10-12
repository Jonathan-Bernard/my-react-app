import PropTypes from "prop-types";

function PokemonCard(props) {
    const { name, imgSrc } = props.pokemon;
    console.log(props);
    return (
        <div>
            <h1>{name}</h1>
            {imgSrc ? <img src={imgSrc} alt={name} /> : '???'}
        </div>
    );
}

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string,
    }).isRequired,
}

export default PokemonCard;
