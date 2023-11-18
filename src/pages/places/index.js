import * as React from 'react'
import { useState } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import ReactPaginate from "react-paginate"

const PlacesPage = () => {

  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: { frontmatter: { type: { eq: "place"} } }
        sort: { frontmatter: { date: DESC } }
        ) {
        nodes {
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            slug
            city
            hero_image {
              childImageSharp {
                gatsbyImageData(
                  height: 450
                  placeholder: BLURRED
                  layout: FIXED
                  formats: [AUTO, WEBP, AVIF]
                  transformOptions: { cropFocus: CENTER }
                )
              }
            }
          }
          id
          excerpt
        }
      }
    }
  `)

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(data.allMdx.nodes.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.allMdx.nodes.slice(startIndex, endIndex);

  const handlePageChange = ({ selected: page }) => {
    setCurrentPage(page);
  }
  
  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    console.log(totalPages);
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <Layout>
      <ReactPaginate
        containerClassName='flex justify-center items-center mb-8'
        activeClassName={"p-2 bg-pink-100"}
        pageClassName={"mx-2 text-4xl text-pink-300"}
        nextLabel={">"}
        nextClassName={"font-bold text-3xl text-pink-400"}
        previousLabel={"<"}
        previousClassName={"font-bold text-3xl text-pink-400"}
        onPageChange={handlePageChange}
        pageCount={totalPages}
      />
      <div className="flex flex-col lg:flex-row">
        {currentPage !== 0 && (<button onClick={handlePreviousPage} className="text-3xl py-2 mb-3 text-pink-400 w-full block lg:hidden">Previous page</button>)}
        {currentPage !== 0 && (<button onClick={handlePreviousPage} className="text-6xl text-pink-400 mr-6 hidden lg:block">&lt;</button>)}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 justify-center md:mx-20 lg:mx-0">
          {
            currentItems.map(node => (
              <article key={node.id} className="hover:shadow-xl">
                <Link to={node.frontmatter.slug}>
                  <div className="lg:min-h-full rounded overflow-hidden shadow-lg">
                    <GatsbyImage
                      image={getImage(node.frontmatter.hero_image)}
                      alt={node.frontmatter.title}
                    />
                    <div className="px-6 pt-4">
                      <div className="font-bold text-xl">{node.frontmatter.title}</div>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                      <span className="inline-block bg-gray-200 rounded-full px-3 text-xs font-semibold text-gray-700 mr-2 mb-2">
                        <img className="inline mr-1" src={'/location-pin.svg'} alt="Logo"/>
                        {node.frontmatter.city}
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))
          }
        </div>
        {currentPage !== totalPages - 1 && (<button onClick={handleNextPage} className="text-6xl text-pink-400 ml-6 hidden lg:block">&gt;</button>)}
        {currentPage !== totalPages - 1 && (<button onClick={handleNextPage} className="text-3xl py-2 mt-3 text-pink-400 w-full block lg:hidden">Next page</button>)}
      </div>
    </Layout>
  )
}

export const Head = () => <title>Places</title>

export default PlacesPage