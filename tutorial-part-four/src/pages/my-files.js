import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>
        <h1>My site's files</h1>
        <table>
          <thead>
            <tr>
              <th>relativePath</th>
              <th>prettySize</th>
              <th>extension</th>
              <th>birthTime</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map((edge, index) => {
              const { relativePath, prettySize, extension, birthTime } = edge.node
              return (
                <tr key={index}>
                  <td>{relativePath}</td>
                  <td>{prettySize}</td>
                  <td>{extension}</td>
                  <td>{birthTime}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          extension
          prettySize
          birthTime(fromNow: true)
        }
      }
    }
  }
`
