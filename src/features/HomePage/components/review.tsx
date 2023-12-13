import React, { useState } from "react";
import { CustomButton } from "../../../Components/Button/customButton";

const Review = () => {
  const [textareaVisibility, setTextareaVisibility] = useState(false);
  const [review, setReview] = useState("");

  function toggleTextAreaVisibility() {
    setTextareaVisibility(!textareaVisibility);
  }

  function handleReviewChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setReview(e.target.value);
  }

  return (
    <div className=" fixed bottom-8 left-8">
      <CustomButton
        text={textareaVisibility ? "Hide review" : "Write review"}
        height={8}
        width={32}
        onClick={toggleTextAreaVisibility}
      ></CustomButton>
      {textareaVisibility && (
        <textarea
          value={review}
          cols={20}
          rows={4}
          placeholder="write your review here"
          onChange={handleReviewChange}
        ></textarea>
      )}
    </div>
  );
};

export default Review;
