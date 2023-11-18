import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-4 text-center">Travel Guide to Japan</h1>
      <p className="text-lg mb text-center">
        Welcome to your comprehensive travel guide to Japan!
      </p>
      <div className="flex flex-wrap justify-center my-6">
        <div className="m-2">
          <Link to="/places">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
              Visit Places
              <div className="text-xs">Explore popular destinations in Japan</div>
            </button>
          </Link>
        </div>
        <div className="m-2">
          <Link to="/kanjis">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300">
              Helpful Kanji
              <div className="text-xs">Learn useful Kanji for your trip</div>
            </button>
          </Link>
        </div>
      </div>
      <p className="text-sm italic text-center">
        Developed by Mateus Kürten Rodrigues as part of the Infnet postgraduate course.
      </p>
      <p className="text-2xl my-8 text-center">This project was developed with...</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-6">
        <div className="flex flex-row items-start mb-4 lg:mb-0 mx-4">
          <div className="mr-4 flex-shrink-0 ">
              <img className="max-h-12 md:max-h-16" src={'/gatsby.png'} alt="Gatsby"/>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Gatsby (Jamstack)</h3>
            <p className="text-sm">
              Gatsby is a React-based framework that generates static websites for better performance and scalability. It
              leverages GraphQL for data fetching and offers an excellent developer experience.
            </p>
          </div>
        </div>
        <div className="flex flex-row items-start mb-4 lg:mb-0 mx-4">
          <div className="mr-4 flex-shrink-0 ">
              <img className="max-h-12 md:max-h-16" src={'/netlify.svg'} alt="Netlify"/>
          </div>
          <div>
            <h3 className="text-lg font-semibold">CI/CD via Netlify</h3>
            <p className="text-sm">
              Netlify provides continuous integration and deployment (CI/CD) services, enabling seamless deployment and hosting
              of web applications.
            </p>
          </div>
        </div>
        <div className="flex flex-row items-start mb-4 lg:mb-0 mx-2">
          <div className="mr-4 flex-shrink-0 ">
            <img className="max-h-12 md:max-h-16" src={'/react.png'} alt="React"/>
          </div>
          <div>
            <h3 className="text-lg font-semibold">React</h3>
            <p className="text-sm">
              React is a popular JavaScript library used for building user interfaces, offering a component-based architecture
              and efficient rendering.
            </p>
          </div>
        </div>
        <div className="flex flex-row items-start mb-4 lg:mb-0 mx-4">
          <div className="mr-4 flex-shrink-0">
            <img className="max-h-12 md:max-h-16" src={'/tailwindcss.png'} alt="TailwindCSS"/>
          </div>
          <div>
            <h3 className="text-lg font-semibold">TailwindCSS</h3>
            <p className="text-sm">
              TailwindCSS is a utility-first CSS framework that allows for rapid development by providing pre-defined utility
              classes.
            </p>
          </div>
        </div>
        <div className="flex flex-row items-start mb-4 lg:mb-0 mx-4">
          <div className="mr-4 flex-shrink-0 ">
            <img className="max-h-12 md:max-h-16" src={'/googlemaps.png'} alt="Google Maps"/>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Google Maps Embed API</h3>
            <p className="text-sm">
              Google Maps Embed API allows for embedding interactive maps into web pages, providing location-based
              functionalities.
            </p>
          </div>
        </div>
        <div className="flex flex-row items-start mb-4 lg:mb-0 mx-4">
        <div className="mr-4 flex-shrink-0">
            <img className="max-h-12 md:max-h-16" src={'/graphql.png'} alt="GraphQL"/>
          </div>
          <div>
          <h3 className="text-lg font-semibold">GraphQL for data querying</h3>
            <p className="text-sm">
              GraphQL is a query language for APIs, providing a more efficient and flexible way to fetch data for the
              application.
            </p>
          </div>
        </div>
        <div className="flex flex-row items-start mb-4 lg:mb-0 mx-4">
          <div className="mr-4 flex-shrink-0 ">
              <img className="max-h-12 md:max-h-16" src={'/mdx.png'} alt="MDX"/>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Markdown (MDX) for content</h3>
            <p className="text-sm">
              MDX is a format that allows mixing Markdown syntax with JSX, enabling the inclusion of React components in
              Markdown files.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Início</title>
