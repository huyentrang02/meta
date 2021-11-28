import { faEllipsisH, faSearch, faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SideBarRight.css'
import React from 'react'

const SideBarRight = () => {
  const listOnline = [
    {
      img: "images/cute1.jpg",
      name: 'Trần Minh Quang'
    },
    {
      img: "images/cute1.jpg",
      name: 'Uyên Nguyễn'
    },
    {
      img: "images/cute1.jpg",
      name: "Lê Xuân Minh"
    },
    {
      img: "images/cute1.jpg",
      name: 'Nguyễn Văn Lực'
    },
    {
      img: "images/cute1.jpg",
      name: 'Trần Văn Thắng'
    },
    {
      img: 'images/cute1.jpg',
      name: 'Nguyễn Văn Hậu'
    },
    {
      img: 'images/cute1.jpg',
      name: 'Nguyễn Quỳnh Mai'
    },
    {
      img: 'images/cute1.jpg',
      name: 'Nguyễn Đức'
    },
    {
      img: 'images/cute1.jpg',
      name: 'Vũ Hạnh'
    },
    {
      img: 'images/cute1.jpg',
      name: 'Lê Hoa'
    },
    {
      img: 'images/cute1.jpg',
      name: 'Phương Hoa'
    },
    {
      img: "images/cute1.jpg",
      name: 'Diệp Đào'
    },
    {
      img: "images/cute1.jpg",
      name: 'Bích Hảo'
    },
    {
      img: "images/cute1.jpg",
      name: 'Giang Nguyễn'
    },
    {
      img: "images/cute1.jpg",
      name: "Đặng Công Danh"
    },

  ]

  return (
    <div className="box_sideBarRight">
      <div className="listAddFriends">
        <div className="addFriends">
          <div>
            <img src="https://www.facebook.com/rsrc.php/v3/yk/r/851ZgTnFYJI.png"
              alt="" />
          </div>
          <div><p>Lời mời kết bạn</p></div>
          <div className="ellipsish"> <FontAwesomeIcon icon={faEllipsisH} /></div>
        </div>
        <div className="user_add_friends">
          <div>
            <img src="https://images.unsplash.com/photo-1633618272529-6856bffc63df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80" alt="" />
          </div>
          <div className="infor_add_friends">
            <div className="name_time">
              <div className="name">
                <p>Lê Hoa</p>
                <span>70 bạn chung</span>
              </div>
              <div className="time">
                <p>7 giờ</p>
              </div>
            </div>
            <div className="btn_friends">
              <button>Xác nhận</button>
              <button>Xóa</button>
            </div>
          </div>
        </div>
      </div>
      <div className="hr_tag"><hr /></div>
      <div className="advertise">
        <p>Được tài trợ</p>
        <div className="content_adver">
          <div>
            <img src="https://images.unsplash.com/photo-1543467214-b247439848dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
          </div>
          <div className="text_adver">
            <p>SHEIN Vietnam</p>
            <span>shein.com.vn</span>
          </div>
        </div>
      </div>
      <div className="hr_tag"><hr /></div>
      <div className="listFriends">
        <div className="contact_friends">
          <p>Người liên hệ</p>
          <div className="contact_icons"> <FontAwesomeIcon icon={faVideo} /></div>
          <div className="contact_icons"> <FontAwesomeIcon icon={faSearch} /></div>
          <div className="contact_icons"> <FontAwesomeIcon icon={faEllipsisH} /></div>
        </div>
        <div>
          {
            listOnline.map((item) => {
              return (
                <>
                  <div className="avt_friends">
                    <div>
                      <img src={item.img} alt="" />
                    </div>
                    <div className="online_green"></div>
                    <p>{item.name}</p>
                  </div>
                </>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default SideBarRight
