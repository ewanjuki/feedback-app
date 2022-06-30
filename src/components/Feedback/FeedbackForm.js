import Button from "../UI/Button";
import Card from "../UI/Card";
import RatingSelect from "./RatingSelect";

function FeedbackForm() {
  return (
    <Card>
      <form>
        <h2>How would you rate the service with us?</h2>
        <RatingSelect />
        <div className="input-group">
          <input type="text" placeholder="Write a review" />
          <Button type="submit" disabled={false} version="primary">
            Send
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
