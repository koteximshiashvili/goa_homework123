export const Card = (props) => {
  return (
    <div className="w-[300px] h-[400px] bg-[#f4f4f4] flex flex-col items-center space-y-2">
        <h1 className="text-3xl font-bold">{props.title}</h1>
        <p className="font-black">{props.description}</p>
    </div>
  )
}
