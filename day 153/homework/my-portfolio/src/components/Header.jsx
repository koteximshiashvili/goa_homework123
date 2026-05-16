export const Header = () => {
  return (
    <header className="bg-gray-100 py-12 px-6 text-center flex flex-col items-center space-y-6">
      <h1 className="text-4xl font-bold text-blue-600">Home</h1>
      <img 
        src="https://th.bing.com/th/id/OIP.-EpsqHbxWA2oDr-8wt5ogQHaD4?rs=1&pid=ImgDetMain" 
        alt="kote" 
        className="w-32 h-32 rounded-full border-4 border-blue-300 object-cover"
      />
      <h1 className="text-3xl font-semibold text-gray-800">
        Hi <br /> I Am <br /> <span className="text-blue-500">Kote!</span>
      </h1>
      <p className="text-lg text-gray-600 w-md">
        I am 12 years old and I live in Batumi, Georgia.
      </p>
    </header>
  )
}