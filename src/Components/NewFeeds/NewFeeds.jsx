import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { faCommentAlt } from '@fortawesome/free-regular-svg-icons'
import { faEllipsisH, faLock, faShare, faThumbsUp, faSmile, faCamera, faFileContract, faMinusCircle, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import './NewFeeds.css'

const NewFeeds = ({postLists, setPostLists, showAdd, setShowAdd, setCurrentPost}) => {

  const [commentTI, setCommentTI] = useState("")
  const [commentImg, setCommentImg] = useState("")
  const [showWriteComment, setShowWriteComment] = useState(false)

  const countLike = (index) => {
    const newPost = [...postLists]
    const x = newPost[index].like
    newPost[index].like = x + 1
    newPost[index].disabledLike = false;
    newPost[index].showLike = true;
    setPostLists(newPost)
  }

  const onChangeCmt = (event) => {
    var url = URL.createObjectURL(event.target.files[0]);
    setCommentImg(url)
  }

  const showComment = (e, index) => {
    console.log(e);
    const newPost = [...postLists]
    if (e.charCode === 13 && e.target.value !== "") {
      setShowWriteComment(true)
      newPost[index].comment.push(e.target.value)
      setPostLists(newPost)
      setCommentTI("")
    }
  }

  const fixStatus = (index) => {
    const newPost = [...postLists]
    setShowAdd(!showAdd)
    newPost[index].showfixDel = false
    setCurrentPost({
      id: newPost[index].id,
      text: newPost[index].text,
      img: newPost[index].img,
      like: newPost[index].like,
      comment: newPost[index].comment,
      showfixDel: newPost[index].showfixDel,
      showLike: newPost[index].showLike
    })
    newPost.splice(index, 1)
    setPostLists(newPost)
    console.log(postLists);
  }

  const DelStatus = (index) => {
    const newPost = [...postLists]
    newPost.splice(index, 1)
    newPost[index].showfixDel = false
    setPostLists(newPost)
  }

  const ShowDetail = (index) => {
    const newPost = [...postLists]
    newPost[index].showfixDel = true
    setPostLists(newPost)
  }

  const HideDetail = (index) => {
    const newPost = [...postLists]
    newPost[index].showfixDel = false
    setPostLists(newPost)
  }

  return (
    <div>
      {
        postLists.map((post, index) => {
          return (
            <>
              <div className="mainBody_box">
                <div className="personal_one5">
                  <div>
                    <img
                      className="user__avatar5"
                      src="images\avata.jpg"
                      alt=""
                    />
                  </div>
                  <div className="post__option5">
                    <p>Nguyễn Huyền Trang</p>
                    <div className="post__time5">
                      <p>30 tháng 9 lúc 15:27</p>
                      <div className="post__mode5">
                        <FontAwesomeIcon icon={faLock} />
                      </div>
                    </div>
                  </div>
                  <div className="fixDel" onClick={() => ShowDetail(index)} > <FontAwesomeIcon icon={faEllipsisH} /></div>
                  <div>
                    {
                      post.showfixDel ? (
                        <div className="detailFix">
                          <div className="exit_search" onClick={() => HideDetail(index)}><FontAwesomeIcon icon={faTimes} /></div>
                          <div onClick={() => fixStatus(index)}>
                            <p> Chỉnh sửa bài viết</p>
                          </div>
                          <div onClick={() => DelStatus(index)}>
                            <p>Xoá bài viết</p>
                          </div>
                        </div>
                      ) : null
                    }
                  </div>
                </div>
                <div className="my__status">
                  <span>{post.text}</span>
                  <div class="newFeedsImg">
                    <img src={post.img} alt="" />
                  </div>
                </div>
                <div>
                  {
                    post.showLike ? (
                      <div className="numberLikes">
                        <div >
                          <img
                            src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e"
                            alt="" />
                        </div>
                        <div className="reactions">Bạn và {post.like} người khác</div>
                      </div>
                    ) : null
                  }
                </div>
                <div className="distance_img_react"><hr /></div>
                <div className="react_fb">
                  <div className="emotionsLike" onClick={() => countLike(index)}>
                    <button disabled={!post.like}>
                      <FontAwesomeIcon icon={faThumbsUp} />
                      <span>Thích</span>
                    </button>
                  </div>
                  <div className="emotions">
                    <button >
                      <FontAwesomeIcon icon={faCommentAlt} />
                      <span>Bình luận</span>
                    </button>
                  </div>
                  <div className="emotions">
                    <button>
                      <FontAwesomeIcon icon={faShare} />
                      <span>Chia sẻ</span>
                    </button>
                  </div>
                </div>
                <div className="distance_img_react"><hr /></div>
                <div>
                  {
                    showWriteComment ? (
                      post.comment.map((item) => {
                        return (
                          <>
                            <div className="showComment comment">
                              <div class="img__comment">
                                <img
                                  className="user__avatar5"
                                  src="images/avata.jpg"
                                  alt=""
                                />
                              </div>
                              <div>
                                <div className="fullComment">
                                  <p>Nguyễn Huyền Trang</p>
                                  <div style={{ fontSize: "15px", marginBottom: "2px" }}>{item}</div>
                                </div>
                                <div style={{ fontWeight: "700", color: "#65676B", fontSize: "13px", padding: "0px 20px", display: "flex" }}>
                                  <div style={{ marginRight: "8px", fontSize: "13px" }}><span>Thích . </span></div>
                                  <div style={{ marginRight: "8px", fontSize: "13px" }}><span>Phản hồi </span></div>
                                </div>
                              </div>
                            </div>
                          </>
                        )
                      })
                    ) : null
                  }
                </div>
                <div className="comment">
                  <div class="img__comment">
                    <img
                      className="user__avatar5"
                      src="images/avata.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <div className="btn__comment" >
                      <div className="icon">
                        <div className="iconComment1">
                          <div className="iconComment"><FontAwesomeIcon icon={faCamera} /></div>
                          <input type="file" id={commentImg} name="myfile" onChange={onChangeCmt} onKeyPress={(e) => showComment(e, post.id)} />
                        </div>
                        <div className="iconComment"><FontAwesomeIcon icon={faSmile} /></div>
                        <div className="iconComment"><FontAwesomeIcon icon={faFileContract} /></div>
                        <div className="iconComment"><FontAwesomeIcon icon={faMinusCircle} /></div>
                        <div className="iconComment"><FontAwesomeIcon icon={faInstagramSquare} /></div>
                      </div>
                      <input type="text" value={commentTI} placeholder="Viết bình luận..." onKeyPress={(e) => showComment(e, index)} onChange={(e) => setCommentTI(e.target.value)}>
                      </input>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        })
      }
    </div>
  )
}
export default NewFeeds;


