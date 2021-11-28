import React, { useState } from 'react';
import './Header.css'
import { faSearch, faBell, faTh, faTimes, faLongArrowAltLeft,faSortDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  const [showSearch, setShowSearch] = useState(false)
  const [listSearch, setListSearch] = useState([
    {
      id: 0,
      img: 'images/cute4.jpg',
      name: '[ProPTIT] D18 D19 D20',
    },
    {
      id: 1,
      img: "images/cute4.jpg",
      name: 'Trần Minh Quang'
    },
    {
      id: 2,
      img: "images/cute4.jpg",
      name: 'Uyên Nguyễn'
    },
    {
      id: 3,
      img: 'images/cute4.jpg',
      name: 'Liên chi Đoàn Khoa CNTT1',
    },
    {
      id: 4,
      img: 'images/cute4.jpg',
      name: 'Lê Hoa'
    },
    {
      id: 5,
      img: 'images/cute4.jpg',
      name: 'Phương Hoa'
    },
    {
      id: 6,
      img: "images/cute4.jpg",
      name: 'Bích Hảo'
    },
  ])

  const DelItem = (index) => {
    const newList = [...listSearch]
    newList.splice(index, 1)
    setListSearch(newList)
  }

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        />
        <div className="header__input">
          <div classs="header__input__search1"><FontAwesomeIcon icon={faSearch} /></div>
          <input type="text" placeholder="Tìm kiếm trên facebook" onClick={() => setShowSearch(true)} />
        </div>
      </div>

      <div className="header__middle">
        <div className="header__option" style={{ color: 'blue' }}>
          <svg viewBox="0 0 28 28" height="28" width="28" >
            <path d="M25.825 12.29C25.824 12.289 25.823 12.288 25.821 12.286L15.027 2.937C14.752 2.675 14.392 2.527 13.989 2.521 13.608 2.527 13.248 2.675 13.001 2.912L2.175 12.29C1.756 12.658 1.629 13.245 1.868 13.759 2.079 14.215 2.567 14.479 3.069 14.479L5 14.479 5 23.729C5 24.695 5.784 25.479 6.75 25.479L11 25.479C11.552 25.479 12 25.031 12 24.479L12 18.309C12 18.126 12.148 17.979 12.33 17.979L15.67 17.979C15.852 17.979 16 18.126 16 18.309L16 24.479C16 25.031 16.448 25.479 17 25.479L21.25 25.479C22.217 25.479 23 24.695 23 23.729L23 14.479 24.931 14.479C25.433 14.479 25.921 14.215 26.132 13.759 26.371 13.245 26.244 12.658 25.825 12.29"></path>
          </svg>
        </div>
        <div className="header__option">
          <svg viewBox="0 0 28 28" height="28" width="28">
            <path d="M20.34 22.428c.077-.455.16-1.181.16-2.18 0-1.998-.84-3.981-2.12-5.41-.292-.326-.077-.838.36-.838h2.205C24.284 14 27 16.91 27 20.489c0 1.385-1.066 2.51-2.378 2.51h-3.786a.496.496 0 01-.495-.571zM20 13c-1.93 0-3.5-1.794-3.5-4 0-2.467 1.341-4 3.5-4s3.5 1.533 3.5 4c0 2.206-1.57 4-3.5 4zm-9.5-1c-2.206 0-4-2.019-4-4.5 0-2.818 1.495-4.5 4-4.5s4 1.682 4 4.5c0 2.481-1.794 4.5-4 4.5zm2.251 2A6.256 6.256 0 0119 20.249v1.313A2.44 2.44 0 0116.563 24H4.438A2.44 2.44 0 012 21.562v-1.313A6.256 6.256 0 018.249 14h4.502z"></path>
          </svg>
          <div className="number_contact">12</div>
        </div>
        <div className="header__option ">
          <svg viewBox="0 0 28 28" height="28" width="28">
            <path d="M5.75 4A.75.75 0 015 3.25v-1a.75.75 0 011.5 0v1a.75.75 0 01-.75.75zm.75 11.251a.75.75 0 01-1.5 0V8.749a.75.75 0 011.5 0v6.502zM5.75 28a.75.75 0 01-.75-.75v-6.5a.75.75 0 011.5 0v6.5a.75.75 0 01-.75.75zm15.737-16.234L23.214 6.5H9.5v11h13.715l-1.728-5.266a.749.749 0 010-.468zM4.75 5h19.5a.75.75 0 01.713.986l-1.974 6.006 1.974 6.023a.75.75 0 01-.713.985H4.75a.75.75 0 010-1.502L8 17.5v-11H4.75a.749.749 0 110-1.5z"></path>
          </svg>
        </div>
        <div className="header__option ">
          <svg viewBox="0 0 28 28" height="28" width="28">
            <path d="M8.75 25.25C8.336 25.25 8 24.914 8 24.5 8 24.086 8.336 23.75 8.75 23.75L19.25 23.75C19.664 23.75 20 24.086 20 24.5 20 24.914 19.664 25.25 19.25 25.25L8.75 25.25ZM17.163 12.846 12.055 15.923C11.591 16.202 11 15.869 11 15.327L11 9.172C11 8.631 11.591 8.297 12.055 8.576L17.163 11.654C17.612 11.924 17.612 12.575 17.163 12.846ZM21.75 20.25C22.992 20.25 24 19.242 24 18L24 6.5C24 5.258 22.992 4.25 21.75 4.25L6.25 4.25C5.008 4.25 4 5.258 4 6.5L4 18C4 19.242 5.008 20.25 6.25 20.25L21.75 20.25ZM21.75 21.75 6.25 21.75C4.179 21.75 2.5 20.071 2.5 18L2.5 6.5C2.5 4.429 4.179 2.75 6.25 2.75L21.75 2.75C23.821 2.75 25.5 4.429 25.5 6.5L25.5 18C25.5 20.071 23.821 21.75 21.75 21.75Z"></path>
          </svg>
          <div className="number_contact">9+</div>
        </div>
        <div className="header__option ">
          <svg viewBox="0 0 28 28" height="28" width="28">
            <path d="M25.5 14C25.5 7.649 20.351 2.5 14 2.5 7.649 2.5 2.5 7.649 2.5 14 2.5 20.351 7.649 25.5 14 25.5 20.351 25.5 25.5 20.351 25.5 14ZM27 14C27 21.18 21.18 27 14 27 6.82 27 1 21.18 1 14 1 6.82 6.82 1 14 1 21.18 1 27 6.82 27 14ZM7.479 14 7.631 14C7.933 14 8.102 14.338 7.934 14.591 7.334 15.491 6.983 16.568 6.983 17.724L6.983 18.221C6.983 18.342 6.99 18.461 7.004 18.578 7.03 18.802 6.862 19 6.637 19L6.123 19C5.228 19 4.5 18.25 4.5 17.327 4.5 15.492 5.727 14 7.479 14ZM20.521 14C22.274 14 23.5 15.492 23.5 17.327 23.5 18.25 22.772 19 21.878 19L21.364 19C21.139 19 20.97 18.802 20.997 18.578 21.01 18.461 21.017 18.342 21.017 18.221L21.017 17.724C21.017 16.568 20.667 15.491 20.067 14.591 19.899 14.338 20.067 14 20.369 14L20.521 14ZM8.25 13C7.147 13 6.25 11.991 6.25 10.75 6.25 9.384 7.035 8.5 8.25 8.5 9.465 8.5 10.25 9.384 10.25 10.75 10.25 11.991 9.353 13 8.25 13ZM19.75 13C18.647 13 17.75 11.991 17.75 10.75 17.75 9.384 18.535 8.5 19.75 8.5 20.965 8.5 21.75 9.384 21.75 10.75 21.75 11.991 20.853 13 19.75 13ZM15.172 13.5C17.558 13.5 19.5 15.395 19.5 17.724L19.5 18.221C19.5 19.202 18.683 20 17.677 20L10.323 20C9.317 20 8.5 19.202 8.5 18.221L8.5 17.724C8.5 15.395 10.441 13.5 12.828 13.5L15.172 13.5ZM16.75 9C16.75 10.655 15.517 12 14 12 12.484 12 11.25 10.655 11.25 9 11.25 7.15 12.304 6 14 6 15.697 6 16.75 7.15 16.75 9Z"></path>
          </svg>
          <div className="number_contact">9+</div>
        </div>
      </div>

      <div className="header__info">
        <div className="header__user distance">
          <div>
            <img
              className="user__avatar"
              src="images/avata.jpg"
              alt=""
            />
          </div>
          <div><h4>Trang</h4></div>
        </div>
        <div className="header__connect">
          <FontAwesomeIcon icon={faTh} />
        </div>
        <div className="header__connect1" >
          <svg >
            <path d="M14 2.042c6.76 0 12 4.952 12 11.64S20.76 25.322 14 25.322a13.091 13.091 0 0 1-3.474-.461.956 .956 0 0 0-.641.047L7.5 25.959a.961.961 0 0 1-1.348-.849l-.065-2.134a.957.957 0 0 0-.322-.684A11.389 11.389 0 0 1 2 13.682C2 6.994 7.24 2.042 14 2.042ZM6.794 17.086a.57.57 0 0 0 .827.758l3.786-2.874a.722.722 0 0 1 .868 0l2.8 2.1a1.8 1.8 0 0 0 2.6-.481l3.525-5.592a.57.57 0 0 0-.827-.758l-3.786 2.874a.722.722 0 0 1-.868 0l-2.8-2.1a1.8 1.8 0 0 0-2.6.481Z"></path>
          </svg>
          <div className="number_contact2">3</div>
        </div>
        <div className="header__connect ">
          <FontAwesomeIcon icon={faBell} />
          <div className="number_contact2">1</div>
        </div>
        <div className="sort">
          <FontAwesomeIcon icon={faSortDown} />
          <div className="number_contact3"></div>
        </div>
      </div>
      <div>
        {
          showSearch ? (
            <div className="last_recently_search">
              <div className="arrow_left">
                <div onClick={() => setShowSearch(false)} className="longArrowLeft">
                  <FontAwesomeIcon icon={faLongArrowAltLeft} />
                </div>
                <div className="header__input">
                  <div classs="header__input__search1"><FontAwesomeIcon icon={faSearch} /></div>
                  <input type="text" placeholder="Tìm kiếm trên facebook" onClick={() => setShowSearch(true)} />
                </div>
              </div>
              <div className="document">
                <span>Tìm kiếm gần đây</span>
                <p>Chỉnh sửa</p>
              </div>
              <div>
                {
                  listSearch.map((item, index) => {
                    return (
                      <div className="content_search">
                        <div>
                          <img src={item.img} alt="" />
                        </div>
                        <div><p>{item.name}</p></div>
                        <div className="exit_search" onClick={() => DelItem(index)}>
                          <FontAwesomeIcon icon={faTimes} />
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          ) : null
        }
      </div>
    </div>
  );
}

export default Header;