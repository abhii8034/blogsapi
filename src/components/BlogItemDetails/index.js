import {Component} from 'react'

import Loader from 'react-loader-spinner'

import './index.css'

class BlogItemDetails extends Component {
  state = {isLoading: true, blogsData: {}}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      title: data.title,
      content: data.content,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
    }
    this.setState({blogsData: updatedData, isLoading: false})
  }

  renderBlogItemDetails() {
    const {blogsData} = this.state
    const {title, imageUrl, avatarUrl, author, content} = blogsData

    return (
      <div className="blog-info">
        <h1 className="blog-details-title">{title}</h1>
        <div className="author-details">
          <img alt={author} src={avatarUrl} className="author-pic" />
          <p className="details-author-name">{author}</p>
        </div>
        <img alt={title} className="blog-image" src={imageUrl} />
        <p className="blog-content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="blog-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.renderBlogItemDetails()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
