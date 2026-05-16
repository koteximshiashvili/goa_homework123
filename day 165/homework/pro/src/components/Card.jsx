import { CgProfile } from "react-icons/cg";
import Favorite from "./Favorite";
const Card = ({ setPeople, profile }) => {
    function toggleFavoriteChange(id){
        setPeople(prev => prev.map(el => el.id == id ? {...el, isFavorite: !el.isFavorite} : el))
    }
    const {id, name, email, phone, isFavorite, description} = profile;
  return (
    <div className="bg-white rounded w-60 flex-col p-4 m-4">
        <CgProfile size={120} className="m-auto"/>
        <Favorite id={id} isFavorite={isFavorite} toggleFavoriteChange={toggleFavoriteChange} />
        <p className="font-bold text-xl">{name}</p>
        <p>{description}</p>
        <p className="opacity-60">{phone}</p>
        <p className="opacity-60">{email}</p>

    </div>
  )
}

export default Card