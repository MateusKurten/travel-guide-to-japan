import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Layout from '../../components/layout'

const KanjiPage = () => {

  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: { frontmatter: { type: { eq: "kanji" } } }
        ) {
        nodes {
          frontmatter {
            kanji
            english
            slug
          }
          id
        }
      }
    }
  `)

  return (
    <Layout>
      <div className="flex flex-wrap gap-6 justify-center">
        {
          data.allMdx.nodes.map(node => (
            <article key={node.id} className="hover:bg-gray-200">
                <Link to={node.frontmatter.slug}>
                  <div className="flex flex-col items-center rounded overflow-hidden shadow-lg">
                    <div className="text-9xl px-6 py-3 text-center">{node.frontmatter.kanji}</div>
                    <div className="text-sm text-gray-400 px-6 py-2">"{node.frontmatter.english}"</div>
                  </div>
                </Link>
            </article>
          ))
        }
      </div>
    </Layout>
  )
}

export const Head = () => <title>Kanjis</title>

export default KanjiPage