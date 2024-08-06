import React, { useEffect, useState } from "react";
import { BlogWrap } from "./Blog.styles";
import Button from "../../Button";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BlogData } from '../../Constant/Data';
import like from '../../../assets/blog/like.png';
import comment from '../../../assets/blog/comment.png';
import report from '../../../assets/blog/report.png';
import axios from "axios";
import { useAuth } from "../../../Context/AuthContext";
import { serverDomain } from "../../../constant/server-domain";

const Blog = () => {
  const [expandedPosts, setExpandedPosts] = useState({});
  const [post, setPost] = useState([]);
  const {currentUser, companyId} = useAuth();

  const handleToggle = (index) => {
    setExpandedPosts(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  const handleLike = async (postId) => {
    try {
      const res = await axios.put(
        `${serverDomain}/forum/${postId}/toggleLike`,
        { userId: currentUser },
        { headers: { "Content-Type": "application/json" } }
      );
      console.log(res);
     
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=> {
    (async()=> {
      try {
        
        const res = await axios.get(`${serverDomain}/forum?userId=${currentUser}&companyId=${companyId}`);
        
        console.log(res);
        setPost(res?.data?.forums);

      } catch (error) {
        console.log(error)
      }
    })()
  },[])

  return (
    <BlogWrap>
      <div className="post postBtn">
        <Button type="transparent">Anonymous Posts</Button>
      </div>
      {post?.map((value, index) => (
        <div className="post" key={index}>
          <div className="blogHeader">
            <div className="logo">
              <img src={BlogData[0].img} alt="blog" />
              <div className="titleHolder">
                <h5>{value.title}</h5>
                <div className="tags">
                  <span>{value.tags}</span>
                </div>
              </div>
            </div>
            <div className="icon">
              <BsThreeDotsVertical />
            </div>
          </div>
          <div className="para">
            <p>{expandedPosts[index] ? value.fullPara : `${BlogData[0].para.substring(0, 100)}...`}</p>
            <Button type="transparent" onClick={() => handleToggle(index)}>
              {expandedPosts[index] ? "see less" : "see more"}
            </Button>
          </div>
          <div className="replyWrap">
            <button className="reply" onClick={() => handleLike(value.id)}>
              <img src={like} alt="like" />
              Like {value?.likeCount}
            </button>
            <button  className="reply">
              <img src={comment} alt="comment" />
              Comment
            </button>
            <button  className="reply">
              <img src={report} alt="report" />
              Report
            </button>
          </div>
        </div>
      ))}
    </BlogWrap>
  );
};

export default Blog;
