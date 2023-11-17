import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import "./places.css"

const PlacePost = ({ data, children }) => {

  const image = getImage(data.mdx.frontmatter.hero_image);
  const city = data.mdx.frontmatter.city == null ? '' : data.mdx.frontmatter.city;
  const title = data.mdx.frontmatter.title == null ? '' : data.mdx.frontmatter.title;

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <div className="flex justify-center">
      <div className=" w-5/6 sm:flex sm:flex-row-reverse sm:justify-center">
        <div className="h-56 sm:h-auto sm:w-3/5 flex-none bg-cover overflow-hidden">
          <GatsbyImage
            image={image}
            alt={data.mdx.frontmatter.hero_image_alt}
            className="h-full"
          />
        </div>
        <div className="border border-gray-400 sm:border-t sm:border-gray-400 bg-white p-4 flex flex-col justify-between leading-normal sm:flex-col">
          <div className="mb-8">
            <span className="text-sm text-gray-600 flex items-center">
              <img className="inline mr-1" src={'/location-pin.svg'} alt="City"/>
              {data.mdx.frontmatter.city}
            </span>
            <div className="text-gray-900 font-bold text-xl mb-2">{data.mdx.frontmatter.title}</div>
            <div className="text-gray-700 text-base">{children}</div>
          </div>
          <div className="text-gray-900 text-lg mb-2">Location</div>
          <iframe
            className="h-56 w-full"
            title="Location"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GATSBY_MAPS_API_KEY}
              &q=${title.replace(/\s+/g, '+')},${city.replace(/\s+/g, '+')}+Japan`}>
          </iframe>
          <div className="flex items-center mt-4">
            <div className="text-sm">
              <span className="text-gray-600">Posted: {data.mdx.frontmatter.date}</span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        city
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`

export const Head = ({ data }) => <title>{data.mdx.frontmatter.title}</title>

export default PlacePost
