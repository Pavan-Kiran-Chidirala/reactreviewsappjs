// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {id: 0}

  onLeftButton = () => {
    const {id} = this.state
    if (id !== 0) {
      this.setState(prevState => ({id: prevState.id - 1}))
    }
  }

  onRightButton = length => {
    const {id} = this.state
    if (id !== length - 1) {
      this.setState(prevState => ({id: prevState.id + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {id} = this.state
    const lengths = reviewsList.length
    const filteredList = reviewsList.filter(
      eachObject => reviewsList.indexOf(eachObject) === id,
    )
    const {imgUrl, username, companyName, description} = filteredList[0]
    return (
      <div className="main-container">
        <div className="inner-holder">
          <h1 className="main-heading">Reviews</h1>
          <div className="review-holder">
            <img src={imgUrl} className="image" alt={username} />
            <div className="button-holder">
              <button
                type="button"
                testid="leftArrow"
                className="btn"
                onClick={this.onLeftButton}
              >
                <img
                  className="image2"
                  src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                  alt="left arrow"
                />
              </button>
              <p className="username">{username}</p>
              <button
                type="button"
                testid="rightArrow"
                className="btn"
                onClick={() => this.onRightButton(lengths)}
              >
                <img
                  className="image2"
                  src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
                  alt="right arrow"
                />
              </button>
            </div>
            <p className="company-name">{companyName}</p>
            <p className="description">{description}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
