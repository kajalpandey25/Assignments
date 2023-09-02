// css imports
import './Pokemon.css';


function Pokemon({name, url }) {
    return(
        <div className="pokemon">
            <div className='pokemon-name'>{name}</div>
            <img className='pokemon-image' src={url} />
        </div>
    )
}

export default Pokemon;