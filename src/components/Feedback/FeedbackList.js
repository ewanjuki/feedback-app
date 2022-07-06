import { motion } from "framer-motion";
import { useContext } from "react";
import FeedbackContext from "../../store/feedback-context";
import FeedbackItem from "./FeedbackItem";

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <FeedbackItem item={item} />
        </motion.div>
      ))}
    </div>
  );
}

export default FeedbackList;
