import { useContext } from "react";
import FeedbackContext from "../../store/feedback-context";

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);

  const feedbackLength = feedback.length;

  let reviewText = "No Reviews";
  
  if (feedbackLength > 0) {
    reviewText =
      feedbackLength === 1 ? "1 Review" : `${feedbackLength} Reviews`;
  }

  const average = Math.round(
    feedback.reduce((acc, cur) => acc + cur.rating, 0) / feedbackLength
  );

  return (
    <div className="feedback-stats">
      <h4>{reviewText}</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

export default FeedbackStats;
