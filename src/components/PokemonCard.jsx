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

PokemonCard.propsTypes = {
    props: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.imgSrc,
    }).isRequired,
}

export default PokemonCard;