import React from "react"
import { Link } from "gatsby"

export default function Header(props) {
  return (
    <nav className="flex items-center flex-wrap bg-pink-200 p-4">
      <div className="flex items-center text-pink-400 mr-6">
        <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
        <span className="font-semibold text-sm md:text-lg tracking-tight">{props.title}</span>
      </div>
      <div className="w-full flex-grow flex items-center w-auto">
        <div className="text-sm flex-grow mt-2">
        <Link to="/" className="inline-block mt-0 text-pink-400 hover:text-white mr-4">Home</Link>
        <Link to="/places" className="inline-block mt-0 text-pink-400 hover:text-white mr-4">Places</Link>
        <Link to="/kanjis" className="inline-block mt-0 text-pink-400 hover:text-white mr-4">Helpful Kanji</Link>
        </div>
      </div>
    </nav>
  )
}
