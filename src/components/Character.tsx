
interface Props{
  character:{
    image: string
    status: string
    name: string
    species: string
    location:{
      name:string
    }
  }
}

const Character: React.FC<Props> =({character})=>{
    return (
      <div className="card">
        <img src={character.image} alt="" />
        <div className="text-container">
          <h3>{character.name}</h3>
          <p className="status">
            {character.status} - {character.species}
          </p>
          <p className="title">Last seen on</p>
          <p>{character.location.name}</p>
        </div>
      </div>
    );
  }
  export default Character;