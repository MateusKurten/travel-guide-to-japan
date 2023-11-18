import React from "react"
import { Link } from "gatsby"

export default function Header(props) {
  return (
    <nav className="flex items-center flex-wrap bg-pink-200 p-4">
      <div className="flex items-center text-pink-400 mr-6">
        <img className="mx-2" src={'/sakura.svg'} alt="Sakura Flower"/>
        <span className="font-semibold text-sm md:text-xl tracking-tight">{props.title}</span>
      </div>
      <div className="w-full flex-grow flex items-center w-auto">
        <div className="text-sm flex-grow mt-2">
        <Link to="/" className="inline-block mt-0 text-pink-400 hover:text-white mr-4 text-sm md:text-lg">Home</Link>
        <Link to="/places" className="inline-block mt-0 text-pink-400 hover:text-white mr-4 text-sm md:text-lg">Places</Link>
        <Link to="/kanjis" className="inline-block mt-0 text-pink-400 hover:text-white mr-4 text-sm md:text-lg">Helpful Kanji</Link>
        <Link to="/contribute" className="inline-block mt-0 text-pink-400 hover:text-white mr-4 text-sm md:text-lg">Contribute</Link>
        </div>
      </div>
    </nav>
  )
}
