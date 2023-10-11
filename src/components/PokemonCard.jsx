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

export default PokemonCard;
