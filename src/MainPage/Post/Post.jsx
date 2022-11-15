import React from "react";
import style from "./Post.module.css"
import {Button} from "react-bootstrap";


const Post = (props) => {
    let counter=props.post.counter;
    let like =()=>{

        counter++;
        props.like(props.post.id);
    }
    return (
        <div className={style.MainPost}>
            <img className={style.img} src={props.post.img}/>
            <div className={style.text}>{props.post.text}</div>
            <div className={style.like}>{counter} <Button  variant="secondary" onClick={like}>Like!</Button></div>
        </div>
    )
}
export default Post;
