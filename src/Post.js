import React, { forwardRef } from "react";
import { Avatar, Badge } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./css/post.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";
import CommentIcon from "@mui/icons-material/Comment";
import { useState } from "react";
import { ThumbUp } from "@mui/icons-material";

const Post = forwardRef(({ name, descrption, message, photoURL }, ref) => {
  let [num, setNum] = useState(0);
  let [count, setCount] = useState(0);

  function like() {
    setCount(count === 0 ? count + 1 : count - 1);
  }
  // let incNum =()=>{
  // setNum(Number(num)+1);

  // };
  return (
    <div className="post" ref={ref}>
      <div className="post_header">
        <div className="post_headerleft">
          <Avatar src={photoURL} />
          <div className="post_profile_details">
            <h3>{name}</h3>
            <p> {descrption}</p>
          </div>
        </div>
        <MoreVertIcon />
      </div>
      <div className="post_body">
        <p>{message}</p>
      </div>
      <div className="post_foter">
        <div className="post_foter_option" onClick={like}>
          <Badge badgeContent={count} color="primary">
            <ThumbUp size={22} />
          </Badge>
        </div>
        <div className="post_foter_option">
          <ShareIcon />
          <span>share</span>
        </div>
        <div className="post_foter_option">
          <SendIcon />
          <span>send</span>
        </div>
        <div className="post_foter_option">
          <CommentIcon />
          <span>comment</span>
        </div>
      </div>
    </div>
  );
});

export default Post;
