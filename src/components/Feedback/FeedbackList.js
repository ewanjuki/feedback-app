import { motion } from "framer-motion";
import FeedbackItem from "./FeedbackItem";

function FeedbackList() {
  const feedback = [
    {
      id: 1,
      rating: 10,
      text: "This is feedback item 1",
    },
    {
      id: 2,
      rating: 9,
      text: "This is feedback item 2",
    },
    {
      id: 3,
      rating: 7,
      text: "This is feedback item 3",
    },
  ];

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
