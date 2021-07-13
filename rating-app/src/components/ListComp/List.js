import ReactStars from "react-rating-stars-component";
import React from "react";

import "./List.css";

function List(props) {

  const { comments } = props;



  return (
    <div>
      <ul>
        <h3>{comments.length === 0 ? "Henüz hiç yorum yok." : ""}</h3>
        {props.comments.map((comment, index) => {
          return (
            <div key={comment.id}>
              <li >{comment.text}</li>
              <li className="List">
                <ReactStars
                  count={5}
                  edit={false}
                  size={30}
                  activeColor="#ffd700"
                  value={comment.vote}
                />
              </li>
              <br />
            </div>
          );
        })}
      </ul>
     
    </div>
  );
}

export default List;
