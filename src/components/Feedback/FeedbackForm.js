import { useState, useContext, useEffect } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../../store/feedback-context";

let isBtnDisabled = true;

function FeedbackForm() {
  const [rating, setRating] = useState(10);
  const [review, setReview] = useState("");
  const [error, setError] = useState("");

  const { itemToEdit, onAddFeedbackItem, onUpdateFeedbackItem } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (itemToEdit) {
      setRating(itemToEdit.rating);
      setReview(itemToEdit.text);
      isBtnDisabled = false;
    }
  }, [itemToEdit]);

  const selectRatingHandler = (rating) => {
    setRating(rating);
  };

  const setReviewHandler = (e) => {
    const value = e.target.value;

    if (value === "") {
      setError(null);
      isBtnDisabled = true;
    } else if (value.trim().length < 10) {
      setError("Text must be at least 10 characters.");
      isBtnDisabled = true;
    } else {
      setError(null);
      isBtnDisabled = false;
    }
    setReview(value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (review.trim().length > 10) {
      const newFeedback = {
        rating,
        text: review,
      };

      if (itemToEdit) {
        onUpdateFeedbackItem(itemToEdit.id, newFeedback);
      } else {
        onAddFeedbackItem(newFeedback);
      }

      setRating(10);
      setReview("");
    }
  };

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <h2>How would you rate the service with us?</h2>
        <RatingSelect onSelect={selectRatingHandler} selected={rating} />
        <div className="input-group">
          <input
            type="text"
            value={review}
            placeholder="Write a review"
            onChange={setReviewHandler}
          />
          <Button type="submit" isDisabled={isBtnDisabled} version="primary">
            Send
          </Button>
        </div>

        {error && <div className="message">{error}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
