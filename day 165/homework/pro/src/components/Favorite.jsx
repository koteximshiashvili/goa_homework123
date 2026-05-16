import { FaStar } from "react-icons/fa";

const Favorite = ({ id, isFavorite, toggleFavoriteChange }) => {
  return (
    <FaStar onClick={() => toggleFavoriteChange(id)} size={25} className={isFavorite && "text-amber-400"} />
  )
}

export default Favorite