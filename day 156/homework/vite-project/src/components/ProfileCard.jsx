import propTypes from "prop-types";
export const ProfileCard = ({ name, age, following, setFollowing, id }) => {
  return (
    <div>
        <p>{name}</p>
        <p>{age}</p>
        <button onClick={() => setFollowing(id)}>{following ? "Following" : "Follow"}</button>
    </div>
  )
}
ProfileCard.propTypes = {
    name: propTypes.string,
    age: propTypes.number,
    following: propTypes.bool,
    id: propTypes.number
}