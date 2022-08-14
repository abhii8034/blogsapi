import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogItemDetails} = props
  const {id, imageUrl, avatarUrl, title, topic, author} = blogItemDetails

  return (
    <li className="blog-item">
      <Link to={`/blogs/${id}`} className="blog-item-link">
        <div className="item-container">
          <img alt={`item${id}`} className="item-image" src={imageUrl} />
          <div className="item-info">
            <p className="item-topic">{topic}</p>
            <p className="item-title">{title}</p>
            <div className="author-info">
              <img alt={`avatar${id}`} src={avatarUrl} className="avatar" />
              <p className="author-name">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem
