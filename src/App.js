import './App.css';
import Header from './Components/Header/Header.jsx';
import NewFeeds from './Components/NewFeeds/NewFeeds.jsx';
import FormAddPost from './Components/FormAddPost/FormAddPost.jsx';
import SideBarLeft from './Components/SideBarLeft/SideBarLeft.jsx';
import SideBarRight from './Components/SideBarRight/SideBarRight.jsx';
import { useState, useEffect } from 'react';
import Story from './Components/Story/Story.jsx';

function App() {
  const [showAdd, setShowAdd] = useState(false);
  const [post, setPost] = useState(false)
  const [currentPost, setCurrentPost] = useState({
    text : '',
    img : '',
    like: 0,
    comment: [], 
    disableLike: true, 
    showfixDel: false,
    showLike : false,
    likeComment: 0,
  })

  let localStorageData = JSON.parse(localStorage.getItem('postLists'));
  const [postLists, setPostLists] = useState( localStorageData===null ? [
    
    {
      id: 0,
      text: 'Một ngày vui vẻ nha mọi người',
      img: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg',
      like: 5,
      comment: [],
      disabledLike: true,
      showfixDel: false,
      likeComment: 0,
    },
    {
      id: 1,
      text: 'one chút kute :3',
      img: 'https://images.unsplash.com/photo-1561389881-a5d8d5549588?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
      like: 6,
      comment: [], 
      showfixDel: false,
      disabledLike: true
    },
  ]: localStorageData)

  useEffect(() => {
  localStorage.setItem('postLists', JSON.stringify(postLists))
  setPostLists(postLists)
  }, [postLists])
  return (
    <div className="wrapper">
      <Header></Header>
      <div className="main__body">
        <div className="scroll_left">
          <SideBarLeft></SideBarLeft>
        </div>
        <div className="post__infor">
          <div className="story_main">
            <Story></Story>
          </div>
          <div className="formAddPost">
            <FormAddPost postLists={postLists} setPostLists={setPostLists} showAdd={showAdd} setShowAdd={setShowAdd} currentPost={currentPost} setCurrentPost={setCurrentPost} post={post} setPost={setPost}/>
          </div>
          <div className="newFeeds">
            <NewFeeds postLists={postLists} setPostLists={setPostLists}  showAdd={showAdd} setShowAdd={setShowAdd} currentPost={currentPost} setCurrentPost={setCurrentPost} post={post} setPost={setPost}/>
          </div>
        </div>
        <div className="right">
          <SideBarRight></SideBarRight>
        </div>
      </div>
    </div>
  );
}

export default App;
