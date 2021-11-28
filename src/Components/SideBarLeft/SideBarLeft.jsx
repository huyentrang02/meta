import { } from '@fortawesome/free-brands-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './SideBarLeft.css'

const SideBarLeft = () => {
  const listGroup = [
    {
      img: 'images/cute3.jpg',
      name: '[ProPTIT] D18 D19 D20'
    },
    {
      img: 'images/cute3.jpg',
      name: '[ProPTIT] Ban Sự Kiện'
    },
    {
      img: 'images/cute3.jpg',
      name: 'BCH LCĐ Khoa CNTT1'
    },
    {
      img: 'images/cute3.jpg',
      name: 'Ban Truyền Thông ITIS'
    },
    {
      img: 'images/cute3.jpg',
      name: 'D19 PTIT Hà Nội'
    },
    {
      img: 'images/cute3.jpg',
      name: 'Number Stack'
    },
    {
      img: 'images/cute3.jpg',
      name: 'Đại Gia Đình ITIS'
    },
    {
      img: 'images/cute3.jpg',
      name: 'Snack Mania'
    },
    {
      img: 'images/cute3.jpg',
      name: 'Tricky Crew'
    },
    {
      img: 'images/cute3.jpg',
      name: 'UnBlock Woody'
    },
    {
      img: 'images/cute3.jpg',
      name: 'UNO'
    },
    {
      img: 'images/cute3.jpg',
      name: 'Rolling Ball'
    },

  ]
  return (
    <div className="sideBarLeft">
      <div className="name_user">
        <img
          className="user__avatar1"
          src="images/avata.jpg"
          alt=""
        />
        <p>Nguyễn Huyền Trang</p>
      </div>
      <div className="box">
        <div className="material__icons1">
          <div className="color1">
            <img
              className="user__avatar2"
              src="https://www.facebook.com/rsrc.php/v3/yx/r/-XF4FQcre_i.png"
              alt=""
            />
          </div>
          <div className="text"><p>Bạn bè</p></div>
        </div >
        <div className="material__icons1">
          <div className="color1">
            <img
              className="user__avatar2"
              src="https://www.facebook.com/rsrc.php/v3/yq/r/YF1bztyGuX-.png"
              alt=""
            />
          </div>
          <div className="text"><p>Messenger</p></div>
        </div>
        <div className="material__icons1">
          <div className="color1">
            <img
              className="user__avatar2"
              src="https://www.facebook.com/rsrc.php/v3/yD/r/mk4dH3FK0jT.png"
              alt=""
            />
          </div>
          <div className="text1">
            <p>Nhóm</p>
            <span>5 nhóm mới</span>
          </div>
        </div>
        <div className="material__icons1">
          <div className="color1">
            <img
              className="user__avatar2"
              src="https://www.facebook.com/rsrc.php/v3/ys/r/9BDqQflVfXI.png"
              alt=""
            />
          </div>
          <div className="text"><p>Marketplace</p></div>
        </div>
        <div className="material__icons1">
          <div className="color1">
            <img
              className="user__avatar2"
              src="https://www.facebook.com/rsrc.php/v3/yG/r/A1HlI2LVo58.png"
              alt=""
            />
          </div>
          <div className="text1">
            <p>Watch</p>
            <span>9+ video mới</span>
          </div>
        </div>
        <div className="material__icons1">
          <div className="angleDown"> <FontAwesomeIcon icon={faAngleDown} /></div>
          <div className="text"><p>Xem thêm</p></div>
        </div>
      </div>
      <div className="lineSpace"><hr /></div>
      <div className="sideBarDown">
        <div className="shortCuts"><p>Lối tắt của bạn</p></div>
        {
          listGroup.map((item) => {
            return (
              <div className="material__icons1">
                <div className="color1">
                  <img className="user__avatar2" src={item.img} alt="" />
                </div>
                <div className="text"><p>{item.name}</p></div>
              </div>
            )
          })
        }
      </div>
      <div className="material__icons1">
        <div className="angleDown"> <FontAwesomeIcon icon={faAngleDown} /></div>
        <div className="text"><p>Xem thêm</p></div>
      </div>
      <div className="finally_text">
        <p>Quyền riêng tư . Điều khoản . Quảng cáo . Lựa chọn quảng cáo . Cookie . Xem thêm . Facebook . 2021</p>
      </div>
    </div>

  )
}

export default SideBarLeft
