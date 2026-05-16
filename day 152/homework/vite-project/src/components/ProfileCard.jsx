export default function ProfileCard({ profile, favorite }) {
    const { name, phone, email, image, isFavorite } = profile;
  
    return (
      <div>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>Phone: {phone}</p>
        <p>Email: {email}</p>
        <span
          onClick={favorite}
          className={`text-2xl cursor-pointer ${
            isFavorite ? 'bg-yellow-400' : 'bg-black'
          }`}
        >
          ⭐
        </span>
      </div>
    );
}