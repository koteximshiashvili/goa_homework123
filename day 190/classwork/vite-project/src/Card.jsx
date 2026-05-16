

const Card = ({ car }) => {
  return (
    <div className={`p-4 w-[301px] h-[412px] flex flex-col gap-10`} style={{background: car.color}}>
        <img className="w-20 h-15" src={car.icon} alt="dd" />
        <h1 className="font-bold text-white text-3xl">{car.type}</h1>
        <p style={{color: "hsla(0, 0%, 100%, 0.75)"}}>{car.description}</p>
        <button>Learn More</button>
    </div>
  )
}

export default Card