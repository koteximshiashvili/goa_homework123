import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaViber } from "react-icons/fa";
export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 px-6">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Me</h1>
      <div className="flex flex-col md:flex-row justify-around gap-6">
        <ul className="space-y-4">
          <li>
            <a href="#" className="flex items-center gap-2 hover:text-blue-400">
              <FaGithub /> Github
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-2 hover:text-blue-600">
              <FaFacebook /> Facebook
            </a>
          </li>
          <li className="flex items-center gap-2">
            <MdEmail /> Email: koteximshiashvili@gmail.com
          </li>
        </ul>
        <ul className="space-y-4">
          <li>
            <a href="#" className="flex items-center gap-2 hover:text-green-500">
              <FaWhatsapp /> WhatsApp
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-2 hover:text-red-500">
              <FaYoutube /> Youtube
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-2 hover:text-purple-400">
              <FaViber /> Viber
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
