import FeedbackForm from "../components/Feedback/FeedbackForm";
import FeedbackList from "../components/Feedback/FeedbackList";
import FeedbackStats from "../components/Feedback/FeedbackStats";

function HomePage() {
  return (
    <>
      <FeedbackForm />
      <FeedbackStats />
      <FeedbackList />
    </>
  );
}

export default HomePage;
