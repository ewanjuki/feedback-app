import { FaTimes, FaEdit } from "react-icons/fa";
import Card from "../UI/Card";

function FeedbackItem(props) {
  const { item } = props;

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="edit">
        <FaEdit color="purple" />
      </button>
      <button className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
