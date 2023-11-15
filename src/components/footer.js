import React from "react"

export default function Footer(props) {
  return (
    <p className="text-center bg-pink-200 py-4 text-pink-500 place-self-end w-full">
      © {props.copyrightYear} Travel Guide to Japan. All rights reserved.
    </p>
  )
}
