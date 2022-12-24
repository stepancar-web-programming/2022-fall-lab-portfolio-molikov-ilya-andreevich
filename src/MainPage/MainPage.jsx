import React from 'react';
import Post from './Post/Post';
import style from './MainPage.module.css';

function MainPage(props) {
  const posts = props.main.posts.map((el) => <Post post={el} like={props.like} />);
  return (
    <div className={style.main}>
      {posts}
    </div>
  );
}

export default MainPage;
