import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'

const KanjiPost = ({ data }) => {

  const image = getImage(data.mdx.frontmatter.image)

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <Link to="/kanjis" className="text-white rounded bg-pink-300 py-1 px-2 text-lg mb-2 inline-block">&#8678; Back</Link>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center border shadow-lg py-4">
        <div className="flex flex-col p-6">
          <div className="text-9xl lg:text-[250px] mb-6">{data.mdx.frontmatter.kanji}</div>
          <div className="text-3xl mb-4 text-gray-500">"{data.mdx.frontmatter.english}"</div>
          <div className="text-2xl">Kana: {data.mdx.frontmatter.kana}</div>
          <div className="text-2xl">Romaji: {data.mdx.frontmatter.romaji}</div>
        </div>
        <GatsbyImage
          className="m-4"
          image={image}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        kanji
        english
        kana
        romaji
        image {
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

export default KanjiPost
