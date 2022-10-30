<<<<<<< HEAD
=======

>>>>>>> f7faa6e402d417679a1a33a2d74a1b154ba22dbb
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

<<<<<<< HEAD
const Character = ({character}:Props) =>{
=======
const Character: React.FC<Props> =({character})=>{
>>>>>>> f7faa6e402d417679a1a33a2d74a1b154ba22dbb
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