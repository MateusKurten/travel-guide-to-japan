import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'

const BlogPage = () => {

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

  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 justify-center">
        {
          data.allMdx.nodes.map(node => (
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
    </Layout>
  )
}

export const Head = () => <title>Posts</title>

export default BlogPage