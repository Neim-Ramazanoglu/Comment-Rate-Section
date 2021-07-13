import React, {useRef, useState} from "react";
import ReactStars from "react-rating-stars-component";


const Form =({yorum, ratingChanged, handleComment, inputValue, change, vote, comments, resetState}) => {
    const [input, setInput] = useState ("");
    const handleSubmit = (event) => {
        
        event.preventDefault();
        if(input.split("").length < 3 && input.split("").length === 0){
            alert("Yorumunuz boş olamaz");
        }
        
        if(input.split("").length !== 0 && input.split("").length < 3){
            alert("Yorumunuz çok kısa");
        }
        if (vote && input.split("").length > 3){
            handleComment()
        } 
        resetState();
        setInput("");
    };

function handleChange(e) {
    const {value} = e.target;
    setInput(value);
    
    if(value.split("").length > 3 ) {
        change(value);
        
    }
   
    
}


return (
    <form onSubmit={handleSubmit}>
         <input type="text" value={input} onChange={(e) => handleChange(e)} id="yorum" />
      <br></br>

      <div className="stars">
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={40}
          activeColor="#ffd700"
          
        />
      </div>
      <br></br>
      <button type="submit">Gönder</button>
    </form>
);
};

export default Form;