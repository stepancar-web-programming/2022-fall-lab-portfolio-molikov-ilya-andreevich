import React from "react";
import style from "./Post.module.css"
import {Button} from "react-bootstrap";


const Post = (props) => {
    let counter = props.post.counter;
    let like = () => {
        counter++;
        props.like(props.post.id);
    }
    if (props.post.isVideo === 0) {
        return (
            <div className={style.MainPost}>
                <div className={style.imgContainer}>
                    <img className={style.img} src={props.post.src}/>
                </div>
                <div>{props.post.text}</div>
                <div className={style.like}>{counter} <Button variant="secondary" onClick={like}>Like!</Button></div>
            </div>
        )
    } else {
        return (
            <div className={style.MainPost}>
                <div className={style.imgContainer}>
                    <video className={style.img} controls>
                        <source src={props.post.src} type="video/mp4"/>
                    </video>
                </div>
                <div>{props.post.text}</div>
                <div className={style.like}>{counter} <Button variant="secondary" onClick={like}>Like!</Button></div>
            </div>
        )
    }

}
export default Post;
