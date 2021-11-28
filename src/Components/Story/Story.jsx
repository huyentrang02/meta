import React from 'react'
import './Story.css'

const Story = () => {
  return (
    <div className="feed">
      <div className="storyReel">
        <div className="story" style={{ backgroundImage: `url('images/cute2.jpg')` }}>
        </div>
      </div>
      <div className="story" style={{ backgroundImage: `url('images/cute2.jpg')` }}>
        <img
          className="user__avatar story__avatar"
          src="images/cute.jpg"
          alt=""
        />
        <h5>Nguyễn Mạnh Tuân</h5>
      </div>
      <div className="story" style={{ backgroundImage: `url('images/cute2.jpg')` }}>
        <img
          className="user__avatar story__avatar"
          src="images/cute.jpg"
          alt=""
        />
        <h5>Đỗ Thu Thảo</h5>
      </div>
      <div className="story" style={{ backgroundImage: `url('images/cute2.jpg')` }}>
        <img
          className="user__avatar story__avatar"
          src="images/cute.jpg"
          alt=""
        />
        <h5>Nguyễn Đức</h5>
      </div>
      <div className="story" style={{ backgroundImage: `url('images/cute2.jpg')` }}>
        <img
          className="user__avatar story__avatar"
          src="images/cute.jpg"
          alt=""
        />
        <h5>Nguyễn Giang</h5>
      </div>
    </div>
  )
}

export default Story
