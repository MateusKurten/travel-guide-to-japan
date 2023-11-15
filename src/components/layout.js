import React from "react"
import "./layout.css"
import { useStaticQuery, graphql } from 'gatsby'
import Footer from "./footer"
import Header from "./header"

export default function Layout({ children }) {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <main className="flex flex-col bg-gray-100 min-h-screen h-full">
      <Header title={data.site.siteMetadata.title} />
      <div className="mb-auto py-4 px-4">
        {children}
      </div>
      <Footer copyrightYear="2023" />
    </main >
  )
}
