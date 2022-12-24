import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import style from './Post.module.css';

function Post(props) {
  let { counter } = props.post;
  const [count, setCounter] = useState(counter);
  const like = () => {
    counter += 1;
    setCounter(counter);
    props.like(props.post.id);
  };
  if (props.post.isVideo === 0) {
    return (
      <div className={style.MainPost}>
        <div className={style.imgContainer}>
          <img alt="post card" className={style.img} src={props.post.src} />
        </div>
        <div>{props.post.text}</div>
        <div className={style.like}>
          {counter}
          {' '}
          <Button variant="secondary" onClick={like}>Like!</Button>
        </div>
      </div>
    );
  }
  return (
    <div className={style.MainPost}>
      <div className={style.imgContainer}>
        <video className={style.img} controls>
          <source src={props.post.src} type="video/mp4" />
        </video>
      </div>
      <div>{props.post.text}</div>
      <div className={style.like}>
        {count}
        {' '}
        <Button variant="secondary" onClick={like}>Like!</Button>
      </div>
    </div>
  );
}
export default Post;
