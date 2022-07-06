import FeedbackForm from "../components/Feedback/FeedbackForm";
import FeedbackList from "../components/Feedback/FeedbackList";
import FeedbackStats from "../components/Feedback/FeedbackStats";
import AboutIconLink from "../components/AboutIconLink";

function HomePage() {
  return (
    <>
      <FeedbackForm />
      <FeedbackStats />
      <FeedbackList />

      <AboutIconLink />
    </>
  );
}

export default HomePage;
