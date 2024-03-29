import React, { useState } from "react";
import { CustomButton } from "../../../Components/Button/customButton";
import { createReview } from "../../../services/api.services";

const Review = () => {
  const [textareaVisibility, setTextareaVisibility] = useState(false);
  const [review, setReview] = useState("");

  function toggleTextAreaVisibility() {
    setTextareaVisibility(!textareaVisibility);
  }

  function handleReviewChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setReview(e.target.value);
  }

  async function handleSubmit() {
    try {
      const response = await createReview(review);
      console.log(response.data);
    } catch (e: any) {
      console.error(e);
    }
  }

  return (
    <div className=" fixed bottom-8 left-8">
      <CustomButton
        text={textareaVisibility ? "Hide review" : "Write review"}
        height={7}
        width={12}
        onClick={toggleTextAreaVisibility}
      ></CustomButton>
      {textareaVisibility && (
        <form >
          <textarea className="border shadow-md m-2"
            value={review}
            cols={20}
            rows={4}
            placeholder="write your review here"
            onChange={handleReviewChange}
          ></textarea>
          <button
            className="border-2 p-1 rounded-xl block bg-indigo-300"
            type="submit"
            onClick={handleSubmit}
          >
            submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Review;
