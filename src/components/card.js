import * as React from "react"
import { Link } from "gatsby"

const Card = ({ post }) => {
  const p = post.post
  const title = p.frontmatter.title || p.fields.slug
  return (
    <li key={p.fields.slug}>
      <Link className="link-override" to={p.fields.slug} itemProp="url">
        <article
          className="card"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header>
            <h2 className="card-title">
              <span
                itemProp="headline"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </h2>
            <small>{p.frontmatter.date}</small>
          </header>
          <section>
            <p
              className="card-content"
              dangerouslySetInnerHTML={{
                __html: p.frontmatter.description || p.excerpt,
              }}
              itemProp="description"
            />
          </section>
        </article>
      </Link>
    </li>
  )
}

export default Card
