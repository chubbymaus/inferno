import React, { Component } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Archive from "../components/Blog/Archive"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default class PostLayout extends Component {
  render() {
    const { contentfulBlog } = this.props.data
    return (
      <Layout>
        <div className="blog-content container is-fluid">
          <div className="columns">
            <div className="column is-three-quarters">
              <h1 className="title">{contentfulBlog.title}</h1>

              <div
                dangerouslySetInnerHTML={{
                  __html: contentfulBlog.body.childMarkdownRemark.html,
                }}
              />
              <br />
              <Link to="/blog" className="return-link">
                <div className="subtitle has-text-dark">
                  <FontAwesomeIcon icon={["far", "arrow-left"]} />
                  <span> Back to blog post listing</span>
                </div>
              </Link>
              <br />
            </div>
            <div className="column is-one-quarter">
              <Archive />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query blogPostQuery($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      slug
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
