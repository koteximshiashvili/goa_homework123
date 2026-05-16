import { FaAddressBook } from "react-icons/fa";
import { SiHtmlacademy } from "react-icons/si";
import { FaComputer } from "react-icons/fa6";
export const Main = () => {
  return (
    <main className="bg-white py-12 px-6 max-w-3xl mx-auto space-y-10">
      <h1 className="text-4xl font-bold text-center text-blue-600">About Me</h1>

      <section className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-gray-800">
          <FaAddressBook className="text-blue-500" /> Address
        </h2>
        <p className="mt-2 text-gray-700">
          I live in Batumi, Khimshiashvili Street, number 16 — 6th floor, left door.
        </p>
      </section>

      <section className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-gray-800">
          <SiHtmlacademy className="text-pink-500" /> Academy
        </h2>
        <p className="mt-2 text-gray-700">
          I am currently learning in GOA. It is an excellent and friendly academy. Here we learn programming. Join GOA!!!
        </p>
      </section>

      <section className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold flex items-center gap-2 text-gray-800">
          <FaComputer className="text-green-500" /> Interest
        </h2>
        <p className="mt-2 text-gray-700">
          I am interested in programming. With programming, we can make websites, apps, and more. I want to create my own app.
        </p>
      </section>
    </main>
  )
}
