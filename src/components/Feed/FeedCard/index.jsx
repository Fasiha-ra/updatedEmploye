import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import imag from "../../../assets/blog/blogLogo.png";
import comment from "../../../assets/blog/comment.png";
import like from "../../../assets/blog/like.png";
import report from "../../../assets/blog/report.png";
import { FeedCardWrap } from "./FeedCard.styles";
import axios from "axios";
import { serverDomain } from "../../../constant/server-domain";

const FeedCard = ({ data, setRefresh, currentUser }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [liked, setLiked] = useState(data?.likedByCurrentUser || false);
  const [likeCount, setLikeCount] = useState(data?.likeCount || 0);

  const handleToggle = () => {
    setIsExpanded((prevState) => !prevState);
  };

  const handleLike = async () => {
    try {
      console.log("Like button clicked"); // Debug log
      const res = await axios.put(
        `${serverDomain}/forum/${data.id}/toggleLike`,
        { userId: currentUser },
        { headers: { "Content-Type": "application/json" } }
      );
      console.log("API response:", res); // Debug log
      setLiked((prevLiked) => !prevLiked);
      setLikeCount((prevCount) => prevCount + (liked ? -1 : 1));
      setRefresh((prev) => !prev);
    } catch (error) {
      console.log("Error:", error); // Debug log
    }
  };

  return (
    <FeedCardWrap>
      <div className="post">
        <div className="blogHeader">
          <div className="logo">
            <img src={imag} alt="blog" />
            <div className="titleHolder">
              <h5>Works at TCS</h5>
              <div className="tags">
                <span className="tag">{data?.tags}</span>
              </div>
            </div>
          </div>
          <div className="icon">
            <BsThreeDotsVertical />
          </div>
        </div>
        <div className="para">
          <p>
            {data?.title || "School Management System"}
          </p>
        </div>
        <div className="flex">
          <div className="replyWrap">
            <button className="reply" onClick={handleLike}>
              <img src={like} alt="like" />
              {liked ? "Unlike" : "Like"}
            </button>
            <button className="reply">
              <img src={comment} alt="comment" />
              Comment
            </button>
            <button className="reply">
              <img src={report} alt="report" />
              Report
            </button>
          </div>
          <div className="counts">
            <span>
              {likeCount} likes | {data?.reportCount} reports
            </span>
          </div>
        </div>
      </div>
    </FeedCardWrap>
  );
};

export default FeedCard;
